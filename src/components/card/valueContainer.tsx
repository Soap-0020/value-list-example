import Container from "@/src/types/container";

const CardValueContainer = ({ children }: Container) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CardValueContainer;
