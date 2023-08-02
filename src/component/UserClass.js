import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kumar007ambi");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : ambikakewat007@gmail.com</h4>
      </div>
    );
  }
}
/*
Parent constrcutor
parent render
child constructor
child render
child componentDidMount
parnet componentDidMount
*/

export default UserClass;
