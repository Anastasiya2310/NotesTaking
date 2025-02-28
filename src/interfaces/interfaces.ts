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
  tags: string[];
}

export interface ITitle {
  all: string;
  archived: string;
  searched: string;
}

export interface ISidebarLeftProps extends ITagsList {
  setShowArchived: (value: boolean) => void;
  setTitle: (value: string) => void;
  headerTitle: ITitle;
}