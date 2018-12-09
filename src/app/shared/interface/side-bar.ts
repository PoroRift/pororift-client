import { SidebarItem } from './../model/sidebar-item';

export interface SideBar {
    items: SidebarItem[];
    eventHandler(functionName: string): void;
}
