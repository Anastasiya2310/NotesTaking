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
    res.json(notes);
  } catch (error:any) {
    res.status(500).json({ Error: "Failed to fetch notes", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`server is working at port http://localhost:${PORT}`);
});
