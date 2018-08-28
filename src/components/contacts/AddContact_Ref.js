import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };

  static defaultProps = {
    name: 'Default Name',
    email: 'default@gmail.com',
    phone: '13082190'
  };
  render() {
    const { name, phone, email } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                ref={this.nameInput}
                defaultValue={name}
                name="name"
                placeholder="Enter Name"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                ref={this.emailInput}
                defaultValue={email}
                name="email"
                placeholder="Enter email"
                type="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                ref={this.phoneInput}
                defaultValue={phone}
                name="phone"
                placeholder="Enter phone"
                type="text"
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
