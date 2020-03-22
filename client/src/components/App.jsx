import React from 'react';
import $ from 'jquery';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import Pricing from './Pricing.jsx';
import Star from '../star.svg';
import RightArrow from '../rightArrow.svg';
import styles from '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      calClicked: false,
      guestClicked: false,
      guestCount: 1,
      adultCount: 1,
      childCount: 0,
      infantCount: 0,
      nights: 0,
      checkIn: 'Check-in',
      checkout: 'Checkout',
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
      success: (property) => {
        let prop = property[0];
        this.setState({
          property: prop,
          price: prop.price,
          rating: prop.rating,
          reviewCount: prop.ratings_count,
          maxGuests: prop.max_guests,
          tax: prop.tax,
          fee: prop.service_fee
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

  updateGuestCount(gCount, aCount, cCount, iCount) {
    this.setState({
      guestCount: gCount,
      adultCount: aCount,
      childCount: cCount,
      infantCount: iCount,
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
      nights: nights
    })
  }

  render() {
    let infants = this.state.infantCount ? this.state.infantCount : null;
    let infantWord = this.state.infantCount > 1 ? 'infants' : 'infant';
    let guestWord = this.state.guestCount > 1 ? 'guests' : 'guest';

    return (
      <div className={styles.mainApp}>
        <div>
          <span className={styles.price}>${this.state.price}</span>
          <span className={styles.perNight}> per night</span>
        </div>
        <div className={styles.ratingAndCount}>
          <img className={styles.star} src={Star} />
          <span className={styles.rating}>{this.state.rating} </span>
          <span className={styles.reviewCount}>({this.state.reviewCount} reviews)</span>
        </div>
        <br />
        <br />
        <div></div>
        <div className={styles.lineBreak}></div>
        <br />
        <div className={styles.datesWord}>Dates</div>
        <div className={styles.datesBox} onClick={this.calPopUp}>
          <span className={styles.checkIn}>{this.state.checkIn}</span>
          <img className={styles.rightArrow} src={RightArrow} />
          <span className={styles.checkout}>{this.state.checkout}</span>
        </div>
        <div>
          {this.state.calClicked ? <Calendar updateCheckIn={this.updateCheckIn} updateCheckout={this.updateCheckout} /> : null}
        </div>

        <br />
        <div className={styles.guestsWord}>Guests</div>
        <div className={styles.guestsBox} onClick={this.guestPopUp}>
          <span className={styles.guestCounts}>{this.state.guestCount} {guestWord}{infants ? `, ${infants} ${infantWord}` : null}</span>
        </div>

        {this.state.guestClicked ?
          <Guests
            max={this.state.maxGuests}
            updateCount={this.updateGuestCount}
            adults={this.state.adultCount}
            children={this.state.childCount}
            infants={this.state.infantCount} />
          : null}
        <br />
        {this.state.property && this.state.nights ?
          <Pricing nights={this.state.nights} property={this.state.property}/>
        : null}
        <br />
        <div>
          <button className={styles.reserveBtn}>Reserve</button>
        </div>
        <div className={styles.noCharge}>
          <span className={styles.noChargeWords}>You won’t be charged yet</span>
        </div>
      </div>

    )
  }
}

export default App;