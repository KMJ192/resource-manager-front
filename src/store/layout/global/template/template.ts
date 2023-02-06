import { atom } from 'recoil';

export type TemplateAtomType = {
  nav: 0 | 1;
};

export const templateAtom = atom<TemplateAtomType>({
  key: '@src/store/template',
  default: {
    nav: 1,
  },
});
