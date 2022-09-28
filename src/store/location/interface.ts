export interface LocationState {
  latitude: number;
  longitude: number;
  place: string;
  country: string;
  isSelectedByUser: boolean;
  error: string;
}

export interface setLocationPayload {
  lat?: number;
  lon?: number;
  place?: string;
  country?: string;
  error?: string;
}
