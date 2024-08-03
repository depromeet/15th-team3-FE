import { atom } from 'jotai';

const answerGlobalTime = atom<number | null>(null);

export const answerAtoms = {
  answerGlobalTime,
};
