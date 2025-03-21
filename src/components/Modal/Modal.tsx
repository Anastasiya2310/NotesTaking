import React from "react"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Box, Divider, useMediaQuery, useTheme, Typography } from "@mui/material"
import { INote, INotesList } from "../../interfaces/interfaces"
import { IconArchive }  from "../../assets/icons"
import axiosInstance from "../../axiosInstance"

function Modal({ setOpenModal, openModal, id, is_archived, setNotes } : 
  { setOpenModal: (value: boolean) => void , 
    openModal: boolean, 
    id: number, 
    is_archived: boolean,
    setNotes: React.Dispatch<React.SetStateAction<INotesList>>
  }) {

  const theme = useTheme(); // Get theme from ThemeProvider
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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
        handleClose();
      }
      
    } catch(error) {
      console.error("Failed to update note", error);
    }
  }

  const handleClose = () => {
    setOpenModal(false);
  }
  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      fullScreen={fullScreen}
      aria-labelledby="responsive-dialog-title"
      sx={{
        "& .MuiDialog-paper": {
          maxWidth: fullScreen ? "100%" : "440px",
        }
      }}
    >
      <Box display="flex" flexDirection="row" sx={{ p: 2.5 }}>
        <IconArchive sx={{ p: 1.25, backgroundColor: "neutral.100", borderRadius: 1 }} />
        <Box>
          <DialogTitle component="h3" id="responsive-dialog-title" sx={{ p: 0, pl: 2, pb: 0.75}}>
            <Typography variant="h3">{"Archive Note"}</Typography>
          </DialogTitle>
          <DialogContent sx={{ p: 0 }}>
            <DialogContentText sx={{ pl: 2 }}>
              Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.
            </DialogContentText>
          </DialogContent>
        </Box>
      </Box>

      <Divider />
      
      <DialogActions sx={{ px: 2.5, py: 2 }}>
        <Button autoFocus onClick={handleClose} sx={{ px: 2, py: 1.5, backgroundColor: "neutral.100" }}>
          <Typography variant="h4">Cancel</Typography>
        </Button>
        <Button variant="contained" onClick={ () => toggleIsArchived(id, is_archived) } sx={{ px: 2, py: 1.5 }} autoFocus>
        <Typography variant="h4">Archive Note</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal;