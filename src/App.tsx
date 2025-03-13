import { useState, useEffect } from "react";
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
import Content from "./components/Content/Content"
import SidebarLeft from "./components/SidebarLeft/SidebarLeft"
import SidebarNotes from "./components/SidebarNotes/SidebarNotes"
import SidebarRight from "./components/SidebarRight/SidebarRight"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ITitle, INotesList } from "./interfaces/interfaces";
import Header from "./components/Header/Header";
import { IconPlus }  from "./assets/icons";
import useFetchData from "./hooks/useFetchData";

function App() {
  const { data, loading, error } = useFetchData("/notes");
  const [notes, setNotes] = useState<INotesList>([]);
  const [activeTag, setActiveTag] = useState("");
  let tagsArray = notes.flatMap((obj) => obj.tags);
  let tagsUnique = [...new Set(tagsArray)];
  const appliedTheme = useTheme();
  const isLargeScreen = useMediaQuery(appliedTheme.breakpoints.up('lg'));
  const [selectedNoteId, setSelectedNoteId] = useState(0);
  const [showArchived, setShowArchived] = useState(false);
  const filteredIsArchived = notes?.filter(note => !showArchived ? (activeTag === "" || note.tags?.includes(activeTag)) : note.is_archived);
  const [title, setTitle] = useState("All Notes");
  const newNote = {id: 0, title: "Enter a title...", tags: [], content: "Start typing youre note here...", last_edited: "", is_archived: false}

  useEffect(() => {
    if(data) {
      setNotes(data);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const headerTitle:ITitle = {
    all: "All Notes",
    archived: "Archived Notes",
  }
  const selectedNote = notes.find(note => note.id === selectedNoteId);

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body1" component="div">
        <Grid2 container sx={{ width: {
            xs: 375,
            sm: 768,
            md: 1104,
            lg: 1440,
          }, margin: "0 auto"}}>
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
              activeTag={activeTag}
            />
          </Box>
          <Grid2 size={{ xs: 12, lg: 9 }} sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Header title={title} />
            <TabContext value={filteredIsArchived.some(note => note.id === selectedNoteId) ? selectedNoteId : (filteredIsArchived[0]?.id)}>
              <Grid2 container spacing={3} sx={{ alignItems: "flex-start", px: 4, width: "100%" }}>
                <Grid2 size={{ lg: 3 }}>
                  <Box sx={{ height: `calc(100vh - 90px)`, overflow: "scroll", flexDirection: "column", pr: 2, pt: 2.5, textAlign: "left", borderRight: 1, borderColor: "neutral.200"}}>
                    <TabList 
                      onChange={(_event:React.SyntheticEvent, newValue:number) => { setSelectedNoteId(newValue)}}
                      variant="scrollable"
                      orientation="vertical"
                      scrollButtons={false}
                      sx={{ 
                        height: `calc(100vh - 90px)`,
                        textAlign: "left",
                        "& .MuiTabs-indicator": {
                          display: "none",
                        }, 
                      }}
                    >
                      <Box sx={{ pb: 2 }}>
                        <Button variant="contained" 
                          sx={{ display: "flex", justifyContent: "center", width: "100%", mb: 1.5, px: 2, py: 1.5 }} 
                          onClick={() => {
                            setNotes((prevNotes) => [newNote, ...prevNotes ])
                            setSelectedNoteId(newNote.id)
                          }}
                        >
                          <IconPlus sx={{ mr: 1 }} />
                          <Typography variant="h4">Create New Note</Typography>
                        </Button>
                      </Box>
                      {filteredIsArchived?.map((note) => (
                        <Tab 
                          key={note.id} 
                          label={<SidebarNotes note={note} />} 
                          value={note.id} 
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
                          }}
                        />
                        
                      ))}
                    </TabList>
                  </Box>
                </Grid2>

                <Grid2 size={{ lg: 6 }}>
                  {filteredIsArchived?.map((note) => (
                    
                    <TabPanel key={note.id} value={note.id} sx={{ px: 0 }}>
                      <Content note={note} />
                    </TabPanel>
                  ))}
                </Grid2>

                <Grid2 size={{ lg: 3 }}>
                  <Box sx={{ borderLeft: 1, borderColor: "neutral.200" }}>
                  {selectedNote && (
                    <SidebarRight 
                      id={selectedNote.id} 
                      is_archived={selectedNote.is_archived}
                      setNotes={setNotes}
                    />
                  )}
                  </Box>
                </Grid2>
              </Grid2>
            </TabContext>
          </Grid2>
        </Grid2>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
