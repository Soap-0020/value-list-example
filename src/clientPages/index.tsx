"use client";

import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import Item from "../types/item";
import SearchBar from "../components/searchBar";
import sortingConfig from "../config/sorting";
import statisticsConfig from "../config/statistics";
import formatValue from "../functions/formatValue";
import { useState } from "react";
import SortingConfig from "../types/sortingConfig";

type Props = {
  items: Item[];
};

// Change to show what you want.

export default function ClientIndex({ items }: Props) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(sortingConfig[0].name);

  const sortConfig = sortingConfig.find(
    (config) => config.name == sort
  ) as SortingConfig;

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
        {statisticsConfig.map((statistic) => (
          <div key={statistic.name}>
            <h1>{statistic.name}</h1>
            <h2>{formatValue(statistic.getValue(items))}</h2>
          </div>
        ))}
      </div>
      <div>
        <div>
          <SearchBar
            value={search}
            placeholder="Search"
            onChange={(value) => setSearch(value)}
          />
        </div>
        <div>
          {sortingConfig.map((config) => (
            <button onClick={() => setSort(config.name)} key={config.name}>
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
