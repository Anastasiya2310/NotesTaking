// import './App.css';
// import ItemsList from "../ItemsList/ItemsList"
import { INote } from "../../interfaces/interfaces"
import { formatDate } from "../../utils/dateUtils"
import { Box, Typography } from "@mui/material";

function SidebarNotes({ note }: { note: INote }) {
  return (
    <>
      {/* <ItemsList 
        // items={notes}
        renderItem={(note) => ( */}
          <Box p={1}>
            <Typography variant="h3">{note.title}</Typography>
            <ul>
              {note.tags.map((tag: string, index: number) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            <p>{formatDate(note.lastEdited)}</p>
          </Box>
        {/* )}
      /> */}
    </>
  );
}

export default SidebarNotes;