type Detail<T = any> = {
  icon: string;
  value: T;
};

type Item = {
  name: string;
  image: string;
  id: string;
  description?: string;
  mainDetails: { [key: string]: Detail };
  smallDetails: { [key: string]: Detail };
  history: { date: number; details: { [key: string]: Detail<number> } }[];
};

export default Item;
