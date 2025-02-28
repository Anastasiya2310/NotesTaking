import { useState } from "react";
import "./App.css"
import "@fontsource/inter"
import { Typography, ThemeProvider, Box, Grid2, useMediaQuery, useTheme, Tab, Divider } from '@mui/material'
import theme from './theme'
import data from "./data.json"
import Content from "./components/Content/Content"
import SidebarLeft from "./components/SidebarLeft/SidebarLeft"
import SidebarNotes from "./components/SidebarNotes/SidebarNotes"
import SidebarRight from "./components/SidebarRight/SidebarRight"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ITitle } from "./interfaces/interfaces";
import Header from "./components/Header/Header";

function App() {
  let tagsArray = data.notes.flatMap((obj) => obj.tags);
  let tagsUnique = [...new Set(tagsArray)];
  const appliedTheme = useTheme();
  const isLargeScreen = useMediaQuery(appliedTheme.breakpoints.up('lg'));
  const [selectedNoteId, setSelectedNoteId] = useState(data.notes.length > 0 ? "0" : "");
  const [showArchived, setShowArchived] = useState(false);
  const filteredIsArchived = data.notes.filter(note => showArchived ? note.isArchived : note);
  const headerTitle:ITitle = {
    all: "All Notes",
    archived: "Archived Notes",
    searched: "",
  }
  const [title, setTitle] = useState("All Notes");

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body1" component="div">
        <Box sx={{ display: "flex", width: "100vw", justifyContent: "center" }}>
          <Box sx={{ 
            width: isLargeScreen ? 272 : "100vw", 
            height: isLargeScreen ? "100vh" : "74px",
            position: isLargeScreen ? "relative" : "fixed",
            bottom: isLargeScreen ? "" : "0",
          }}>
          <SidebarLeft 
            tags={tagsUnique} 
            setShowArchived={setShowArchived} 
            setTitle={setTitle} 
            headerTitle={headerTitle} 
          />
          </Box>
          <Grid2 container sx={{ flexDirection: "column", width: {
            xs: 375,
            sm: 768,
            md: 1104,
            lg: 1440,
          }, alignItems: "flex-start"}}>
            <Header title={title} />
            <TabContext value={selectedNoteId}>
              <Grid2 container sx={{ alignItems: "flex-start", pl: 4, pr: 4 }}>
                <Grid2 size={{ lg: 3 }}>
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ maxHeight: "100vh", overflow: "scroll" }}>
                      <TabList 
                        onChange={(_event:React.SyntheticEvent, newValue:string) => { setSelectedNoteId(newValue) }}
                        variant="scrollable"
                        orientation="vertical"
                        scrollButtons="auto"
                      >
                        {filteredIsArchived.map((note, index) => (
                          <Tab key={index} label={<SidebarNotes note={note} />} value={String(index)} sx={{ justifyContent: "flex-start" }}/>
                        ))}
                      </TabList>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                  </Box>
                </Grid2>

                <Grid2 size={{ lg: 6 }}>
                  {filteredIsArchived.map((note, index) => (
                    <TabPanel key={index} value={String(index)}>
                      <Content note={note} />
                    </TabPanel>
                  ))}
                </Grid2>

                <Grid2 size={{ lg: 3 }}>
                  <SidebarRight />
                </Grid2>
              </Grid2>
            </TabContext>
          </Grid2>
        </Box>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
