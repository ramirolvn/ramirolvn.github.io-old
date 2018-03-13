import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Contact extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    https://formspree.io/ramirolvn@hotmail.com
    event.preventDefault();
  }
  

  render() {
    return (
      <form action="https://formspree.io/ramirolvn@hotmail.com" onSubmit={this.handleSubmit} method="POST">
        <label>
          Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
          <input type="email" name="_replyto" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Send" />
      </form>
      
    );
  }
}

export default Contact;