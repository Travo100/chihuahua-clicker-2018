import React, { Component } from "react";

import Card from "../Card";
import Scoreboard from "../Scoreboard";
import API from "../../utils/API";

class Game extends Component {

    state = {
        chihuahuas: [],
        matches: 0,
        guesses: 0,
        matchedChihuahua: 3
    }

    componentDidMount() {
        API.getChihuahuas()
        .then(res => {
            this.setState({
                chihuahuas: res.data,
                matchedChihuahua: res.data[2]._id
            });
        })
        .catch(err => console.log(err));
    }

    getChihuahua = (id) => {
        if (id === this.state.matchedChihuahua) {
            // if a chihuahua is a match 
            // update the matches state by one 
            // but not the guesses state 
            // if the are also a match pick a new random chihuahua
            let randomId = Math.floor(Math.random() * this.state.chihuahuas.length);
            let selectedChihuahuaId = this.state.chihuahuas[randomId]._id;
            this.setState({
                matches: this.state.matches + 1,
                matchedChihuahua: selectedChihuahuaId
            });
        } else {
            // if they are not a match update the 
            // guesses state by one 
            this.setState({
                guesses: this.state.guesses + 1
            });
        }
    }

    render() {
        return (
            <section>
                <Scoreboard
                    matches={this.state.matches}
                    guesses={this.state.guesses}
                />
                <div className="row">
                    {this.state.chihuahuas.map(chihuahua => (
                        <Card
                            key={chihuahua._id}
                            id={chihuahua._id}
                            name={chihuahua.name}
                            image={chihuahua.image}
                            getChihuahua={this.getChihuahua}
                        />
                    ))}
                </div>
            </section>
        )
    }
}

export default Game;