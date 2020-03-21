import React from 'react';
import $ from 'jquery';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import styles from '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      calClicked: false,
      guestClicked: false,
      guestCount: 1,
      nights: 1,
      checkIn: 'Check-in',
      checkout: 'Checkout'
    }

    this.calPopUp = this.calPopUp.bind(this);
    this.guestPopUp = this.guestPopUp.bind(this);
    this.updateGuestCount = this.updateGuestCount.bind(this);
    this.updateCheckIn = this.updateCheckIn.bind(this);
    this.updateCheckout = this.updateCheckout.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/properties',
      success: (prop) => {
        this.setState({
          property: prop[0],
          price: prop[0].price,
          rating: prop[0].rating,
          reviewCount: prop[0].ratings_count,
          maxGuests: prop[0].max_guests,
          tax: prop[0].tax,
          fee: prop[0].service_fee
        })
        console.log(prop)
      },
      error: err => console.log('error in property Get')
    })
  }

  calPopUp() {
    this.setState({
      calClicked: !this.state.calClicked
    })
  }

  guestPopUp() {
    this.setState({
      guestClicked: !this.state.guestClicked
    })
  }

  updateGuestCount(count) {
    this.setState({
      guestCount: count
    })
  }

  updateCheckIn(date) {
    this.setState({
      checkIn: date,
    })
  }

  updateCheckout(date, nights) {
    this.setState({
      checkout: date,
    })
  }

  render() {
    let totalTax = Number((this.state.nights * this.state.price * this.state.tax).toFixed(2));
    let totalFee = Number((this.state.nights * this.state.price * this.state.fee).toFixed(2));
    let totalCost = Number((this.state.nights * this.state.price).toFixed(2));
    let total = (totalTax + totalFee + totalCost).toFixed(2);


    return (
      <div className={styles.mainApp}>
        <div>
          <span className={styles.price}>${this.state.price}</span>
          <span>per night</span></div>
        <span>*{this.state.rating}</span><span>   </span>
        <span>({this.state.reviewCount}) reviews</span>
        <br />
        <br />
        <div></div>
        <div className={styles.lineBreak}></div>
        <br />
        <div>Dates</div>
        <div onClick={this.calPopUp}><span>{this.state.checkIn}</span> --> <span>{this.state.checkout}</span></div>
        <div>
          {this.state.calClicked ? <Calendar updateCheckIn={this.updateCheckIn} updateCheckout={this.updateCheckout}/> : null}
        </div>

        <br />
        <div>Guests</div>
        <div onClick={this.guestPopUp}>{this.state.guestCount} guests</div>

        {this.state.guestClicked ? <Guests max={this.state.maxGuests} updateCount={this.updateGuestCount} /> : null}
        <br />
        <table className="costs">
          <tbody>
            <tr>
              <td colSpan="2">
                <span>${this.state.price} x {this.state.nights} nights</span>
              </td>
              <td>
                <span>${totalCost}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <span>Service fee</span>
              </td>
              <td>
                <span>${totalFee}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <span>Occupancy taxes and fees</span>
              </td>
              <td>
                <span>${totalTax}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Total</span>
              </td>
              <td>
                <span></span>
              </td>
              <td>
                <span>${total}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div>
          <button className={styles.reserveBtn}>Reserve</button>
        </div>
        <div>You won’t be charged yet</div>
      </div>

    )
  }
}

export default App;