import React from "react";
import { GITHUBAPI } from "../utils/constant";

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
    const data = await fetch(GITHUBAPI);
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="rounded m-4 p-4 text-center bg-zinc-100">
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
