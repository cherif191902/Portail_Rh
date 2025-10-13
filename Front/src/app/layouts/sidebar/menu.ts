import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    // (Entrée dashboard générale supprimée - conservons uniquement les dashboards spécifiques)
    // Dashboard pour Chef
    {
        id: 6,
        label: 'MENUITEMS.CHEF_DASHBOARD.TEXT',
        icon: 'bx-group',
        link: '/dashboards/chef',
        requiredRoles: ['ROLE_CHEF_SERVICE', 'ROLE_CHEF_A', 'ROLE_CHEF_B']
    },
    {
        id: 10,
        label: 'MENUITEMS.ADMIN_DASHBOARD.TEXT',
        icon: 'bx-shield-alt',
        link: '/dashboards/admin',
        requiredRoles: ['ROLE_ADMIN']
    },
    {
        id: 11,
        label: 'MENUITEMS.RH_DASHBOARD.TEXT',
        icon: 'bx-line-chart',
        link: '/dashboards/rh',
        requiredRoles: ['ROLE_RH', 'ROLE_ADMIN']
    },
    // Section Congés supprimée (gérée via l'espace RH uniquement)
    // Section Chef supprimée - accès chef géré différemment
    {
        id: 15,
        label: 'MENUITEMS.ADMIN_SECTION.TEXT',
        isTitle: true,
        requiredRoles: ['ROLE_ADMIN']
    },
    {
        id: 16,
        label: 'MENUITEMS.ADMIN_USERS.TEXT',
        icon: 'bx-group',
        requiredRoles: ['ROLE_ADMIN'],
        subItems: [
            {
                id: 161,
                label: 'MENUITEMS.ADMIN_ALL_USERS.TEXT',
                icon: 'bx-user',
                link: '/admin/users/list',
                parentId: 16
            },
            {
                id: 162,
                label: 'MENUITEMS.ADMIN_ADD_USER.TEXT',
                icon: 'bx-user-plus',
                link: '/admin/users/add',
                parentId: 16
            },
            {
                id: 163,
                label: 'MENUITEMS.ADMIN_ROLES_PERMISSIONS.TEXT',
                icon: 'bx-key',
                link: '/admin/roles',
                parentId: 16
            }
        ]
    },
    {
        id: 17,
        label: 'MENUITEMS.ADMIN_ORGANIZATION.TEXT',
        icon: 'bx-buildings',
        requiredRoles: ['ROLE_ADMIN'],
        subItems: [
            {
                id: 171,
                label: 'MENUITEMS.ADMIN_DEPARTMENTS.TEXT',
                icon: 'bx-building',
                link: '/admin/departments',
                parentId: 17
            },
            {
                id: 172,
                label: 'MENUITEMS.ADMIN_TEAMS.TEXT',
                icon: 'bx-group',
                link: '/admin/teams',
                parentId: 17
            }
        ]
    },
    {
        id: 18,
        label: 'MENUITEMS.ADMIN_GLOBAL_REPORTS.TEXT',
        icon: 'bx-bar-chart-square',
        requiredRoles: ['ROLE_ADMIN'],
        subItems: [
            {
                id: 181,
                label: 'MENUITEMS.ADMIN_WORKFORCE_REPORT.TEXT',
                icon: 'bx-pie-chart-alt',
                link: '/admin/reports/workforce',
                parentId: 18
            },
            {
                id: 182,
                label: 'MENUITEMS.ADMIN_LEAVE_ANALYTICS.TEXT',
                icon: 'bx-calendar-check',
                link: '/admin/reports/leave-analytics',
                parentId: 18
            },
            {
                id: 183,
                label: 'MENUITEMS.ADMIN_SYSTEM_USAGE.TEXT',
                icon: 'bx-stats',
                link: '/admin/reports/system-usage',
                parentId: 18
            }
        ]
    },
    {
        id: 100,
        label: 'MENUITEMS.RH_CONGES_GROUP.TEXT',
        icon: 'bx-calendar-event',
        requiredRoles: ['ROLE_RH', 'ROLE_ADMIN'],
        subItems: [
            {
                id: 101,
                label: 'MENUITEMS.RH_VALIDATION_CONGES.TEXT',
                icon: 'bx-check-circle',
                link: '/RH/validation-conges',
                parentId: 100
            }
        ]
    },
    {
        id: 200,
        label: 'MENUITEMS.RH_SERVICES_GROUP.TEXT',
        icon: 'bx-briefcase-alt-2',
        requiredRoles: ['ROLE_RH', 'ROLE_ADMIN'],
        subItems: [
            {
                id: 201,
                label: 'MENUITEMS.RH_AFFECTATIONS.TEXT',
                icon: 'bx-git-merge',
                link: '/RH/affectations',
                parentId: 200
            },
            {
                id: 202,
                label: 'MENUITEMS.RH_TABLEAU_AFFECTATIONS.TEXT',
                icon: 'bx-table',
                link: '/RH/tableau-affectations',
                parentId: 200
            },
            {
                id: 203,
                label: 'MENUITEMS.RH_EMPLOYES_INFO.TEXT',
                icon: 'bx-group',
                link: '/RH/employes-info',
                parentId: 200
            }
        ]
    },
    {
        id: 300,
        label: 'MENUITEMS.RH_ANALYTICS_GROUP.TEXT',
        icon: 'bx-bar-chart-alt-2',
        requiredRoles: ['ROLE_RH', 'ROLE_ADMIN'],
        subItems: [
            {
                id: 301,
                label: 'MENUITEMS.RH_STATISTIQUES.TEXT',
                icon: 'bx-pie-chart-alt-2',
                link: '/RH/statistiques',
                parentId: 300
            },
            {
                id: 302,
                label: 'MENUITEMS.RH_RAPPORTS.TEXT',
                icon: 'bx-file-blank',
                link: '/RH/rapports',
                parentId: 300
            }
        ]
    },
    {
        id: 400,
        label: 'MENUITEMS.RH_SYSTEM_GROUP.TEXT',
        icon: 'bx-cog',
        requiredRoles: ['ROLE_RH', 'ROLE_ADMIN'],
        subItems: [
            {
                id: 401,
                label: 'MENUITEMS.RH_CONFIGURATION.TEXT',
                icon: 'bx-slider-alt',
                link: '/RH/configuration',
                parentId: 400
            },
            {
                id: 402,
                label: 'MENUITEMS.RH_NOTIFICATIONS.TEXT',
                icon: 'bx-bell',
                link: '/RH/notifications',
                parentId: 400
            }
        ]
    }
];



