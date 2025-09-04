import ClientItemPage from "@/src/clientPages/item";
import getItem from "@/src/config/getItem";
import getSimilarItems from "@/src/config/getSimilarItems";

export default async function ItemPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const item = await getItem(decodeURIComponent(id));
  const similarItems = await getSimilarItems(item);

  return <ClientItemPage item={item} similarItems={similarItems} />;
}
