import React from "react";
// 安装prop-types可以来限定props的类型,
import propTypes from "prop-types"

class Detail extends React.Component {

  // 设置默认的props
  static defaultProps = {
    id: 123,
    message: "tang"
  }

  static propTypes = {
    id: propTypes.number.isRequired,
    message: propTypes.string.isRequired
  }

  render() {
    const { id, message } = this.props
    console.log(id, message);
    return (
      <div>
        123
      </div>
    )
  }
}

export default Detail