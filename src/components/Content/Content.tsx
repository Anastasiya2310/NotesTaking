import { useState } from "react"
import { INote } from "../../interfaces/interfaces";
import { formatDate } from "../../utils/dateUtils"
import { Typography, Box, Divider, Grid2, Button, TextField } from '@mui/material'
import { IconClock, IconTag } from '../../assets/icons';

function Content({ note, setNotes }: { note: INote, setNotes: (callback: (prevNotes: INote[]) => INote[]) => void }) {
  const [title, setTitle] = useState(note.title);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    setNotes((prevNotes) => {
      return prevNotes.map((item) => (item.id === note.id ? {...item, title: newTitle} : item))
    })
  }

  return (
    <Box display="flex" sx={{ flexDirection: "column", minHeight: `calc(100vh - 130px)` }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField 
          fullWidth
          id="standard-basic"
          variant="standard"
          value={title}
          onChange={handleTitleChange}
          slotProps={{
            input: {
              sx: {
                typography: "h1",
                mb: 2,
                width: "100%",
              },
            },
          }}
          sx={{
            width: "100%",
            "& .MuiInput-underline:before": { borderBottom: "none" },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottom: "none" }
          }}
        />
      </Box>
      {/* <Typography variant="h1" component="h1" sx={{ mb: 2 }}>{note.title}</Typography> */}
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
          <Grid2>{formatDate(note.last_edited)}</Grid2>
        </Grid2>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box component="p" sx={{ m: 0, height: "100%", flexGrow: 1, whiteSpace: "pre-wrap" }}> 
        {note.content}
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box display="flex" sx={{ "alignItems": "flex-end" }}>
        <Button variant="contained" sx={{ mr: 2 }}>
          <Typography variant="h4">Save Note</Typography>
        </Button>
        <Button variant="containedCancel">
          <Typography variant="h4">Cancel</Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default Content;