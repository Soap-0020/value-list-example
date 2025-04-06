"use client";

import { useSearchParams } from "next/navigation";
import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import Item from "../types/item";
import SearchBar from "../components/searchBar";
import { useRouter } from "next/navigation";

type Props = {
  items: Item[];
};

export default function ClientIndex({ items }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

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
        <SearchBar
          value={search}
          placeholder="Search"
          onChange={(value) => updateParams("search", value)}
        />
      </div>
      <CardContainer>
        {items
          .filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.id.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <Card item={item} key={item.name} />
          ))}
      </CardContainer>
    </div>
  );
}
