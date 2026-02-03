import { apiClient } from "../lib/apiClient";
import { TreatmentListResponse } from "../types/treatment";

export interface TreatmentQuery {
  page: number;
  limit: number;
  name?: string;
}

export const getTreatments = async (
  params: TreatmentQuery
): Promise<TreatmentListResponse> => {
  const res = await apiClient.get("/treatments", { params });
  return res.data;
};
