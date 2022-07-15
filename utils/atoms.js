import { atom } from 'recoil';

export const cartStateAtom = atom({ key: 'cartState', default: [] });

export const showCartAtom = atom({ key: 'showCart', default: false });
