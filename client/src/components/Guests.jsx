import React from 'react';
import styles from '../styles/Guests.css';

const app = document.getElementById('app')

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCountedGuests: this.props.adults + this.props.children,
      adults: this.props.adults,
      children: this.props.children,
      infants: this.props.infants,
      max: this.props.max
    }

    this.increaseAdults = this.increaseAdults.bind(this)
    this.decreaseAdults = this.decreaseAdults.bind(this)
    this.increaseChildren = this.increaseChildren.bind(this)
    this.decreaseChildren = this.decreaseChildren.bind(this)
    this.increaseInfants = this.increaseInfants.bind(this)
    this.decreaseInfants = this.decreaseInfants.bind(this)
  }

  increaseAdults() {
    if (this.state.totalCountedGuests < this.state.max) {
      this.setState({
        adults: this.state.adults + 1,
        totalCountedGuests: this.state.totalCountedGuests + 1
      }, () => this.props.updateCount(this.state.totalCountedGuests, this.state.adults, this.state.children, this.state.infants))
    }
  }

  decreaseAdults() {
    if (this.state.adults > 1) {
      this.setState({
        adults: this.state.adults - 1,
        totalCountedGuests: this.state.totalCountedGuests - 1
      }, () => this.props.updateCount(this.state.totalCountedGuests, this.state.adults, this.state.children, this.state.infants))
    }
  }

  increaseChildren() {
    if (this.state.totalCountedGuests < this.state.max) {
      this.setState({
        children: this.state.children + 1,
        totalCountedGuests: this.state.totalCountedGuests + 1
      }, () => this.props.updateCount(this.state.totalCountedGuests, this.state.adults, this.state.children, this.state.infants))
    }
  }

  decreaseChildren() {
    if (this.state.children > 0) {
      this.setState({
        children: this.state.children - 1,
        totalCountedGuests: this.state.totalCountedGuests - 1
      }, () => this.props.updateCount(this.state.totalCountedGuests, this.state.adults, this.state.children, this.state.infants))
    }
  }

  increaseInfants() {
    if (this.state.infants < 5) {
      this.setState({
        infants: this.state.infants + 1
      }, () => this.props.updateCount(this.state.totalCountedGuests, this.state.adults, this.state.children, this.state.infants))
    }
  }

  decreaseInfants() {
    if (this.state.infants > 0) {
      this.setState({
        infants: this.state.infants - 1
      }, () => this.props.updateCount(this.state.totalCountedGuests, this.state.adults, this.state.children, this.state.infants))
    }
  }


  render() {

   let fadedAmin = this.props.adults === 1 ? `${styles.faded}` : '';
   let fadedAmax = this.state.totalCountedGuests === this.state.max ? `${styles.faded}` : '';
   let fadedKmin = this.props.children === 0 ? `${styles.faded}` : '';
   let fadedImin = this.props.infants === 0 ? `${styles.faded}` : '';
   let fadedImax = this.props.infants === 5 ? `${styles.faded}` : '';

    return (
      <div>
        <div className={styles.guestBox}>
          <div className={styles.adultRowBig}>
            <div className={styles.adultWord}>Adults</div>
            <div className={styles.adjusters}>
              <button className={`${fadedAmin} ${styles.minBtn}`} onClick={this.decreaseAdults}>-</button>
              <div className={styles.adultNum}>{this.state.adults}</div>
              <button className={`${fadedAmax} ${styles.addBtn}`} onClick={this.increaseAdults}>+</button>
            </div>
          </div>
          <div className={styles.childRowBig}>
            <div className={styles.childWord}>Children</div>
            <div className={styles.adjusters}>
              <button className={`${fadedKmin} ${styles.minBtn}`} onClick={this.decreaseChildren}>-</button>
              <div className={styles.childNum}>{this.state.children}</div>
              <button className={`${fadedAmax} ${styles.addBtn}`} onClick={this.increaseChildren}>+</button>
            </div>
          </div>
          <div className={styles.infantRowBig}>
            <div className={styles.infantWord}>Infants</div>
            <div className={styles.adjusters}>
              <button className={`${fadedImin} ${styles.minBtn}`} onClick={this.decreaseInfants}>-</button>
              <div className={styles.infantNum}>{this.state.infants}</div>
              <button className={`${fadedImax} ${styles.addBtn}`} onClick={this.increaseInfants}>+</button>
            </div>
          </div>
          <div className={styles.maxWords}>{this.state.max} guests maximum. Infants don’t count toward the number of guests.</div>
          <div className={styles.closeDiv}>
            <button className={styles.closeBtn} onClick={this.props.close}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Guests;