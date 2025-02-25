import ItemsList from "../ItemsList/ItemsList"
import { ITagsList } from "../../interfaces/interfaces";


function SidebarTags({ tags }: ITagsList) {
  return (
    <ItemsList 
      items={tags}
      renderItem={(tag) => (
        <div>{tag}</div>
      )}
    />
  );
}

export default SidebarTags;