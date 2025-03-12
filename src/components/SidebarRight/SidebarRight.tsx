import { Button, Box, Typography } from "@mui/material";
import { IconArchive, IconDelete }  from "../../assets/icons";
import { SidebarRightProps, INote, INotesList } from "../../interfaces/interfaces"
import axiosInstance from "../../axiosInstance"

function SidebarRight({ id, is_archived, setNotes }: SidebarRightProps){
  const toggleIsArchived = async(id:number, currentIsArchived:boolean) => {
    try {
      const response = await axiosInstance.post("./notes/archive",{
        id: id,
        is_archived: !currentIsArchived,
      });
      if(response.status === 200) {
        setNotes((prevNotes: INotesList) => {
          return prevNotes.map((note:INote) => {
            return note.id === id ? { ...note, is_archived: !currentIsArchived }: note
          });
        });
      }
      
    } catch(error) {
      console.error("Failed to update note", error);
    }
  }

  return (
    <Box>
      <Box sx={{ pl: 2, py: 2.5, height: `calc(100vh - 130px)` }}>
        <Button variant="outlined" 
          sx={{ "justifyContent": "flex-start", width: "100%", mb: 1.5, px: 2, py: 1.5 }}
          onClick={() => toggleIsArchived(id, is_archived)}
        >
          <IconArchive sx={{ mr: 1 }} />
          <Typography variant="h4"> 
            {is_archived ? 'Unarchive Note':'Archive Note'}</Typography>
        </Button>
        <Button variant="outlined" sx={{ "justifyContent": "flex-start", width: "100%", px: 2, py: 1.5 }}>
          <IconDelete sx={{ mr: 1 }} />
          <Typography variant="h4">Delete Note</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default SidebarRight;