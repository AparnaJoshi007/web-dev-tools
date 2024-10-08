import {IconType} from "react-icons";

export type NavigationItem = {
  label: string;
  slug: string;
  description?: string;
  search?: string;
  icon?: IconType;
}

export type Navigation = {
  group: string;
  items: NavigationItem[];
}
