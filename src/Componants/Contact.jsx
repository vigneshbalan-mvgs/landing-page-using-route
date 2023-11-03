import { Component } from 'react';
import './CSS/Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to a server or API)
    // You can use axios or fetch to send the data to your server
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  render() {
    return (
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
