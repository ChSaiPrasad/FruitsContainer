// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="cont1">
        <div className="cont2">
          <h1>
            Bob ate {count1} mangoes {count2} bananas
          </h1>
          <div className="cont3">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button type="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button onClick={this.onBanana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
