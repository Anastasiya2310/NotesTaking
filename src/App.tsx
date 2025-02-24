import { useState } from "react";
import "./App.css"
import "@fontsource/inter"
import { Typography, ThemeProvider, Box, Grid2, useMediaQuery, useTheme, Tab } from '@mui/material'
import theme from './theme'
import data from "./data.json"
import Content from "./components/Content/Content"
import SidebarTags from "./components/SidebarTags/SidebarTags"
import SidebarNotes from "./components/SidebarNotes/SidebarNotes"
import { TabContext, TabList, TabPanel } from "@mui/lab";

function App() {
  let tagsArray = data.notes.flatMap((obj) => obj.tags);
  let tagsUnique = [...new Set(tagsArray)];
  const appliedTheme = useTheme();
  const isLargeScreen = useMediaQuery(appliedTheme.breakpoints.up('lg'));
  const [selectedNoteId, setSelectedNoteId] = useState(data.notes.length > 0 ? "0" : "")

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body1" component="div">
        <Box sx={{ display: "flex", width: "100vw", justifyContent: "center", backgroundColor:(theme) => theme.palette.neutral?.[100] }}>
          <Box sx={{ 
            width: isLargeScreen ? 272 : "100vw", 
            height: isLargeScreen ? "100vh" : "74px",
            position: isLargeScreen ? "relative" : "fixed",
            bottom: isLargeScreen ? "" : "0",
          }}>
            <SidebarTags tags={tagsUnique} />
          </Box>
        
          <Grid2 container sx={{ px: 4, pt: 2.5, pb: 2.5 }} columnSpacing={3}>
            <TabContext value={selectedNoteId}>
              <Grid2 size={{ lg: 3 }}>
                <Box sx={{ maxHeight: "100vh", overflow: "scroll" }}>
                  <TabList 
                    onChange={(_event:React.SyntheticEvent, newValue:string) => { setSelectedNoteId(newValue) }}
                    variant="scrollable"
                    orientation="vertical"
                    scrollButtons="auto"
                  >
                    {data.notes.map((note, index) => (
                      <Tab key={index} label={<SidebarNotes note={note} />} value={String(index)}/>
                    ))}
                  </TabList>
                </Box>
              </Grid2>
              <Grid2 size={{ lg: 9 }}>
                {data.notes.map((note, index) => (
                  <TabPanel key={index} value={String(index)}>
                    <Content note={note} />
                  </TabPanel>
                ))}
              </Grid2>
            </TabContext>
          </Grid2>
        </Box>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
