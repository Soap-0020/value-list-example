"use client";

import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import Item from "../types/item";
import SearchBar from "../components/searchBar";
import sortingConfig from "../config/sorting";
import statisticsConfig from "../config/statistics";
import formatValue from "../functions/formatValue";
import { useState } from "react";

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
        padding: "16px",
        display: "flex",
        gap: "12px",
        flexDirection: "column",
      }}
    >
      <div>
        {Object.entries(statisticsConfig).map(([name, getValue]) => (
          <div key={name}>
            <h1>{name}</h1>
            <h2>{formatValue(getValue(items))}</h2>
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
          {Object.entries(sortingConfig).map(([name]) => (
            <button onClick={() => setSort(name)} key={name}>
              {name}
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
