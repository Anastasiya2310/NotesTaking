import { INote } from "../../interfaces/interfaces";
import { formatDate } from "../../utils/dateUtils"
import { Typography, Box, Divider, Grid2, Button } from '@mui/material'
import { IconClock, IconTag } from '../../assets/icons';

function Content({ note }: { note: INote }) {
  return (
    <Box display="flex" sx={{ flexDirection: "column", minHeight: `calc(100vh - 130px)` }}>
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>{note.title}</Typography>
      <Box>
        <Grid2 container spacing={1} sx={{ mb: 1 }}>
          <Grid2 size={4} sx={{ display: "flex", alignItems: "center" }}>
            <IconTag sx={{ mr: 0.75 }}/>
            Tags: &nbsp;
          </Grid2>  
          <Grid2>{note.tags.map((tag, index) => (<span key={index} style={{display: "inline-block", paddingRight: "5px"}}>{tag}{index !== note.tags.length-1 && ","}</span>))}</Grid2>
        </Grid2>
        <Grid2 container spacing={1}>
          <Grid2 size={4} sx={{ display: "flex", alignItems: "center" }}>
            <IconClock sx={{ mr: 0.75 }} />
            Last Edited: &nbsp;
          </Grid2>
          <Grid2>{formatDate(note.lastEdited)}</Grid2>
        </Grid2>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box component="p" sx={{ m: 0, height: "100%", flexGrow: 1 }}> 
        {note.content}
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box display="flex" sx={{ "alignItems": "flex-end" }}>
        <Button variant="contained" sx={{ mr: 2 }}>Save Note</Button>
        <Button variant="contained" sx={{ bgcolor: "neutral.100", color: "neutral.600" }}>Cancel</Button>
      </Box>
    </Box>
  )
}

export default Content;