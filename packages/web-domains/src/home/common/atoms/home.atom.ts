import { atom } from 'jotai';

const isProgessingQuestionAtom = atom<boolean>(false);

const isSelectedTargetAtom = atom<boolean>(false);

const homeGlobalTimeAtom = atom<number | null>(null);

const isNextTargetAtom = atom<boolean>(false);

const currentMeeting = atom<{ meetingId: number; name: string } | null>(null);

export const HomeAtoms = {
  isNextTargetAtom,
  homeGlobalTimeAtom,
  isSelectedTargetAtom,
  isProgessingQuestionAtom,
  currentMeeting,
};
