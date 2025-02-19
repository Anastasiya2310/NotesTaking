// import './App.css';
import ItemsList from "../../../ItemsList/ItemsList"
import { INotesList } from "../../../../interfaces/interfaces";

function SidebarNotes({ notes }: INotesList) {
  return (
    <>
      <ItemsList 
        items={notes}
        renderItem={(note) => (
          <div>
            <h2>{note.title}</h2>
            <ul>
              {note.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        )}
      />
    </>
  );
}

export default SidebarNotes;