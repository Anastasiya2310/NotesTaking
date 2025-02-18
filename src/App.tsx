import './App.css';
import data from "./data.json"
import SidebarNotes from "./blocks/core/components/SidebarNotes/SidebarNotes"
import SidebarTags from "./blocks/core/components/SidebarTags/SidebarTags"

function App() {
  return (
    <>
      <div style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start"
      }}>
        <SidebarTags tags={data.notes}  />
        <SidebarNotes notes={data.notes}  />
      </div>
    </>
  );
}

export default App;
