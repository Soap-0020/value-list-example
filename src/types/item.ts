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
  rarity: Detail<string>;

  connectedItems: { [id: string]: Detail<string> };
  mainDetails: { [key: string]: Detail };
  smallDetails: { [key: string]: Detail };
  history: {
    [name: string]: (Detail<number> & {
      date: number;
      formattedValue?: string;
    })[];
  };
};

export default Item;
