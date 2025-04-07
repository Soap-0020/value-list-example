import ClientItemPage from "@/src/clientPages/item";
import getItems from "@/src/functions/getItems";

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

  const similarItems = items.filter(() => true); // coming soon
  return <ClientItemPage item={foundItem} similarItems={similarItems} />;
}
