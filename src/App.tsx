import "./App.css";
import "@fontsource/inter";
import data from "./data.json"
import Content from "./components/Content/Content";
import SidebarTags from "./components/SidebarTags/SidebarTags"
import SidebarNotes from "./components/SidebarNotes/SidebarNotes"

function App() {
  let tagsArray = data.notes.flatMap((obj) => obj.tags);
  let tagsUnique = [...new Set(tagsArray)];

  return (
    <>
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
    </>
  );
}

export default App;
