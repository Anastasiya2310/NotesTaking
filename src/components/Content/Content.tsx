import { INote } from "../../interfaces/interfaces";
// import ItemsList from "../ItemsList/ItemsList"
import { formatDate } from "../../utils/dateUtils"

function Content({ note }: { note: INote }) {
  return (
    //Header
      // search
      // settings
    <div>
      {/* <ItemsList 
        items={notes}
        renderItem={(note) => ( */}
          <>
            <h1>{note.title}</h1>
            <div>
              <span><b>Tags:</b> &nbsp;</span>  
              <span>{note.tags.map((tag, index) => (<span key={index} style={{display: "inline-block", paddingRight: "5px"}}>{tag}</span>))}</span>
            </div>
            <div>
              <span><b>Last Edited:</b> &nbsp;</span>
              <span>{formatDate(note.lastEdited)}</span>
            </div>
            <div> 
              <p>{note.content}</p>
            </div>
          </>
        {/* )}
      /> */}
      
    </div>
  )
}

export default Content;