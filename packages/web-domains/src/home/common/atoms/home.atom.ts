import { atom } from 'jotai';

export const isProgessingQuestionAtom = atom<boolean>(false);

export const isSelectedTargetAtom = atom<boolean>(false);

export const homeGlobalTimeAtom = atom<number | null>(null);
