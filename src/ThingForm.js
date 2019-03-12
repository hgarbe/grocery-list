import React from "react";

class ThingForm extends React.Component {
  state = { name: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add Todo to array
    this.props.addItemFunction(this.state.name);
    this.setState({ name: "", });
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name" 
          value={this.state.name}
          onChange={this.handleChange}
          required 
          placeholder="Add an Item" 
        />
      </form>
    )
  }
}

export default ThingForm;