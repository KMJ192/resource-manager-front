import { atom } from 'recoil';

export type NavDrawerModel = {
  drawer: Array<{
    name: string;
    count: number;
  }>;
};

export const navAtom = atom<NavDrawerModel>({
  key: '@src/store/nav',
  default: {
    drawer: [],
  },
});
