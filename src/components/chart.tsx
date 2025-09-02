"use client";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import Item from "../types/item";
import { AutoSizer } from "react-virtualized";
import formatValue from "../functions/formatValue";

type Props = {
  values: Item["history"][string];
};

const Chart = ({ values }: Props) => {
  return (
    <AutoSizer style={{ width: "100%" }}>
      {({ height, width }) => (
        <div
          style={{
            width: width + "px",
            border: "1px solid red",
          }}
        >
          <LineChart height={height} width={width}>
            <YAxis
              dataKey="value"
              type="number"
              scale="auto"
              domain={["auto", "auto"]}
            />
            <XAxis
              dataKey="date"
              scale="time"
              domain={["auto", "auto"]}
              type="number"
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
                      backgroundColor: "white",
                    }}
                  >
                    <p>{new Date(data.date).toLocaleDateString()}</p>
                    <p>
                      {"formattedValue" in data
                        ? data.formattedValue
                        : formatValue(data.value)}
                    </p>
                  </div>
                );
              }}
            />

            <Line
              dataKey={"value"}
              type="stepBefore"
              dot={{ r: 2 }}
              data={values}
              activeDot={{ r: 0 }}
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
