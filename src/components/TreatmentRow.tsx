import styled from "styled-components";
import { Treatment } from "../types/treatment";
import { Tag } from "lucide-react";

const Row = styled.div`
  border-bottom: 1px solid #e5e7eb;
`;

const TreatmentRow = ({ item }: { item: Treatment }) => {
  return (
    <Row className="flex gap-4 py-4">

      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="w-24 h-24 object-cover rounded-lg"
      />

      <div className="flex flex-col justify-center">

        <h3 className="font-semibold text-gray-900 text-base md:text-lg">
          {item.name}
        </h3>

        <div className="flex items-center gap-2 mt-2 text-gray-500">
          <Tag size={16} />
          <span className="font-medium">
            THB {item.price}
          </span>
        </div>

      </div>
    </Row>
  );
}

export default TreatmentRow;