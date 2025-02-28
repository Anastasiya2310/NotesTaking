import { INote } from "../../interfaces/interfaces"
import { formatDate } from "../../utils/dateUtils"
import { Box, Typography } from "@mui/material";

function SidebarNotes({ note }: { note: INote }) {
  return (
    <Box>
      <Typography variant="h3">{note.title}</Typography>
      <Box>
        {note.tags.map((tag: string, index: number) => (
          <Box key={index}>{tag}</Box>
        ))}
      </Box>
      <p>{formatDate(note.lastEdited)}</p>
    </Box>
  );
}

export default SidebarNotes;