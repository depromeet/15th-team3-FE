export interface HandWavingStatusResponse {
  HandWavingId: number;
  status: 'REQUESTED' | 'ACCEPTED' | 'REJECTED';
}
