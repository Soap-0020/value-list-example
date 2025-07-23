import Container from "@/src/types/container";

const DropdownContainer = ({ children }: Container) => {
  return (
    <div style={{ position: "relative", display: "flex", width: "100%" }}>
      {children}
    </div>
  );
};

export default DropdownContainer;
