"use client";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import Item from "../types/item";
import { AutoSizer } from "react-virtualized";
import formatValue from "../functions/formatValue";
import Image from "next/image";

type Props = {
  values: Item["history"][string];
  name: string;
};

const Chart = ({ values, name }: Props) => {
  return (
    <AutoSizer style={{ width: "100%" }}>
      {({ height, width }) => (
        <div
          style={{
            width: width + "px",
          }}
        >
          <LineChart height={height} width={width}>
            <YAxis
              dataKey="value"
              type="number"
              stroke="rgb(191, 191, 191)"
              domain={["dataMin", "dataMax"]}
              width={"auto"}
              interval={"preserveStartEnd"}
              ticks={values.map((value) => value.value)}
              tickFormatter={(value) => {
                const foundData = values.find((data) => data.value == value);

                if (!foundData) return "N/A";

                return "formattedValue" in foundData
                  ? (foundData.formattedValue as string)
                  : formatValue(value);
              }}
              tickMargin={6}
            />
            <XAxis
              dataKey="date"
              scale="time"
              domain={["auto", "auto"]}
              type="number"
              stroke="rgb(191, 191, 191)"
              tickMargin={12}
              tickFormatter={(label) => new Date(label).toLocaleDateString()}
            />
            <Tooltip
              content={({ payload }) => {
                if (!payload || payload.length == 0) return;

                const data: Item["history"][string][number] =
                  payload[0].payload;

                return (
                  <div
                    style={{
                      backgroundColor: "rgb(48, 48, 48)",
                      padding: "8px",
                      color: "rgb(191, 191, 191)",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        height={40}
                        width={40}
                        alt={name}
                        src={data.icon}
                      />
                      <div>
                        <p>
                          {new Date(data.date).toLocaleDateString()}{" "}
                          {new Date(data.date).toLocaleTimeString()}
                        </p>
                        <p>
                          {name}:{" "}
                          {"formattedValue" in data
                            ? data.formattedValue
                            : formatValue(data.value)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            <Line
              dataKey={"value"}
              type="stepBefore"
              dot={{ r: 2 }}
              data={values}
              activeDot={{ r: 3 }}
              strokeWidth={2}
              stroke="#fff"
            />
          </LineChart>
        </div>
      )}
    </AutoSizer>
  );
};
export default Chart;
