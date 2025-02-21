// import './App.css';
import ItemsList from "../ItemsList/ItemsList"
import { INotesList } from "../../interfaces/interfaces"
import { formatDate } from "../../utils/dateUtils"
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';

function SidebarNotes({ notes }: INotesList) {
  
  return (
    <>
      <ItemsList 
        items={notes}
        renderItem={(note) => (
          <Box p={1}>
            <Typography variant="h3">{note.title}</Typography>
            <ul>
              {note.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            <p>{formatDate(note.lastEdited)}</p>
          </Box>
        )}
      />
    </>
  );
}

export default SidebarNotes;