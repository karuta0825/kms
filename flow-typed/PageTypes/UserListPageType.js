declare type UserListPageType = {
  selections: Array<number>,
  isFilterOpen: boolean,
  filter: {
    keyword: ?string,
    isOnpre: boolean,
    isCloud: boolean,
    isDemo: boolean,
    isKensyo: boolean,
    isES: boolean,
    isLM: boolean,
    hasMobile: boolean,
    hasFenics: boolean,
    hasBuisv: boolean,
    isMarked: boolean,
    server: ?string,
  },
  canDelete: boolean,
};
