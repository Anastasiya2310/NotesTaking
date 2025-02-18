import React from "react"

interface ItemsProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

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