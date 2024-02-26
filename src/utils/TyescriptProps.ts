export type ReduxProps = {
  SplashSlice: {
    splashList: SplashProps[];
  };
  BriefSlice: {
    currentBriefTab: BriefTabsProps;
    briefTabs: BriefTabsProps[];
  };
  AllBriefSlice: {
    allBriefs: AllBriefProps[];
    currentAllBrief: AllBriefProps;
  };
  MenuSlice: {
    menuList: MenuProps[];
  };
};

export type SplashProps = {
  id: number;
  value: string;
};

export type BriefTabsProps = {
  id?: number;
  value?: string;
};
export type AllBriefProps = {
  brief: any;
  id?: number;
  index?: number;
  title?: string;
  cost?: number;
  remainingDays?: number;
  uri?: string;
  isBookmark?: boolean;
};

export type MenuProps = {
  id?: number;
  value?: string;
  description?: string;
  navTo?: string;
};
