import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.props.filtered.map(pokemon => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
