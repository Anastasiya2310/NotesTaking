import { useState } from "react";
import "./App.css"
import "@fontsource/inter"
import { Typography, 
        ThemeProvider, 
        Box, 
        Grid2, 
        useMediaQuery, 
        useTheme, 
        Tab, 
 
        Button } from '@mui/material'
import theme from './theme'
import data from "./data.json"
import Content from "./components/Content/Content"
import SidebarLeft from "./components/SidebarLeft/SidebarLeft"
import SidebarNotes from "./components/SidebarNotes/SidebarNotes"
import SidebarRight from "./components/SidebarRight/SidebarRight"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ITitle } from "./interfaces/interfaces";
import Header from "./components/Header/Header";
import { IconPlus }  from "./assets/icons";

function App() {
  const notes = data.notes;
  const [activeTag, setActiveTag] = useState("");
  let tagsArray = notes.flatMap((obj) => obj.tags);
  let tagsUnique = [...new Set(tagsArray)];
  const appliedTheme = useTheme();
  const isLargeScreen = useMediaQuery(appliedTheme.breakpoints.up('lg'));
  const [selectedNoteId, setSelectedNoteId] = useState(notes.length > 0 ? "0" : "");
  const [showArchived, setShowArchived] = useState(false);
  const filteredIsArchived = notes.filter(note => !showArchived ? (activeTag === "" || note.tags?.includes(activeTag)) : note.isArchived);
  const [title, setTitle] = useState("All Notes");
  
  const headerTitle:ITitle = {
    all: "All Notes",
    archived: "Archived Notes",
  }
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body1" component="div">
        <Box sx={{ display: "flex", width: "100vw", justifyContent: "center" }}>
          <Box sx={{ 
            width: isLargeScreen ? 272 : "100vw", 
            height: isLargeScreen ? `calc(100vh - 130px)` : "74px",
            position: isLargeScreen ? "relative" : "fixed",
            bottom: isLargeScreen ? "" : "0",
          }}>
          <SidebarLeft 
            tags={tagsUnique} 
            setShowArchived={setShowArchived} 
            setTitle={setTitle} 
            headerTitle={headerTitle}
            setActiveTag={setActiveTag} 
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
              <Grid2 container spacing={3} sx={{ alignItems: "flex-start", pl: 4, pr: 4, width: "100%" }}>
                <Grid2 size={{ lg: 3 }}>

                  <Box sx={{ height: `calc(100vh - 90px)`, overflow: "scroll", flexDirection: "column", pr: 2, textAlign: "left", borderRight: 1, borderColor: "neutral.200"}}>
                    <TabList 
                      onChange={(_event:React.SyntheticEvent, newValue:string) => { setSelectedNoteId(newValue) }}
                      variant="scrollable"
                      orientation="vertical"
                      scrollButtons="auto"
                      sx={{ 
                        height: `calc(100vh - 90px)`,
                        textAlign: "left",
                        "& .MuiTabs-indicator": {
                          display: "none",
                        }, 
                      }}
                    >
                      <Box sx={{ pt: 2.5, pb: 2 }}>
                        <Button variant="contained" sx={{ "justifyContent": "flex-start", width: "100%", mb: 1.5, px: 2, py: 1.5 }}>
                          <IconPlus sx={{ mr: 1 }} />
                          Create New Note
                        </Button>
                      </Box>
                      {filteredIsArchived.map((note, index) => (
                        <Tab 
                          key={index} 
                          label={<SidebarNotes note={note} />} 
                          value={String(index)} 
                          sx={{ 
                            textTransform: "capitalize",
                            display: "flex",
                            alignItems: "flex-start",
                            p: 1,
                            borderBottom: 1, 
                            borderColor: "neutral.200",
                            "&.Mui-selected": {
                              borderRadius: 0.75,
                              backgroundColor: "neutral.100",
                              color: "neutral.900",
                              borderBottom: 1,
                              borderColor: "transparent",
                            },
                            
                          }}/>
                      ))}
                    </TabList>
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
