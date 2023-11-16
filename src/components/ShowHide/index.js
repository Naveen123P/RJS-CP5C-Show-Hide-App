// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isHideFN: true, isHideLN: true}

  firstName = () => {
    this.setState(prevState => ({isHideFN: !prevState.isHideFN}))
  }

  lastName = () => {
    this.setState(prevState => ({isHideLN: !prevState.isHideLN}))
  }

  render() {
    const {isHideFN} = this.state
    const toSHowFirstName = !isHideFN ? 'name-container' : null
    const fname = !isHideFN ? 'Joe' : null
    const {isHideLN} = this.state
    const toSHowLastName = !isHideLN ? 'name-container' : null
    const lname = !isHideLN ? 'Jonas' : null

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button onClick={this.firstName} className="button" type="button">
            Show/Hide Firstname
          </button>
          <button onClick={this.lastName} className="button" type="button">
            Show/Hide Lastname
          </button>
        </div>
        <div className="names-container">
          <div className={`fClass ${toSHowFirstName}`}>
            <p>{fname}</p>
          </div>
          <div className={`fClass ${toSHowLastName}`}>
            <p>{lname}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
