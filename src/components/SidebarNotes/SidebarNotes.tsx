// import './App.css';
import ItemsList from "../ItemsList/ItemsList"
import { INotesList } from "../../interfaces/interfaces"
import { formatDate } from "../../utils/dateUtils"

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
            <p>{formatDate(note.lastEdited)}</p>
          </div>
        )}
      />
    </>
  );
}

export default SidebarNotes;