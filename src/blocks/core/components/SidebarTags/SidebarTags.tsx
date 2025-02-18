import ItemsList from "../../../ItemsList/ItemsList"

interface INote {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
}

interface INotesList {
  tags: INote[];
}

function SidebarTags({ tags }: INotesList) {
  return (
    <>
      <ItemsList 
        items={tags}
        renderItem={(tag) => (
          <div>
            {tag.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        )}
      />
    </>
  );
}

export default SidebarTags;