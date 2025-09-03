"use client";

import { useState } from "react";
import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import Chart from "../components/chart";
import GlowingImage from "../components/glowingImage";
import HorizontalScroll from "../components/horizontalScroll";
import Item from "../types/item";

type Props = {
  similarItems: Item[];
  item: Item;
};

export default function ClientItemPage({ similarItems, item }: Props) {
  const [currentGraph, setCurrentGraph] = useState(
    Object.keys(item.history)[0]
  );

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "min(max(70%, 1000px), 100%)",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "24px",
        }}
      >
        <div
          style={{
            minWidth: "350px",
            width: "calc(40% - 24px)",
            flexGrow: 1,
          }}
        >
          <div>
            <GlowingImage
              image={item.image}
              alt={item.name}
              width={250}
              height={250}
            />
          </div>
          <h1>{item.name}</h1>
          <h2>{item.description}</h2>
        </div>
        <div
          style={{
            width: "calc(60% - 24px)",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {currentGraph && (
            <div>
              {Object.keys(item.history).length >= 2 &&
                Object.keys(item.history).map((name) => (
                  <button onClick={() => setCurrentGraph(name)} key={name}>
                    {name}
                  </button>
                ))}
              <div
                style={{
                  width: "100%",
                  height: "400px",
                }}
              >
                <Chart
                  values={item.history[currentGraph]}
                  name={currentGraph}
                />
              </div>
            </div>
          )}
          <div
            style={{
              width: "100%",
            }}
          >
            <h1>Similar Items</h1>
            <HorizontalScroll>
              <CardContainer
                style={{
                  flexWrap: "nowrap",
                  overflow: "auto",
                  justifyContent: "left",
                }}
              >
                {similarItems.map((item) => (
                  <Card item={item} key={item.id} />
                ))}
              </CardContainer>
            </HorizontalScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
