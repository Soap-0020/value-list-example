import PaginationButton from "./button";

import arrowsForwardIcon from "../../public/arrowsForward.png";
import arrowsBackwardIcon from "../../public/arrowsBackward.png";

type Props = {
  page: number;
  getLink: (page: number) => string;
  maxPage: number;
};

const Pagination = ({ page, getLink, maxPage }: Props) => {
  return (
    <div style={{ display: "flex", width: "100%", gap: "5px", height: "42px" }}>
      <PaginationButton
        icon={arrowsBackwardIcon}
        link={getLink(page - 1)}
        disabled={page <= 1}
      />
      <PaginationButton
        value={page + "/" + maxPage}
        link={getLink(1)}
        disabled={page == 1}
      />
      <PaginationButton
        icon={arrowsForwardIcon}
        link={getLink(page + 1)}
        disabled={page >= maxPage}
      />
    </div>
  );
};

export default Pagination;
