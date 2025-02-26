import { useState } from "react";
import logo from "./assets/images/logo.svg";
import "./App.css"
import "@fontsource/inter"
import { Typography, ThemeProvider, Box, Grid2, useMediaQuery, useTheme, Tab, Button } from '@mui/material'
import theme from './theme'
import data from "./data.json"
import Content from "./components/Content/Content"
import SidebarTags from "./components/SidebarTags/SidebarTags"
import SidebarNotes from "./components/SidebarNotes/SidebarNotes"
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

            <Box component="aside" sx={{ px: 2, py: 1.5 }}>
              <Box sx={{ width: "100%", height: "auto", py: 1.5 }}>
                <Box component="img" src={logo} alt="Logo"  />
              </Box>
              <Button onClick={() => {
                setShowArchived(false);
                setTitle(headerTitle.all);
              }} variant="text" sx={{ "justifyContent": "flex-start", width: "100%" }}>
                {headerTitle.all}
              </Button>
              <Button onClick={() => {
                setShowArchived(true);
                setTitle(headerTitle.archived);
              }} variant="text" sx={{ "justifyContent": "flex-start", width: "100%" }}>
                {headerTitle.archived}
              </Button>
              <SidebarTags tags={tagsUnique} />
            </Box>
          </Box>
          <Grid2 container sx={{ flexDirection: "column", width: {
            xs: 375,
            sm: 768,
            md: 1104,
            lg: 1440,
          }, alignItems: "flex-start"}} columnSpacing={3}>
            <Header title={title} />
            <TabContext value={selectedNoteId}>
              <Grid2 container sx={{ alignItems: "flex-start" }}>
                <Grid2 size={{ lg: 3 }}>
                  <Box sx={{ maxHeight: "100vh", overflow: "scroll" }}>
                    <TabList 
                      onChange={(_event:React.SyntheticEvent, newValue:string) => { setSelectedNoteId(newValue) }}
                      variant="scrollable"
                      orientation="vertical"
                      scrollButtons="auto"
                    >
                      {filteredIsArchived.map((note, index) => (
                        <Tab key={index} label={<SidebarNotes note={note} />} value={String(index)}/>
                      ))}
                    </TabList>
                  </Box>
                </Grid2>
                <Grid2 size={{ lg: 9 }}>
                  {filteredIsArchived.map((note, index) => (
                    <TabPanel key={index} value={String(index)}>
                      <Content note={note} />
                    </TabPanel>
                  ))}
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
