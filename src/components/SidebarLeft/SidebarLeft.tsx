import TagsList from "../TagsList/TagsList"
import logo from "../../assets/images/logo.svg";
import { ISidebarLeftProps } from "../../interfaces/interfaces";
import { Typography, Grid2, Box, Divider, Button } from "@mui/material";
import { IconTag, IconHome, IconArchive } from "../../assets/icons";

function SidebarLeft({ tags, setShowArchived, setTitle, headerTitle }: ISidebarLeftProps) {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "272px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Sidebar Header */}
        <Box sx={{ px: 2, py: 1.5 }}>
          <Box sx={{ width: "100%", height: "auto", py: 1.5 }}>
            <Box component="img" src={logo} alt="Logo" />
          </Box>
          <Button
            onClick={() => {
              setShowArchived(false);
              setTitle(headerTitle.all);
            }}
            variant="text"
            sx={{ justifyContent: "flex-start", width: "100%", px: 1.5, py: 1.25 }}
          >
            <IconHome sx={{ mr: 1 }} />
            {headerTitle.all}
          </Button>
          <Button
            onClick={() => {
              setShowArchived(true);
              setTitle(headerTitle.archived);
            }}
            variant="text"
            sx={{ justifyContent: "flex-start", width: "100%", px: 1.5, py: 1.25 }}
          >
            <IconArchive sx={{ mr: 1 }} />
            {headerTitle.archived}
          </Button>
        </Box>

        {/* Sidebar Tags */}
        <TagsList
          items={tags}
          renderItem={(tag) => (
            <Grid2 container>
              <IconTag />
              <Typography component="span">{tag}</Typography>
            </Grid2>
          )}
        />
      </Box>
    
      <Divider orientation="vertical" flexItem />
    </Box>
  );
}

export default SidebarLeft;