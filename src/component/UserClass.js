import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("child component did mount called");
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h3>Count : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click me
        </button>
        {/* <h3>Count2 : {count2}</h3> */}

        <h2>Name : {name}</h2>
        <h3>Location : Kolkata</h3>
        <h4>Contact : ambikakewat007@gmail.com</h4>
      </div>
    );
  }
}

// Parent constrcutor
// parent render
// child constructor
// child render
// child componentDidMount
// parnet componentDidMount

export default UserClass;
