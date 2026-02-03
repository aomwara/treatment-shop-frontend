import { RefObject, useEffect } from "react";

const useInfiniteScroll = (
  ref: RefObject<Element | null>,
  onLoad: () => void
) => {
  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          onLoad();
        }
      },
      { threshold: 1 }
    );

    obs.observe(ref.current);

    return () => obs.disconnect();
  }, [ref, onLoad]);
}

export default useInfiniteScroll;