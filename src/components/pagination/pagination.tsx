import PaginationButton from "./button";

import arrowsForwardIcon from "../../public/arrowsForward.png";
import arrowsBackwardIcon from "../../public/arrowsBackward.png";

type Props = {
  page: number;
  onChange: (page: number) => any;
  maxPage: number;
};

const Pagination = ({ page, onChange, maxPage }: Props) => {
  return (
    <div style={{ display: "flex", width: "100%", gap: "5px", height: "42px" }}>
      <PaginationButton
        icon={arrowsBackwardIcon}
        onClick={() => onChange(page - 1)}
        disabled={page == 1}
      />
      <PaginationButton
        value={page + "/" + maxPage}
        onClick={() => onChange(1)}
        disabled={false}
      />
      <PaginationButton
        icon={arrowsForwardIcon}
        onClick={() => onChange(page + 1)}
        disabled={page == maxPage}
      />
    </div>
  );
};

export default Pagination;
