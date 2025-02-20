import ItemsList from "../ItemsList/ItemsList"
import { ITagsList } from "../../interfaces/interfaces";
import logo from "../../assets/images/logo.svg";

function SidebarTags({ tags }: ITagsList) {
  return (
    <aside>
      <img src={logo} alt="Logo" />
      <ItemsList 
        items={tags}
        renderItem={(tag) => (
          <div>{tag}</div>
        )}
      />
    </aside>
  );
}

export default SidebarTags;