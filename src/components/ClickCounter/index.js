import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(prevState.count)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <span className="span">{count}</span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <div>
          <button className="btn" type="button" onClick={this.onIncrement}>
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
