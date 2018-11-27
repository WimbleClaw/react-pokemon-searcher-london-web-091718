import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "front"
    };
  }

  hp() {
    return this.props.pokemon.stats.find(stat => stat.name === "hp").value;
  }

  showImage() {
    return this.props.pokemon.sprites[this.state.image];
  }

  handleClick = () => {
    this.setState({
      image: this.state.image === "front" ? "back" : "front"
    });
  };

  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.showImage()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.hp()} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;

// abilities: (2) ["overgrow", "chlorophyll"]
// height: 10
// id: 2
// moves: []
// name: "ivysaur"
// sprites: {front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"}
// stats: Array(6)
// 0: {value: 80, name: "special-defense"}
// 1: {value: 80, name: "special-attack"}
// 2: {value: 63, name: "defense"}
// 3: {value: 62, name: "attack"}
// 4: {value: 60, name: "speed"}
// 5: {value: 60, name: "hp"}
// length: 6
// __proto__: Array(0)
// types: (2) ["grass", "poison"]
// weight: 130
// __proto__: Object
