type Props = {
  children: React.ReactNode;
};

const CardContainer = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
        overflow: "visible",
      }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
