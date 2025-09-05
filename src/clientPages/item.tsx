"use client";

import { useState } from "react";
import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import Chart from "../components/chart";
import GlowingImage from "../components/glowingImage";
import HorizontalScroll from "../components/horizontalScroll";
import Item from "../types/item";
import ButtonGroupContainer from "../components/buttonGroup/container";
import GroupButton from "../components/buttonGroup/button";
import StatisticContainer from "../components/statistic/container";
import Statistic from "../components/statistic/statistic";

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
        color: "white",
      }}
    >
      <div
        style={{
          width: "min(max(55%, 1000px), 100%)",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          columnGap: "24px",
          rowGap: "12px",
        }}
      >
        <div
          style={{
            minWidth: "350px",
            width: "calc(40% - 24px)",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(36, 36, 36)",
              width: "calc(100% - 48px)",
              padding: "24px",
              borderRadius: "16px",
              display: "flex",
              gap: "12px",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <GlowingImage
                image={item.image}
                alt={item.name}
                width={250}
                height={250}
                style={{
                  borderRadius: "12px",
                }}
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {item.name}
              </p>
              <p style={{ color: "rgb(191, 191, 191)", textAlign: "center" }}>
                {item.description}
              </p>
            </div>
          </div>
          <StatisticContainer>
            {Object.entries(item.mainDetails).map(([name, data]) => (
              <Statistic
                value={data.value}
                icon={data.icon}
                name={name}
                iconType="left"
                key={name}
              />
            ))}
          </StatisticContainer>
          <StatisticContainer>
            {Object.entries(item.smallDetails).map(([name, data]) => (
              <Statistic
                value={data.value}
                icon={data.icon}
                name={name}
                iconType="next"
                key={name}
              />
            ))}
          </StatisticContainer>
        </div>
        <div
          style={{
            width: "calc(60% - 24px)",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {currentGraph && (
            <div>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                {currentGraph} History
              </p>
              {Object.keys(item.history).length >= 2 && (
                <ButtonGroupContainer>
                  {Object.keys(item.history).map((name) => {
                    const lastHistoryUpdate = Math.max(
                      ...item.history[name].map((data) => data.date)
                    );

                    return (
                      <GroupButton
                        value={name}
                        icon={
                          item.history[name].find(
                            (data) => data.date == lastHistoryUpdate
                          )?.icon
                        }
                        disabled={name == currentGraph}
                        onClick={() => setCurrentGraph(name)}
                        key={name}
                      />
                    );
                  })}
                </ButtonGroupContainer>
              )}
            </div>
          )}

          {currentGraph && (
            <div
              style={{
                width: "100%",
                height: "450px",
              }}
            >
              <Chart values={item.history[currentGraph]} name={currentGraph} />
            </div>
          )}
          {similarItems.length > 0 && (
            <div
              style={{
                width: "100%",
              }}
            >
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                Similar Items
              </p>
              <HorizontalScroll>
                <CardContainer
                  style={{
                    flexWrap: "nowrap",

                    justifyContent: "left",
                  }}
                >
                  {similarItems.map((item) => (
                    <div key={item.id}>
                      <Card item={item} />
                    </div>
                  ))}
                </CardContainer>
              </HorizontalScroll>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
