import { atom } from 'jotai';

const answerGlobalTime = atom<number | null>(null);

const answerList = atom<number[]>([]);

export const answerAtoms = {
  answerGlobalTime,
  answerList,
};
