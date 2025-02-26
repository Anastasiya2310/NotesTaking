import ItemsList from "../ItemsList/ItemsList"
import { ITagsList } from "../../interfaces/interfaces";
import { Typography, Grid2 } from "@mui/material";
import IconTag from "../../assets/icons/IconTag";

function SidebarTags({ tags }: ITagsList) {
  return (
    <ItemsList 
      items={tags}
      renderItem={(tag) => (
        <Grid2 container>
          <IconTag />
          <Typography component="span">{tag}</Typography>
        </Grid2>
      )}
    />
  );
}

export default SidebarTags;