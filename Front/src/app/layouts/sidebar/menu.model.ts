export interface MenuItem {
    id?: number;
    label?: string;
    icon?: string;
    link?: string;
  subItems?: MenuItem[];
    isTitle?: boolean;
    badge?: any;
    parentId?: number;
    isLayout?: boolean;
    isRh?:boolean
    isAdmin?: boolean;
     requiredRoles?: string[];
    isPersonel?: boolean;
    
}
