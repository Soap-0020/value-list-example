type Props = {
  children: React.ReactNode;
};

const StatisticContainer = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default StatisticContainer;
