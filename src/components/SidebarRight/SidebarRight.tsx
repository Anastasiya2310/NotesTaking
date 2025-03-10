import { Button, Box, Typography } from "@mui/material";
import { IconArchive, IconDelete }  from "../../assets/icons";

function SidebarRight(){
  return (
    <Box>
      <Box sx={{ pl: 2, py: 2.5, height: `calc(100vh - 130px)` }}>
        <Button variant="outlined" sx={{ "justifyContent": "flex-start", width: "100%", mb: 1.5, px: 2, py: 1.5 }}>
          <IconArchive sx={{ mr: 1 }} />
          <Typography variant="h4"> Archive Note</Typography>
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