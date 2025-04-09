import { useState } from "react";
import TagsList from "../TagsList/TagsList"
import { ISidebarLeftProps } from "../../interfaces/interfaces";
import { Grid2, Box, Divider, Button, Typography } from "@mui/material";
import { IconTag, IconHome, IconArchive, IconChevronR, Logo } from "../../assets/icons";
import { Link } from "react-router-dom";

function SidebarLeft({ tags, setShowArchived, setTitle, headerTitle, setActiveTag, activeTag, setShowSettings}: ISidebarLeftProps) {
  const handleTagClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tag = e.currentTarget.innerText?.trim();
    setActiveTag(tag === activeTag ? "" : tag);
    setShowArchived(false);
    setTitle(`Notes Tagged: ${tag}`);
    setActiveButton(tag);
    setShowSettings(false);
  };

  const [activeButton, setActiveButton] = useState<string>(headerTitle.all);

  return (
    <Box sx={{ display: "flex", height: `calc(100vh - 10px)`}}>
      <Box sx={{ px: 2 }}>
        <Box sx={{ py: 1.5 }}>
          <Box sx={{ width: "100%", height: "auto", py: 1.5 }}>
            <Link to="/">
              <Logo sx={{ width: "96px", height: "28px", color: "text.primary"}}/>
            </Link>
          </Box>
          <Button
            onClick={() => {
              setShowArchived(false);
              setTitle(headerTitle.all);
              setActiveButton(headerTitle.all);
              setActiveTag("");
              setShowSettings(false);
            }}
            variant="text"
            sx={{ backgroundColor: (activeButton === headerTitle.all) ? "background.notesActive" : "transparent", width: "100%", px: 1.5, py: 1.25, justifyContent: "space-between", alignItems: "center", color: "text.primary" }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {(activeButton === headerTitle.all) ? <IconHome sx={{ mr: 1, color: "primary.main" }}/> : <IconHome sx={{ mr: 1 }} />}
              <Typography variant="h4">{headerTitle.all}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {(activeButton === headerTitle.all) ? <IconChevronR /> : null}
            </Box>
          </Button>
          <Button
            onClick={() => {
              setTitle(headerTitle.archived);
              setActiveButton(headerTitle.archived);
              setActiveTag("");
              setShowArchived(true);
              setShowSettings(false);
            }}
            variant="text"
            sx={{ backgroundColor: (activeButton === headerTitle.archived) ? "background.notesActive" : "transparent", width: "100%", px: 1.5, py: 1.25, justifyContent: "space-between", alignItems: "center" }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {(activeButton === headerTitle.archived) ? <IconArchive sx={{ mr: 1, color: "primary.main" }}/> : <IconArchive sx={{ mr: 1 }} /> }
              <Typography variant="h4">{headerTitle.archived}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {(activeButton === headerTitle.archived) ? <IconChevronR /> : null}
            </Box>
          </Button>
        </Box>
        <Divider />
        <Typography sx={{ color: "neutral.500", px: 1, py: 1.5 }}>Tags</Typography>
        <Box>
          <TagsList
            items={tags}
            renderItem={(tag) => (
              <Grid2 container>
                <Button sx={{ backgroundColor: (activeButton === tag) ? "background.notesActive" : "transparent", px: 1.5, py: 1.25, width: "100%", justifyContent: "space-between", alignItems: "center" }}
                  onClick={handleTagClick}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {(activeButton === tag) ? <IconTag sx={{ mr: 1, color: "primary.main" }}/> : <IconTag sx={{ mr: 1 }}/>}
                    <Typography variant="h4">{tag.trim()}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {(activeButton === tag) ? <IconChevronR /> : null}
                  </Box>
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