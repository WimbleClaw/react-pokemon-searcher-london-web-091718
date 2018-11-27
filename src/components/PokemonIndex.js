import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      filtered: [],
      allPokemons: []
    };
  }

  getData() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(allPokemons => this.setState({ allPokemons }))
      .then(filtered => this.updateFilter());
  }

  componentDidMount() {
    this.getData();
  }

  updateFilter() {
    this.setState({
      filtered: this.state.allPokemons
    });
  }

  handleSearchChange = (e, { value }) => {
    const filtered = this.state.allPokemons.filter(pokemon =>
      pokemon.name.includes(value)
    );
    this.setState({ filtered });
  };

  newPokemon = pokemon => {
    this.setState({ allPokemons: [...this.state.allPokemons, pokemon] });
    this.updateFilter();
  };

  render() {
    console.log(this.state.filtered);
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(this.handleSearchChange, 100)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection filtered={this.state.filtered} />
        <br />
        <PokemonForm newPokemon={this.newPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
