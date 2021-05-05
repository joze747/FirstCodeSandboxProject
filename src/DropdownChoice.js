import React from "react";
import { Dropdown } from "semantic-ui-react";

const regijeOptions = [
  { key: "go", value: "go", text: "Gorenjska" },
  { key: "gi", value: "gi", text: "Goriška" },
  { key: "js", value: "js", text: "Jugovzhodna Slovenija" },
  { key: "ko", value: "ko", text: "Koroška" },
  { key: "ok", value: "ok", text: "Obalno-Kraška" },
  { key: "os", value: "os", text: "Osrednjeslovenska" },
  { key: "po", value: "po", text: "Podravska" },
  { key: "pu", value: "pu", text: "Pomurska" },
  { key: "ps", value: "ps", text: "Posavska" },
  { key: "pn", value: "pn", text: "Primorsko-Notranjska" },
  { key: "sv", value: "sv", text: "Savinjska" },
  { key: "zs", value: "zs", text: "Zasavska" }
];

const DropdownChoice = ({ options }) => (
  <Dropdown
    placeholder="Izberi regijo"
    fluid
    search
    selection
    options={options}
  />
);

export default DropdownChoice;
