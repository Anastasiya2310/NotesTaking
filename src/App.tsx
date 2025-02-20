import "./App.css"
import "@fontsource/inter"
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Typography from '@mui/material/Typography';
import data from "./data.json"
import Content from "./components/Content/Content";
import SidebarTags from "./components/SidebarTags/SidebarTags"
import SidebarNotes from "./components/SidebarNotes/SidebarNotes"

function App() {
  let tagsArray = data.notes.flatMap((obj) => obj.tags);
  let tagsUnique = [...new Set(tagsArray)];

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body1" component="div">
        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start"
        }}>
          <SidebarTags tags={tagsUnique} />
          <div>
            <SidebarNotes notes={ data.notes } />
            <Content notes={ data.notes } />
          </div>
        </div>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
