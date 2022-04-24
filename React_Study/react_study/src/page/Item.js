import React from "react";
import { Link, Routes, useNavigate, useParams, useLocation, Route } from "react-router-dom"

class Item extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      json: []
    }
  }

  componentDidMount() {
    this.setState({
      json: [
        {
          id: "1",
          description: "这是第一个"
        },
        {
          id: "2",
          description: "这是第二个"
        },
        {
          id: "3",
          description: "这是第三个",
          children: [
            {
              id: "3_1",
              description: "这是3_1"
            },
            {
              id: "3_2",
              description: "这是3_2"
            }
          ]
        }
      ]
    })
  }


  render() {
    const { json } = this.state

    return (
      <div>
        {
          json.map((item, index) => {
            console.log(`${this.props.location.pathname}/${item.id}`);
            return (
              item.children ? <Link to={`${this.props.location.pathname}/${item.id}`} key={item.id}>{item.description}</Link> : <span key={item.id}>{item.description}</span>
            )
          })
        }
        <Routes>
          {
            json.filter((x) => x.children).map((i) => {
              console.log(`${this.props.location.pathname}/${i.id}`);
              return <Route key={i.id} path={`${i.id}`} element={withRouter(Item)}></Route>
            })
          }
        </Routes>
      </div>
    )
  }
}


const withRouter = (MapRouter) => {

  return (props) => {

    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    return <MapRouter {...props} params={params} navigate={navigate} location={location}> </MapRouter>
  }
} 

export default withRouter(Item)