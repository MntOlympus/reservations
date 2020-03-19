import React from 'react';
import $ from 'jquery';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      calClicked: false,
      guestClicked: false,
      guestCount: 1
    }

    this.calPopUp = this.calPopUp.bind(this);
    this.guestPopUp = this.guestPopUp.bind(this);
    this.updateGuestCount = this.updateGuestCount.bind(this);
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
          maxGuests: prop[0].max_guests
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

  render() {


    return (
      <div>
        <div>${this.state.price} per night</div>
        <span>*{this.state.rating}</span><span>   </span>
        <span>({this.state.reviewCount}) reviews</span>
        <br />
        <br />
        <div>Dates</div>
        <div onClick={this.calPopUp}><span>Check In</span> --> <span>Check Out</span></div>
        <div>
          {this.state.calClicked ? <Calendar /> : null}
        </div>

        <br />
        <div>Guests</div>
        <div onClick={this.guestPopUp}>{this.state.guestCount} guests</div>

          {this.state.guestClicked ? <Guests max={this.state.maxGuests} updateCount={this.updateGuestCount}/> : null}

      </div>

    )
  }
}

export default App;