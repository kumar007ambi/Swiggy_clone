import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="user-card">
        <h3>Count : {this.state.count}</h3>
        <h2>Name : {this.props.name}</h2>
        <h3>Location : Kolkata</h3>
        <h4>Contact : ambikakewat007@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
