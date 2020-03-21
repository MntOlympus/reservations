import React from 'react';

const app = document.getElementById('app')

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCountedGuests: 1,
      adults: 1,
      children: 0,
      infants: 0,
      max: this.props.max
    }

    this.el = document.createElement('div');

    this.increaseAdults = this.increaseAdults.bind(this)
    this.decreaseAdults = this.decreaseAdults.bind(this)
    this.increaseChildren = this.increaseChildren.bind(this)
    this.decreaseChildren = this.decreaseChildren.bind(this)
    this.increaseInfants = this.increaseInfants.bind(this)
    this.decreaseInfants = this.decreaseInfants.bind(this)
  }

  componentDidMount() {
    app.appendChild(this.el)
  }

  increaseAdults() {
    if (this.state.totalCountedGuests < this.state.max) {
      this.setState({
        adults: this.state.adults + 1,
        totalCountedGuests: this.state.totalCountedGuests + 1
      }, () => this.props.updateCount(this.state.totalCountedGuests) )
    }
  }

  decreaseAdults() {
    if (this.state.adults > 1) {
      this.setState({
        adults: this.state.adults - 1,
        totalCountedGuests: this.state.totalCountedGuests - 1
      }, () => this.props.updateCount(this.state.totalCountedGuests) )
    }
  }

  increaseChildren() {
    if (this.state.totalCountedGuests < this.state.max) {
      this.setState({
        children: this.state.children + 1,
        totalCountedGuests: this.state.totalCountedGuests + 1
      }, () => this.props.updateCount(this.state.totalCountedGuests) )
    }
  }

  decreaseChildren() {
    if (this.state.children > 0) {
      this.setState({
        children: this.state.children - 1,
        totalCountedGuests: this.state.totalCountedGuests - 1
      }, () => this.props.updateCount(this.state.totalCountedGuests))
    }
  }

  increaseInfants() {
    if (this.state.infants < 5) {
      this.setState({
        infants: this.state.infants + 1
      })
    }
  }

  decreaseInfants() {
    if (this.state.infants > 0) {
      this.setState({
        infants: this.state.infants - 1
      })
    }
  }


  render() {

    return (
      <div>
        <table className="guests">
        <tbody>
            <tr>
              <td colSpan="2">
                <span>Adults</span>
              </td>
              <td>
                <button onClick={this.decreaseAdults}>-</button>
              </td>
              <td>
                <span>{this.state.adults}</span>
              </td>
              <td>
                <button onClick={this.increaseAdults}>+</button>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <span>Children</span>
              </td>
              <td>
                <button onClick={this.decreaseChildren}>-</button>
              </td>
              <td>
                <span>{this.state.children}</span>
              </td>
              <td>
                <button onClick={this.increaseChildren}>+</button>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <span>Infants</span>
              </td>
              <td>
                <button onClick={this.decreaseInfants}>-</button>
              </td>
              <td>
                <span>{this.state.infants}</span>
              </td>
              <td>
                <button onClick={this.increaseInfants}>+</button>
              </td>
            </tr>
            </tbody>
        </table>
        <div>{this.state.max} guests maximum. Infants don’t count toward the number of guests.</div>
      </div>
    )
  }
}

export default Guests;