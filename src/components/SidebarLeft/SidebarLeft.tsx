import { useState } from "react";
import TagsList from "../TagsList/TagsList"
import logo from "../../assets/images/logo.svg";
import { ISidebarLeftProps } from "../../interfaces/interfaces";
import { Grid2, Box, Divider, Button, Typography } from "@mui/material";
import { IconTag, IconHome, IconArchive } from "../../assets/icons";

function SidebarLeft({ tags, setShowArchived, setTitle, headerTitle, setActiveTag}: ISidebarLeftProps) {
  const handleTagClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tag = e.currentTarget.innerText?.trim();
    if(tag) {
      setActiveTag(tag);
      setShowArchived(false);
      setTitle(`Notes Tagged: ${tag}`);
      setActiveButton(tag);
    }
  };
  const [activeButton, setActiveButton] = useState<string>(headerTitle.all);

  return (
    <Box sx={{ display: "flex", height: `calc(100vh - 10px)`, width: "272px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Sidebar Header */}
        <Box sx={{ px: 2, py: 1.5 }}>
          <Box sx={{ width: "100%", height: "auto", py: 1.5 }}>
            <Box component="img" src={logo} alt="Logo" />
          </Box>
          <Button
            onClick={(e) => {
              setShowArchived(false);
              setTitle(headerTitle.all);
              setActiveTag("");
              setActiveButton(headerTitle.all);

            }}
            variant="text"
            sx={{ backgroundColor: (activeButton === headerTitle.all) ? "neutral.100" : "transparent", justifyContent: "flex-start", width: "100%", px: 1.5, py: 1.25 }}
          >
            <IconHome sx={{ mr: 1 }} />
            <Typography variant="h4">{headerTitle.all}</Typography>
          </Button>
          <Button
            onClick={() => {
              setShowArchived(true);
              setTitle(headerTitle.archived);
              setActiveTag("");
              setActiveButton(headerTitle.archived);
            }}
            variant="text"
            sx={{ backgroundColor: (activeButton === headerTitle.archived) ? "neutral.100" : "transparent", justifyContent: "flex-start", width: "100%", px: 1.5, py: 1.25 }}
          >
            <IconArchive sx={{ mr: 1 }} />
            <Typography variant="h4">{headerTitle.archived}</Typography>
          </Button>
        </Box>

        <Box sx={{ px: 2, py: 1.5 }}>
          <TagsList
            items={tags}
            renderItem={(tag) => (
              <Grid2 container>
                <Button sx={{ backgroundColor: (activeButton === tag) ? "neutral.100" : "transparent", px: 1.5, py: 1.25, width: "100%", justifyContent: "flex-start" }}
                  onClick={handleTagClick}>
                  <IconTag sx={{ mr: 1 }}/>
                  <Typography variant="h4">{tag.trim()}</Typography>
                </Button>
              </Grid2>
            )}
          />
        </Box>
      </Box>
    
      <Divider orientation="vertical" flexItem />
    </Box>
  );
}

export default SidebarLeft;