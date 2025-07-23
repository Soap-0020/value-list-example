import { useState } from "react";
import DropdownContainer from "./container";
import DropdownOption from "@/src/types/dropdownOption";
import DropdownButton from "./button";
import DropdownMenu from "./menu";

type Props = {
  options: DropdownOption[];
  value: string;
  onSelect: (item: DropdownOption) => any;
};

const Dropdown = ({ options, value, onSelect }: Props) => {
  const [showing, setShowing] = useState(false);

  return (
    <DropdownContainer>
      <DropdownButton
        options={options}
        onClick={() => setShowing(!showing)}
        value={value}
      />

      {showing && (
        <DropdownMenu
          onSelect={(option) => {
            onSelect(option);
            setShowing(false);
          }}
          options={options}
          value={value}
        />
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
