import React from "react";

class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      msg: "hello msg"
    }
  }

  componentDidMount() {
    console.log("mount");
  }

  componentWillReceiveProps() {
    console.log("receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log(this.props, this.state);
    if(nextState.msg !== this.state.msg) {
      return true
    }
    return false;
  }

  componentDidUpdate() {
    console.log("update");
  }

  render() {
    return (
      <div>
        <h2>Index</h2>
        <p>{this.state.msg}</p>
        <input type="button" value="Click" onClick={this.handleClick.bind(this)} />
      </div>
    )
  }

  handleClick() {
    this.setState({
      msg: "handle Click msg"
    })
  }

}

export default Index