import ClientItemPage from "@/src/clientPages/item";
import getItem from "@/src/config/getItem";
import getSimilarItems from "@/src/config/getSimilarItems";
import pageSize from "@/src/config/pageSize";
import { notFound } from "next/navigation";

export default async function ItemPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const item = await getItem(decodeURIComponent(id));
  if (!item) return notFound();
  const similarItems = await getSimilarItems(item);

  return (
    <ClientItemPage
      item={item}
      similarItems={similarItems.slice(0, pageSize)}
    />
  );
}
