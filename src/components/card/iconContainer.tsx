import Container from "@/src/types/container";

const CardIconContainer = ({ children }: Container) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(48, 48, 48, 0.65)",
        backdropFilter: "blur(6px)",
        padding: "6px",
        borderRadius: "6px",
        display: "flex",
        margin: "12px",
        zIndex: 2,
        gap: "6px",
        flexDirection: "row",
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      {children}
    </div>
  );
};

export default CardIconContainer;
