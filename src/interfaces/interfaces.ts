import React from "react"

export interface ItemsProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export interface INote {
  id: number;
  title: string;
  tags: string[];
  content: string;
  last_edited: string;
  is_archived: boolean;
}

export type INotesList = INote[];

export interface ITagsList {
  tags: string[];
}

export interface ITitle {
  all: string;
  archived: string;
  settings: string;
}

export interface ISidebarLeftProps extends ITagsList {
  setShowArchived: (value: boolean) => void;
  setTitle: (value: string) => void;
  headerTitle: ITitle;
  setActiveTag: (value: string) => void;
  activeTag: string;
  setShowSettings: (value: boolean) => void;
}

export interface IFilteredTags {
  notes: INotesList;
  selectedTag: string;
}

export interface IRightSidebar extends INotesList {
  selectedNoteId: string;
}
export interface SidebarRightProps {
  id: number;
  is_archived: boolean;
  setNotes: React.Dispatch<React.SetStateAction<INotesList>>;
  handleSnackbarOpen: (message: string, severity: "success" | "error") => void;
}

export interface ISettingsSidebar {
  key: string, 
  label: string, 
  icon: React.ReactNode, 
  options?: string[],
  optionDescription?: string[],
  optionsIcons?: React.ReactNode[],
  form?: React.ReactNode,
}

export type ThemeMode = "light" | "dark" | "system";
export type FontTheme = "sans-serif" | "serif" | "monospace";
export interface IThemeContextType {
  mode: ThemeMode,
  selectedMode: "light" | "dark",
  toggleMode: (newMode: ThemeMode) => void,
  persistMode: (mode: ThemeMode) => void,
  fontTheme: FontTheme,
  setFontTheme: (font: FontTheme) => void,
}