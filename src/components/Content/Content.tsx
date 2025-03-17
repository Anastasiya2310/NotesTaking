import { useState } from "react"
import { INote, INotesList } from "../../interfaces/interfaces"
import { formatDate } from "../../utils/dateUtils"
import { Typography, Box, Divider, Grid2, Button, TextField, SelectChangeEvent } from "@mui/material"
import { IconClock, IconTag } from "../../assets/icons"
import MultipleSelectCheckmarks from "../MultipleSelect/MultipleSelect"
import axiosInstance from "../../axiosInstance"

function Content({ note, setNotes, tagsUnique }: { note: INote, setNotes: (callback: (prevNotes: INote[]) => INote[]) => void, tagsUnique: string[]}) {
  const [title, setTitle] = useState(note.title || "Enter a title...");
  const [lastEdited, setLastEdited] = useState<Date | string>(note.last_edited || new Date());
  const [content, setContent] = useState(note.content || "Start typing your note here...");
  const [selectedTags, setSelectedTags] = useState<string[]>(note.tags || []);
  const tags = tagsUnique;

  const handleTagChange = (event: SelectChangeEvent<typeof selectedTags>) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(
      typeof value === "string" ? value.split(",") : value,
    );
  };

  const handleSave = async() => {
    try {
      const newNote = {
        title: title,
        content: content,
        tags: selectedTags
      };
      const response = await axiosInstance.post("/notes", newNote);
      if(response.status === 201) {
        const createdNote = response.data.note;
        setNotes((prevNotes:INotesList) => [
          createdNote,
          ...prevNotes
        ]);
      }
    } catch(error) {
      console.error("Error saving note: ", error)
    }
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setNotes((prevNotes) => {
      return prevNotes.map((item) => (item.id === note.id ? {...item, title: newTitle} : item))
    })
  }

  const handleTimeChange = () => {
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString();
    setLastEdited(currentDateString);
    setNotes((prevNotes) => {
      return prevNotes.map((item) => item.id === note.id ? { ...item, last_edited: currentDateString } : item)
    })
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    setNotes((prevNotes) => {
      return prevNotes.map((item) => item.id === note.id ? {...item, content: newContent} : item);
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
          id="standard-basic"
          variant="standard"
          value={title}
          onChange={handleTitleChange}
          slotProps={{
            input: {
              sx: {
                typography: "h1",
                mb: 2,
              },
            },
          }}
          sx={{
            "& .MuiInput-underline:before": { borderBottom: "none" },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottom: "none" }
          }}
        />
      </Box>
      <Box>
        <Grid2 container spacing={1} sx={{ mb: 1 }}>
          <Grid2 size={4} sx={{ display: "flex", alignItems: "center" }}>
            <IconTag sx={{ mr: 0.75 }}/>
            <Typography variant="h5">Tags: &nbsp;</Typography>
          </Grid2> 
          
          <Grid2>
            <MultipleSelectCheckmarks 
              tagsList={tags} 
              selectedTags={selectedTags}
              handleTagChange={handleTagChange}
            /> 
          </Grid2>
        </Grid2>
        <Grid2 container spacing={1}>
          <Grid2 size={4} sx={{ display: "flex", alignItems: "center" }}>
            <IconClock sx={{ mr: 0.75 }} />
            <Typography variant="h5">Last Edited: &nbsp;</Typography>
          </Grid2>
          <Grid2 onChange={handleTimeChange} sx={{ cursor: 'pointer' }}>
          <Typography variant="h5">{formatDate(typeof lastEdited === 'string' ? lastEdited : lastEdited.toISOString())}</Typography>
          </Grid2>
        </Grid2>
      </Box>
      <Divider sx={{ my: 2 }} />
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ "min-height": "100%", flex: 1 }}
        >
          <TextField 
            fullWidth
            id="standard-basic"
            variant="standard"
            value={content}
            onChange={handleContentChange}
            multiline
            slotProps={{
              input: {
                sx: {
                  typography: "h5",
                  whiteSpace: "pre-wrap"
                },
              },
            }}
            sx={{
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottom: "none" }
            }}
          />
        </Box>
      <Divider sx={{ my: 2 }} />
      <Box display="flex" sx={{ "alignItems": "flex-end" }}>
        <Button variant="contained" sx={{ mr: 2 }} onClick={handleSave}>
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