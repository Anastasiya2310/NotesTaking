import "./App.css"
import "@fontsource/inter"
import { Typography, ThemeProvider, Box, Grid2, useMediaQuery, useTheme } from '@mui/material'
import theme from './theme'
import data from "./data.json"
import Content from "./components/Content/Content"
import SidebarTags from "./components/SidebarTags/SidebarTags"
import SidebarNotes from "./components/SidebarNotes/SidebarNotes"

function App() {
  let tagsArray = data.notes.flatMap((obj) => obj.tags);
  let tagsUnique = [...new Set(tagsArray)];
  const appliedTheme = useTheme();
  const isLargeScreen = useMediaQuery(appliedTheme.breakpoints.up('lg'));

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
        
          <Grid2 container sx={{ 
            width: {
              xs: 343,
              sm: 704,
              md: 1104,
              lg: 1104,
            },
            px: 4
          }} columnSpacing={3}>
            <Box sx={{ pt: 2.5, pr: 2, pb: 2.5, pl: 4 }}>
              <SidebarNotes notes={ data.notes } />
              <Content notes={ data.notes } />
            </Box>
          </Grid2>
        </Box>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
