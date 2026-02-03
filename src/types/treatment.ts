export interface Treatment {
  _id: string;
  name: string;
  price: number;
  image: string;
}

export interface TreatmentListResponse {
  items: Treatment[];
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}
