const mapping: Record<string, string> = {
  accounts: 'account',
  items: 'item',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
