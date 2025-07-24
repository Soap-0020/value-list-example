import Icon from "./icon";

type Statistics = {
  [name: string]: {
    value: string | number;
    icon: Icon;
  };
};

export default Statistics;
