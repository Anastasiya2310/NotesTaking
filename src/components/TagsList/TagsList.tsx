import { ItemsProps } from "../../interfaces/interfaces"
import { Box } from "@mui/material"

function TagsList<T>({ items,  renderItem }:ItemsProps<T>) {
  return (
    <>
      {items.map((item, index) => (
        <Box key={index}>{renderItem(item)}</Box>
      ))}
    </>
  )
}

export default TagsList;