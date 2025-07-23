import Container from "@/src/types/container";

const CardContainer = ({ children }: Container) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        flexWrap: "wrap",
        overflow: "visible",
      }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
