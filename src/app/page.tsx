import ClientIndex from "../clientPages";
import { Suspense } from "react";
import getFilteredItems from "../config/getFilteredItems";
import getPages from "../config/getPages";
import sortingConfig from "../config/sorting";
import getStatistics from "../config/getStatistics";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import icon from "../public/icon.png";

type Props = {
  searchParams: Promise<{
    [key: string]: string | undefined;
  }>;
};

// Edit for your branding
export const metadata: Metadata = {
  title: "Spongebob Tower Defence Values",
  description: "The best value list!",
  icons: icon.src,
};

export default async function Home({ searchParams }: Props) {
  const page = parseInt((await searchParams)?.page ?? "1");
  const search = (await searchParams)?.search ?? "";
  const sort = (await searchParams)?.sort ?? Object.keys(sortingConfig)[0];

  if (!(sort in sortingConfig)) return notFound();

  const [pages, statistics, filteredItems] = await Promise.all([
    getPages(search),
    getStatistics(),
    getFilteredItems(search, page, sort),
  ]);

  return (
    <Suspense>
      <ClientIndex
        items={filteredItems}
        pages={pages}
        page={Math.min(Math.max(page, 1), pages)}
        search={search}
        sort={sort}
        statistics={statistics}
      />
    </Suspense>
  );
}
