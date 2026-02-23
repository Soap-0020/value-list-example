import ClientItemPage from "@/src/clientPages/item";
import getItem from "@/src/config/getItem";
import getItemVariants from "@/src/config/getItemVariants";
import getSimilarItems from "@/src/config/getSimilarItems";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = await getItem(decodeURIComponent(id));

  return {
    icons: item.image,
    title: item.name,
    description: item.description,
  };
}

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
    getItemVariants(item),
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
