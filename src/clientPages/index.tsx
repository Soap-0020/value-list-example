"use client";

import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import Item from "../types/item";
import SearchBar from "../components/searchBar";
import sortingConfig from "../config/sorting";
import statisticsConfig from "../config/statistics";
import { useState } from "react";
import Statistic from "../components/statistic/statistic";
import StatisticContainer from "../components/statistic/container";
import Dropdown from "../components/dropdown";

type Props = {
  items: Item[];
};

// Change to show what you want.

export default function ClientIndex({ items }: Props) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(Object.keys(sortingConfig)[0]);

  const sortConfig = sortingConfig[sort];

  return (
    <div
      style={{
        padding: "8px",
        display: "flex",
        gap: "12px",
        flexDirection: "column",
      }}
    >
      <StatisticContainer>
        {Object.entries(statisticsConfig).map(([name, data]) => (
          <Statistic key={name} name={name} value={data.getValue(items)} />
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
            placeholder="Search"
            onChange={(value) => setSearch(value)}
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
            onSelect={setSort}
            options={Object.entries(sortingConfig).map(([name, config]) => ({
              icon: config.icon,
              name,
            }))}
          />
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
