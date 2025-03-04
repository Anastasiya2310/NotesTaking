import { Button, Box, Divider } from "@mui/material";
import { IconArchive, IconDelete }  from "../../assets/icons";

function SidebarRight() {
  return (
    <Box sx={{ display: "flex" }}>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ pl: 2, py: 2.5, height: "100vh" }}>
        <Button variant="outlined" sx={{ "justifyContent": "flex-start", width: "100%", mb: 1.5, px: 2, py: 1.5 }}>
          <IconArchive sx={{ mr: 1 }} />
          Archive Note
        </Button>
        <Button variant="outlined" sx={{ "justifyContent": "flex-start", width: "100%", px: 2, py: 1.5 }}>
          <IconDelete sx={{ mr: 1 }} />
          Delete Note
        </Button>
      </Box>
    </Box>
  );
}

export default SidebarRight;