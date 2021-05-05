import React from "react";
import { Form } from "semantic-ui-react";
import DropdownChoice from "./DropdownChoice";

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

const spolOptions = [
  { key: "male", value: "male", text: "Moški" },
  { key: "female", value: "female", text: "Ženski" },
  { key: "rnt", value: "rnt", text: "Ne želim povedati" }
];

export default function InfoForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Field required width={6}>
          <label>Ime</label>
          <input placeholder="Ime" />
        </Form.Field>

        <Form.Field required width={6}>
          <label>Priimek</label>
          <input placeholder="Priimek" />
        </Form.Field>
      </Form.Group>

      <Form.Group>
        <Form.Field required width={8}>
          <label>Regija</label>
          <DropdownChoice options={regijeOptions} />
        </Form.Field>

        <Form.Field required width={4}>
          <label>Spol</label>
          <DropdownChoice options={spolOptions} />
        </Form.Field>
      </Form.Group>
    </Form>
  );
}
