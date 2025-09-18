import Detail from "./detail";

type Item = {
  name: string;
  image: string;
  id: string;
  description: string;

  mainDetails: { [key: string]: Detail };
  smallDetails: { [key: string]: Detail };
  informativeDetails: { [key: string]: Detail<string> };
  history: {
    [name: string]: (Detail<number> & {
      date: number;
      formattedValue?: string;
    })[];
  };
};

export default Item;
