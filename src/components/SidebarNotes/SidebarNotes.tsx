import { INote } from "../../interfaces/interfaces"
import { formatDate } from "../../utils/dateUtils"
import { Box, Typography } from "@mui/material";

function SidebarNotes({ note }: { note: INote }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography 
        variant="h3"
        sx={{ 
          maxWidth: "95%",
          color: "text.primary",
          mb: 1.5, 
          textAlign: "left", 
          overflow: "hidden", 
          whiteSpace: "nowrap", 
          textOverflow: "ellipsis", 
        }}>
        {note.title}
      </Typography>
      <Box sx={{ display: "flex" }}>
        {note.tags.map((tag: string, index: number) => (
          <Box sx={{ mr: 0.5, px: 0.75, py: 0.25, backgroundColor: "background.tagsInCard", borderRadius: 0.5 }} key={index}>
            <Typography variant="h6" sx={{ color: "text.primary" }}>{tag}</Typography>
          </Box>
        ))}
      </Box>
      <Typography variant="h6" sx={{ color: "text.datesInCard", mt: 1.5, textAlign: "left" }}>{formatDate(note.last_edited)}</Typography>
    </Box>
  );
}

export default SidebarNotes;