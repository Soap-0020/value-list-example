"use client";

import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import Item from "../types/item";
import SearchBar from "../components/searchBar";
import sortingConfig from "../config/sorting";
import Statistic from "../components/statistic/statistic";
import StatisticContainer from "../components/statistic/container";
import Dropdown from "../components/dropdown/dropdown";
import Pagination from "../components/paginationButtons";

import Statistics from "../types/statistics";
import useSearchParams from "../hooks/useSearchParams";
import { useState } from "react";

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
  const searchParams = useSearchParams();

  const [currentSearch, setCurrentSearch] = useState(search);

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
          <Statistic
            key={name}
            name={name}
            icon={data.icon}
            value={data.value}
            iconType="next"
          />
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
            value={currentSearch}
            placeholder="Search for items..."
            onChange={(value) => {
              setCurrentSearch(value);
              searchParams.update([
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
            getLink={(page) =>
              searchParams.edit([{ key: "page", value: page }])
            }
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
            getLink={(option) =>
              searchParams.edit([{ key: "sort", value: option.name }])
            }
            options={Object.entries(sortingConfig).map(([name, config]) => ({
              icon: config.icon,
              name,
            }))}
          />
        </div>
      </div>
      {items.length > 0 ? (
        <CardContainer>
          {items.map((item) => (
            <Card item={item} key={item.name} />
          ))}
        </CardContainer>
      ) : (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            No Items Found...
          </h1>
          <p style={{ color: "rgb(191, 191, 191)", fontSize: "18px" }}>
            Try and use a different search term or contact the site owner if you
            think something should show here.
          </p>
        </div>
      )}
    </div>
  );
}
