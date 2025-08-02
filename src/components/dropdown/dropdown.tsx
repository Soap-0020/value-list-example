import { useState } from "react";
import DropdownContainer from "./container";
import DropdownOption from "@/src/types/dropdownOption";
import DropdownButton from "./button";
import DropdownMenu from "./menu";

type Props = {
  options: DropdownOption[];
  value: string;
  getLink: (item: DropdownOption) => string;
};

const Dropdown = ({ options, value, getLink }: Props) => {
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
          onSelect={() => setShowing(false)}
          getLink={getLink}
          options={options}
          value={value}
        />
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
