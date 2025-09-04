import Container from "@/src/types/container";

const ButtonGroupContainer = ({ children }: Container) => {
  return (
    <div style={{ display: "flex", width: "100%", gap: "4px", height: "42px" }}>
      {children}
    </div>
  );
};

export default ButtonGroupContainer;
