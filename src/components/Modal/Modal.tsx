import React from "react"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Box, Divider } from "@mui/material"
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
      aria-labelledby="responsive-dialog-title"
    >
      <Box display="flex" flexDirection="row">
        <IconArchive sx={{ mr: 1 }} />
        <Box>
          <DialogTitle id="responsive-dialog-title">
            {"Archive Note"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.
            </DialogContentText>
          </DialogContent>
        </Box>
      </Box>

      <Divider />
      
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={ () => toggleIsArchived(id, is_archived) } autoFocus>
          Archive
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal;