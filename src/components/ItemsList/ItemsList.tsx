import { ItemsProps } from '../../interfaces/interfaces'

function ItemsList<T>({ items,  renderItem }:ItemsProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

export default ItemsList;