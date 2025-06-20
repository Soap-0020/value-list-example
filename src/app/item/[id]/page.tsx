import ClientItemPage from "@/src/clientPages/item";
import getItems from "@/src/config/getItems";
import isSimilarItem from "@/src/config/isSimilarItem";
import pageSize from "@/src/config/pageSize";

export default async function ItemPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const items = await getItems();
  const foundItem = items.find((item) => item.id == decodeURIComponent(id));

  if (!foundItem) return <div>Not found</div>;

  const similarItems = items
    .filter((item) => item.id !== foundItem.id)
    .filter((item) => isSimilarItem(foundItem, item))
    .slice(0, pageSize);

  return <ClientItemPage item={foundItem} similarItems={similarItems} />;
}
