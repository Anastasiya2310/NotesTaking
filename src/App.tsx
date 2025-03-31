import { useState, useEffect, useCallback } from "react";
import "./App.css"
import "@fontsource/inter"
import { Typography,
        ThemeProvider,
        useColorScheme,
        Box,
        Grid2,
        useMediaQuery,
        useTheme,
        Tab,
        Button,
        Snackbar, 
        Alert,
        BottomNavigation, 
        BottomNavigationAction,
        Paper } from '@mui/material'
import theme from './theme'
import Content from "./components/Content/Content"
import SidebarLeft from "./components/SidebarLeft/SidebarLeft"
import SidebarNotes from "./components/SidebarNotes/SidebarNotes"
import SidebarRight from "./components/SidebarRight/SidebarRight"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ITitle, INotesList, INote } from "./interfaces/interfaces";
import Header from "./components/Header/Header";
import { IconPlus, IconHome, IconSearch, IconArchive, IconTag, IconSettings }  from "./assets/icons";
import useFetchData from "./hooks/useFetchData";
import Settings from "./components/Settings/Settings";

function App() {
  const { data, loading, error, refetch } = useFetchData("/notes");
  const [notes, setNotes] = useState<INotesList>([]);
  const [activeTag, setActiveTag] = useState("");
  let tagsArray = notes.flatMap((obj) => obj.tags);
  let tagsUnique = [...new Set(tagsArray)];
  const appliedTheme = useTheme();
  const [selectedNoteId, setSelectedNoteId] = useState(0);
  const [showArchived, setShowArchived] = useState(false);
  const [title, setTitle] = useState("All Notes");
  const [searchQuery, setSearchQuery] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
  const [showSettings, setShowSettings] = useState(false);
  // const isMobile = useMediaQuery(appliedTheme.breakpoints?.down("md"))
  const isTablet = useMediaQuery(appliedTheme.breakpoints?.between("md", "lg"));
  const isXL = useMediaQuery(appliedTheme.breakpoints?.up("xl"));
  const [tabletMenuValue, setTabletMenuValue] = useState(0);
  const { mode, setMode } = useColorScheme();
  
  const handleSnackbarOpen = (message: string, severity: "success" | "error") => {
    setSnackbarOpen(true);
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  }

  const searchedNotes = searchQuery ? notes.filter(note => {
    const query = searchQuery.toLowerCase();
    return (
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query) ||
      note.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }) : notes;

  const filteredNotes = searchQuery ? searchedNotes : notes?.filter(note => showArchived ? note.is_archived : (activeTag === "" || note.tags?.includes(activeTag)));
  filteredNotes.sort((a, b) => new Date(b.last_edited).getTime() - new Date(a.last_edited).getTime());

  const newNote = {id: 0, title: "Enter a title...", tags: [], content: "Start typing youre note here...", last_edited: new Date().toISOString(), is_archived: false}
  
  const updateNote = useCallback(async () => {
    if (data) {
      setNotes([...data]
        .filter(note => note.id !== 0)
        .sort((a, b) => new Date(b.last_edited).getTime() - new Date(a.last_edited).getTime()));
    }
  }, [data, setNotes]);
  
  useEffect(() => {
    updateNote();
  }, [data, updateNote]);


  useEffect(() => {
    if(filteredNotes.length > 0 && !filteredNotes.some(note => note.id === selectedNoteId)) {
      setSelectedNoteId(filteredNotes[0].id);
    }
  }, [filteredNotes, selectedNoteId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const headerTitle:ITitle = {
    all: "All Notes",
    archived: "Archived Notes",
    settings: "Settings",
  }
  const selectedNote = notes.find(note => note.id === selectedNoteId);

  if (!mode) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body1" component="div">
        <Grid2 container sx={{ flexGrow: 1, 
          maxWidth: {
            xs: "100%",
            sm: "768px",
            lg: "1110px",
            xl: "1440px"
          },
          margin: "0 auto",
          flexDirection: "row",
          "image-rendering": "auto",
        }}>
          {isTablet && (
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100 }} elevation={3}>
              <BottomNavigation
                showLabels
                value={tabletMenuValue}
                onChange={(event, newValue) => {
                  setTabletMenuValue(newValue);
                }}
              >
                <BottomNavigationAction label="Home" icon={<IconHome />} />
                <BottomNavigationAction label="Search" icon={<IconSearch />} />
                <BottomNavigationAction label="Archived" icon={<IconArchive />} />
                <BottomNavigationAction label="Tags" icon={<IconTag />} />
                <BottomNavigationAction label="Settings" icon={<IconSettings />} />
              </BottomNavigation> 
            </Paper>
              
          )}

          {isXL && (
            <Grid2 sx={{ 
              width: "272px", 
              height: 'calc(100vh - 130px)',
              position: "relative"
            }}>
              <SidebarLeft 
                tags={tagsUnique} 
                setShowArchived={setShowArchived} 
                setTitle={setTitle} 
                headerTitle={headerTitle}
                setActiveTag={setActiveTag} 
                activeTag={activeTag}
                setShowSettings={setShowSettings}
              />
            </Grid2>
          )}
          
          <Grid2 container sx={{ width: `calc(100% - 272px)`, alignItems: "flex-start" }}>
            <Grid2 size={{ xl: 12 }}>
              <Header title={!showSettings ? title : headerTitle.settings} searchQuery={searchQuery} setSearchQuery={setSearchQuery} showSettings={showSettings} setShowSettings={setShowSettings} />
            </Grid2>
            <Grid2 container size={{ xl: 12 }} sx={{ alignItems: "flex-start", px: 4, width: "100%" }}>
              {!showSettings ? (
              <TabContext value={filteredNotes.some(note => note.id === selectedNoteId) ? selectedNoteId : (filteredNotes[0]?.id)}>
                <Grid2 size={{ xl: 3 }}>
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
                            setSelectedNoteId(newNote.id)
                            setNotes((prevNotes) => [newNote, ...prevNotes ])
                          }}
                        >
                          <IconPlus sx={{ mr: 1 }} />
                          <Typography variant="h4">Create New Note</Typography>
                        </Button>
                      </Box>
                      {showArchived ? <Typography variant="h5" sx={{ color: "neutral.700", mb: 2, overflowWrap: "break-word", whiteSpace: "normal" }}>All your archived notes are stored here. You can restore or delete them anytime.</Typography> : null }
                      {activeTag !== "" ? <Typography variant="h5" sx={{ color: "neutral.700", mb: 2, overflowWrap: "break-word", whiteSpace: "normal" }}>All notes with the ”{activeTag}” tag are shown here.</Typography> : null }
                        {filteredNotes?.map((note:INote) => (
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

                <Grid2 size={{ xl: 6 }}>
                  {filteredNotes?.map((note) => (
                    <TabPanel key={note.id} value={note.id} sx={{ px: 2.5 }}>
                      <Content 
                        note={note} 
                        setNotes={setNotes} 
                        tagsUnique={tagsUnique} 
                        updateNote={updateNote} 
                        refetch={refetch} 
                        handleSnackbarOpen={handleSnackbarOpen} 
                      />
                    </TabPanel>
                  ))}
                </Grid2>

                <Grid2 size={{ xl: 3 }}>
                  <Box sx={{ borderLeft: 1, borderColor: "neutral.200" }}>
                  {selectedNote && (
                    <SidebarRight 
                      id={selectedNote.id} 
                      is_archived={selectedNote.is_archived}
                      setNotes={setNotes}
                      handleSnackbarOpen={handleSnackbarOpen}
                    />
                  )}
                  </Box>
                </Grid2>

              </TabContext>) : (
                  <Settings mode={mode} setMode={setMode}/>
                )
              }
            </Grid2>
          </Grid2>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            sx={{
              width: "380px",
              border: "1px solid neutral.200"
            }}
          >
            <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "380px",border: "1px solid", borderColor: "neutral.200", borderRadius: "8px", backgroundColor: "transparent" }}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Grid2>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
