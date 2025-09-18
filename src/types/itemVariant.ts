import Detail from "./detail";

type ItemVariant = Detail<string> & {
  id: string;
};

export default ItemVariant;
