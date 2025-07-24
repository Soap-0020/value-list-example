"use client";

import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import Item from "../types/item";
import SearchBar from "../components/searchBar";
import sortingConfig from "../config/sorting";
import Statistic from "../components/statistic/statistic";
import StatisticContainer from "../components/statistic/container";
import Dropdown from "../components/dropdown/dropdown";
import Pagination from "../components/pagination/pagination";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Statistics from "../types/statistics";

type Props = {
  items: Item[];
  statistics: Statistics;

  pages: number;
  page: number;
  search: string;
  sort: string;
};

// Change to show what you want.

export default function ClientIndex({
  items,
  pages,
  page,
  search,
  sort,
  statistics,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParams = (values: { key: string; value: any }[]) => {
    const params = new URLSearchParams(searchParams);
    for (const value of values) {
      params.set(value.key, value.value);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexDirection: "column",
      }}
    >
      <StatisticContainer>
        {Object.entries(statistics).map(([name, data]) => (
          <Statistic key={name} name={name} value={data.value} />
        ))}
      </StatisticContainer>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div
          style={{ flex: 12, minWidth: "min(100%, 225px)", display: "flex" }}
        >
          <SearchBar
            value={search}
            placeholder="Search for items..."
            onChange={(value) => {
              updateParams([
                {
                  key: "search",
                  value,
                },
                {
                  key: "page",
                  value: 1,
                },
              ]);
            }}
          />
        </div>

        <div style={{ flex: 2, minWidth: "min(100%, 225px)", display: "flex" }}>
          <Pagination
            page={page}
            onChange={(page) => updateParams([{ key: "page", value: page }])}
            maxPage={pages}
          />
        </div>

        <div
          style={{
            flex: 2,
            minWidth: "min(100%, 225px)",
            display: "flex",
          }}
        >
          <Dropdown
            value={sort}
            onSelect={(option) =>
              updateParams([{ key: "sort", value: option.name }])
            }
            options={Object.entries(sortingConfig).map(([name, config]) => ({
              icon: config.icon,
              name,
            }))}
          />
        </div>
      </div>
      <CardContainer>
        {items.map((item) => (
          <Card item={item} key={item.name} />
        ))}
      </CardContainer>
    </div>
  );
}
