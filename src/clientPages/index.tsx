"use client";

import { useSearchParams } from "next/navigation";
import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import Item from "../types/item";
import SearchBar from "../components/searchBar";
import { useRouter } from "next/navigation";
import sortingConfig from "../config/sorting";

type Props = {
  items: Item[];
};

// Change to show what you want.

export default function ClientIndex({ items }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const sort = searchParams.get("sort") ?? "";

  const sortConfig =
    sortingConfig.find((config) => config.name == sort) ?? sortingConfig[0];

  const updateParams = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(param, value);
    router.replace(`?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        gap: "12px",
        flexDirection: "column",
      }}
    >
      <div>
        <div>
          <SearchBar
            value={search}
            placeholder="Search"
            onChange={(value) => updateParams("search", value)}
          />
        </div>
        <div>
          {sortingConfig.map((config) => (
            <button
              onClick={() => updateParams("sort", config.name)}
              key={config.name}
            >
              {config.name}
            </button>
          ))}
        </div>
      </div>
      <CardContainer>
        {items
          .filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.id.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sortConfig.type == "ascending"
              ? sortConfig.getValue(b) - sortConfig.getValue(a)
              : sortConfig.getValue(a) - sortConfig.getValue(b)
          )
          .map((item) => (
            <Card item={item} key={item.name} />
          ))}
      </CardContainer>
    </div>
  );
}
