import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Box, Divider, useMediaQuery, Typography } from "@mui/material"
import { IconArchive, IconDelete }  from "../../assets/icons"

function Modal({ setOpenModal, openModal, actionType, handleAction, id } : 
  { setOpenModal: (value: boolean) => void , 
    openModal: boolean, 
    actionType: "archive" | "delete", 
    handleAction: (id: number) => void,
    id: number
  }) {

  const fullScreen = useMediaQuery('breakpoints.down("md")');
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
        {actionType === "archive" ? (
          <IconArchive sx={{ p: 1.25, backgroundColor: "neutral.100", borderRadius: 1, boxSizing: "content-box" }} />
        ) : (
          <IconDelete sx={{ p: 1.25, backgroundColor: "neutral.100", borderRadius: 1, boxSizing: "content-box" }} />
        )}
        <Box>
          <DialogTitle component="h3" id="responsive-dialog-title" sx={{ p: 0, pl: 2, pb: 0.75}}>
            <Typography variant="h3">{actionType === "archive" ? "Archive Note" : "Delete Note"}</Typography>
          </DialogTitle>
          <DialogContent sx={{ p: 0 }}>
            <DialogContentText sx={{ pl: 2 }}>
            {actionType === "archive" ? (
                "Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime."
              ) : (
                "Are you sure you want to permanently delete this note? This action cannot be undone."
              )}
            </DialogContentText>
          </DialogContent>
        </Box>
      </Box>

      <Divider />
      
      <DialogActions sx={{ px: 2.5, py: 2 }}>
        <Button autoFocus onClick={handleClose} sx={{ px: 2, py: 1.5, backgroundColor: "neutral.100" }}>
          <Typography variant="h4">Cancel</Typography>
        </Button>
        <Button variant="contained" onClick={ () => handleAction(id) } sx={{ px: 2, py: 1.5, backgroundColor: actionType === "delete" ? "error.main" : "primary.main" }} autoFocus>
          <Typography variant="h4">{actionType === "archive" ? "Archive Note" : "Delete Note"}</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal;