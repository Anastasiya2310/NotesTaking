import React from "react"

export interface ItemsProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export interface INote {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
}

export interface INotesList {
  notes: INote[];
}

export interface ITagsList {
  tags: string[]
}