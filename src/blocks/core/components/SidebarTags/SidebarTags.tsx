import ItemsList from "../../../ItemsList/ItemsList"
import { ITagsList } from "../../../../interfaces/interfaces";

function SidebarTags({ tags }: ITagsList) {
  return (
    <>
      <ItemsList 
        items={tags}
        renderItem={(tag) => (
          <div>
            <p>{tag}</p>
          </div>
        )}
      />
    </>
  );
}

export default SidebarTags;