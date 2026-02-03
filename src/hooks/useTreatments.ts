import { useEffect, useRef, useState } from "react";
import { Treatment } from "../types/treatment";
import { getTreatments } from "../api/treatmentApi";
import useInfiniteScroll from "./useInfiniteScroll";

const useTreatments = (search: string) => {
  const [items, setItems] = useState<Treatment[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setItems([]);
    setPage(1);
    setHasMore(true);
  }, [search]);

  useEffect(() => {
    load();
  }, [page, search]);

  async function load() {
    if (loading) return;

    setLoading(true);

    const res = await getTreatments({
      page,
      limit: 10,
      name: search || undefined
    });

    setItems(prev =>
      page === 1 ? res.items : [...prev, ...res.items]
    );

    setHasMore(res.hasMore);
    setLoading(false);
  }

  useInfiniteScroll(loadRef, () => {
    if (hasMore && !loading) {
      setPage(p => p + 1);
    }
  });

  return {
    items,
    loading,
    hasMore,
    loadRef
  };
}

export default useTreatments;