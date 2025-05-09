import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const connectionString = process.env.NOTES_NEON_CONNECTION_STRING;
if (!connectionString) {
  throw new Error("NOTES_NEON_CONNECTION_STRING is not defined");
}
const sql = neon(connectionString);

app.get("/notes", async (_, res) => {
  try {
    const notes = await sql("SELECT * FROM notes");
    const decodeContent = notes.map(note => ({
      ...note,
      content: note.content.replace(/\\n/g, "\n")
    }))
    res.json(decodeContent);
  } catch(error) {
    const err = error as Error
    res.status(500).json({ Error: "Failed to fetch notes", details: err.message });
  }
});

app.post("/notes/archive", async (req, res) => {
  const { id, is_archived } = req.body;

  if(typeof id !== "number" || typeof is_archived !== "boolean") {
    return res.status(400).json({ error: "Invalid request data" })
  }

  try {
    const result = await sql(
      "UPDATE notes SET is_archived = $1 WHERE id = $2 RETURNING *",
      [is_archived, id]
    );
    if(result.length === 0) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ message: "Note updated successfully", note: result[0] })
  } catch(error) {
    const err = error as Error;
    res.status(500).json({ error: "Failed to update note", details: err.message })
  }
});

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;

  if(!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "Invalid note ID" })
  }

  try {
    const result = await sql(
      "DELETE FROM notes WHERE id = $1 RETURNING *",[id]);

    if(result.length === 0) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ message: "Note deleted successfully", note: result[0] })
  } catch(error) {
    const err = error as Error;
    res.status(500).json({ error: "Failed to delete note", details: err.message })
  }
});

app.post("/notes", async (req, res) => {
  const { title, content, tags } = req.body;

  if(!title || !content) {
    return res.status(404).json({ error: "Title and content fields are required" })
  }

  try {
    const result = await sql("INSERT INTO notes (title, content, tags, last_edited) VALUES ($1, $2, $3, NOW()) RETURNING *", [title, content, tags || []]);
    res.status(201).json({ message: "Note was successfully created", note: result[0] })
  } catch(error) {
    const err = error as Error;
    res.status(404).json({ error: "Failed to create new note", details: err.message })
  }
});

app.put("/notes/:id", async(req, res) => {
  const { id } = req.params;
  const { title, content, tags } = req.body;

  if(!id || isNaN(Number(id))) {
    res.status(400).json("Invalid note ID");
  }

  try {
    const result = await sql("UPDATE notes SET title = $1, content = $2, tags = $3, last_edited = NOW() WHERE id = $4 RETURNING *",
      [title, content, tags || [], id]
    );
    if(result.length === 0) {
      res.status(404).json("Note not found");
    }

    res.status(200).json({ message: "Note was updated successfully", note: result[0] })
  } catch(error) {
    const err = error as Error;
    res.status(500).json({ err: "Failed to update note", details: err.message });
  }
})

app.listen(PORT, () => {
  console.log(`server is working at port http://localhost:${PORT}`);
});
