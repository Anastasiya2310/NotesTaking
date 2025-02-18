// import './App.css';
import ItemsList from "../../../ItemsList/ItemsList"

interface INote {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
}

interface INotesList {
  notes: INote[];
}

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