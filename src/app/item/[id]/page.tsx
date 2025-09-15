import ClientItemPage from "@/src/clientPages/item";
import getItem from "@/src/config/getItem";
import getItemVariants from "@/src/config/getItemVariants";
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

  const [itemVariants, similarItems] = await Promise.all([
    getItemVariants(item.name),
    getSimilarItems(item),
  ]);

  return (
    <ClientItemPage
      item={item}
      similarItems={similarItems}
      itemVariants={itemVariants}
    />
  );
}
