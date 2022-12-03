import { Modal } from "./Modal";
import styled from "styled-components";
import { useState } from "react";

const Section = styled.div`
  width: 10rem;
  height: 400px;
  border: 1px solid red;
  margin-top: 25px;
`;

const Item = styled.div`
  padding: 10px 5px;
  margin: 10px 5px;
  border: 1px solid black;
`;

const data = [
  {
    id: 1,
    name: "Brooks Hyperion",
    description: "This shoe has a description for the Brookks Hyperion"
  },
  {
    id: 2,
    name: "Alta Avera",
    description: "This shoe has a description for the Alta Avera"
  },
  {
    id: 3,
    name: "Nike Pegasus 39 Ultra",
    description: "This shoe has a description for the Nike Pegasus"
  }
];

export default function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const renderedSportShoes = data.map((item) => (
    <Item key={item.id} id={item.id} onClick={() => selectShoe(item.id)}>
      {item.name}
    </Item>
  ));

  function selectShoe(id) {
    const findShoe = data.find((item) => id === item.id);
    setSelectedItems(findShoe);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Modal />
      <Section>{renderedSportShoes}</Section>
      <p> {selectedItems ? selectedItems.name : null}</p>
    </div>
  );
}
