import { INote } from "../../interfaces/interfaces"
import { formatDate } from "../../utils/dateUtils"
import { Box, Typography} from "@mui/material";

function SidebarNotes({ note }: { note: INote }) {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 1.5, textAlign: "left" }}>{note.title}</Typography>
      <Box sx={{ display: "flex" }}>
        {note.tags.map((tag: string, index: number) => (
          <Box sx={{ mr: 0.5, px: 0.75, py: 0.25, backgroundColor: "neutral.200", borderRadius: 0.5, color: "neutral.950" }} key={index}>
            <Typography variant="h6">{tag}</Typography>
          </Box>
        ))}
      </Box>
      <Typography variant="h6" sx={{ color: "neutral.700", mt: 1.5, textAlign: "left" }}>{formatDate(note.lastEdited)}</Typography>
    </Box>
  );
}

export default SidebarNotes;