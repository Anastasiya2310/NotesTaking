import './App.css';
import data from "./data.json"
import SidebarNotes from "./blocks/core/components/SidebarNotes/SidebarNotes"
import SidebarTags from "./blocks/core/components/SidebarTags/SidebarTags"

function App() {
  let tagsArray = data.notes.flatMap((obj) => obj.tags);
  let tagsUnique = [...new Set(tagsArray)];

  return (
    <>
      <div style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start"
      }}>
        <SidebarTags tags={tagsUnique}  />
        <SidebarNotes notes={data.notes}  />
      </div>
    </>
  );
}

export default App;
