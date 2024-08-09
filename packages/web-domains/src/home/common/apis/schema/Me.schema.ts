export type MeType = {
  meetingMemberId: number;
  name: string;
  profileImageFileUrl: string;
  role: 'OWNER' | 'ADMIN' | 'MEMBER';
  gender: 'FEMALE' | 'MALE';
  birth: string;
  job: string;
  location: string;
  hobbies: Array<string>;
  mbti: string;
  introduction: string;
};

export type MeResponseType = MeType | undefined;
