export interface MeetingMemberResponse {
  meetingMemberId: number;
  name: string;
  profileImageFileUrl: string;
  role: 'string';
  gender: 'FEMALE' | 'MALE';
  birth: string;
  job: string;
  location: string;
  hobbies?: Array<string>;
  hobbyDetails?: Array<{ hobbyId: number; content: string }>;
  mbti?: string;
  introduction?: string;
}
