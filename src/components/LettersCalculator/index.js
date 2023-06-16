import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChange = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="box">
          <div className="card">
            <h1 className="main-head">Calculate the letters you enter</h1>
            <div className="input-box">
              <label htmlFor="searchInput">Enter the phrase</label>
              <input
                type="text"
                id="searchInput"
                placeholder="Enter the phrase"
                onChange={this.onChange}
              />
            </div>
            <div className="number-count">
              <p className="head"> No.of Letters: {count.length}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
