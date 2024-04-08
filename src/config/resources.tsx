import type { IResourceItem } from "@refinedev/core";

import {
  CalendarOutlined,
  ContainerOutlined,
  CrownOutlined,
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "events",
    list: "/calendar",
    create: "/calendar/create",
    edit: "/calendar/edit/:id",
    show: "/calendar/show/:id",
    meta: {
      label: "Calendar",
      icon: <CalendarOutlined />,
    },
  },
  {
    name: "deals",
    identifier: "finalize-deals",
    edit: "/scrumboard/sales/:id/finalize",
    meta: {
      hide: true,
    },
  },
  {
    name: "dealStages",
    create: "/scrumboard/sales/stages/create",
    edit: "/scrumboard/sales/stages/edit/:id",
    list: "/scrumboard/sales",
    meta: {
      hide: true,
    },
  },
  {
    name: "companies",
    list: "/companies",
    show: "/companies/:id",
    create: "/companies/create",
    edit: "/companies/edit/:id",
    meta: {
      label: "Companies",
      icon: <ShopOutlined />,
    },
  },
  {
    name: "companies",
    identifier: "sales-companies",
    create: "/scrumboard/sales/create/company/create",
    meta: {
      hide: true,
    },
  },
  {
    name: "contacts",
    list: "/contacts",
    create: "/contacts/create",
    edit: "/contacts/edit/:id",
    show: "/contacts/show/:id",
    meta: {
      label: "Contacts",
      icon: <TeamOutlined />,
    },
  },

  {
    name: "administration",
    meta: {
      label: "Administration",
      icon: <CrownOutlined />,
    },
  },
  {
    name: "settings",
    list: "/administration/settings",
    meta: {
      label: "Settings",
      parent: "administration",
    },
  },
  {
    name: "audits",
    list: "/administration/audit-log",
    meta: {
      label: "Audit Log",
      parent: "administration",
    },
  },
];
