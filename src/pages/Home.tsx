import { useState } from "react";
import SearchBar from "../components/SearchBar";
import TreatmentRow from "../components/TreatmentRow";
import SkeletonRow from "../components/SkeletonRow";
import { PageCard } from "../components/PageCard";


import useDebounce from "../hooks/useDebounce";
import useTreatments from "../hooks/useTreatments";

const Home = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);

  const { items, loading, loadRef } = useTreatments(debouncedSearch);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">

      <PageCard className="px-5 py-6 md:mt-10">
        <h1 className="text-2xl font-bold mb-5">
          Treatment
        </h1>

        <SearchBar value={search} onChange={setSearch} />

        <div className="
          mt-6
          flex flex-col gap-3
          md:grid md:grid-cols-2 md:gap-5
        ">
          {items.map(item => (
            <TreatmentRow key={item._id} item={item} />
          ))}
        </div>

        {loading && items.length === 0 && (
          <div className="space-y-4 mt-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonRow key={i} />
            ))}
          </div>
        )}
        
        <div ref={loadRef} className="h-10" />
      </PageCard>

    </div>
  );
}

export default Home;
