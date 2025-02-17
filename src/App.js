//import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import ItemsList from "./pages/ItemsList/ItemsList"

function App() {
  return (
    <>
      <ItemsList 
        items={data.notes}
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

export default App;
