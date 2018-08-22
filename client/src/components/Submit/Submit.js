import React, { Component } from "react";

import API from "../../utils/API";

class Submit extends Component {

    state = {
        name: "",
        image: ""
    }

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        API.saveChihuahua(this.state)
            .then(res => {
                alert("You've saved a chihuahua");
                this.setState({
                    name: "",
                    image: ""
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="chihuahuaName">Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="chihuahuaName" 
                        placeholder="Enter name" 
                        name="name" 
                        onChange={this.handleInputChange} 
                        value={this.state.name} 
                        required="true" />
                </div>
                <div className="form-group">
                    <label htmlFor="chihuahuaImage">Image</label>
                    <input type="text" 
                        className="form-control" 
                        id="chihuahuaImage" 
                        placeholder="Enter image" 
                        name="image" 
                        onChange={this.handleInputChange} 
                        value={this.state.image} 
                        required="true" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )
    }
}

export default Submit;