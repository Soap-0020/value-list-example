import Icon from "./icon";

type Detail<T = any> = {
  icon: Icon;
  value: T;
};

type Item = {
  name: string;
  image: string;
  id: string;
  description: string;
  mainDetails: { [key: string]: Detail };
  smallDetails: { [key: string]: Detail };
  history: { date: number; detail: Detail<number> }[];
};

export default Item;
