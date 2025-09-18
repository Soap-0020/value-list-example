import arrowsForwardIcon from "../public/arrowsForward.png";
import arrowsBackwardIcon from "../public/arrowsBackward.png";
import ButtonGroupContainer from "./buttonGroup/container";
import GroupButton from "./buttonGroup/button";

type Props = {
  page: number;
  getLink: (page: number) => string;
  maxPage: number;
};

const Pagination = ({ page, getLink, maxPage }: Props) => {
  return (
    <ButtonGroupContainer>
      <GroupButton
        icon={arrowsBackwardIcon}
        link={getLink(page - 1)}
        disabled={page <= 1}
      />
      <GroupButton
        value={page + "/" + maxPage}
        link={getLink(1)}
        disabled={page <= 1}
      />
      <GroupButton
        icon={arrowsForwardIcon}
        link={getLink(page + 1)}
        disabled={page >= maxPage}
      />
    </ButtonGroupContainer>
  );
};

export default Pagination;
