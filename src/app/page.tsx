import ClientIndex from "../clientPages";
import { Suspense } from "react";
import getFilteredItems from "../config/getFilteredItems";
import getPages from "../config/getPages";
import sortingConfig from "../config/sorting";
import getStatistics from "../config/getStatistics";
import { notFound } from "next/navigation";

type Props = {
  searchParams: Promise<{
    [key: string]: string | undefined;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const page = parseInt((await searchParams)?.page ?? "1");
  const search = (await searchParams)?.search ?? "";
  const sort = (await searchParams)?.sort ?? Object.keys(sortingConfig)[0];

  const pages = Math.max(await getPages(search), 1);

  if (page > pages || page <= 0 || !(sort in sortingConfig)) return notFound();

  const statistics = await getStatistics();
  const filteredItems = await getFilteredItems(search, page, sort);

  return (
    <Suspense>
      <ClientIndex
        items={filteredItems}
        pages={pages}
        page={page}
        search={search}
        sort={sort}
        statistics={statistics}
      />
    </Suspense>
  );
}
