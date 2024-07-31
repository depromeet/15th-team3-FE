export type HobbyType = {
  hobbyId: number;
  content: string;
};

export type HobbyListResponse = {
  contents: HobbyType[];
};
