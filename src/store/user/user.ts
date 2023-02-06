import { atom } from 'recoil';

export type UserAtomType = {
  userName: string;
};

export const userAtom = atom<UserAtomType>({
  key: '@src/store/user',
  default: {
    userName: 'user',
  },
});
