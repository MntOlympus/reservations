import React from 'react';
import styles from '../styles/Guests.css';

const app = document.getElementById('app')

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCountedGuests: props.adults + props.children,
      adults: props.adults,
      children: props.children,
      infants: props.infants,
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

    return (
      <div>
        <div className={styles.guestBox}>
          <div className={styles.adultRowBig}>
            <div className={styles.adultWord}>Adults</div>
            <div className={styles.adjusters}>
              <button className={styles.minBtn} onClick={this.decreaseAdults}>-</button>
              <div className={styles.adultNum}>{this.state.adults}</div>
              <button className={styles.addBtn} onClick={this.increaseAdults}>+</button>
            </div>
          </div>
          <div className={styles.childRowBig}>
            <div className={styles.childWord}>Children</div>
            <div className={styles.adjusters}>
              <button className={styles.minBtn} onClick={this.decreaseChildren}>-</button>
              <div className={styles.childNum}>{this.state.children}</div>
              <button className={styles.addBtn} onClick={this.increaseChildren}>+</button>
            </div>
          </div>
          <div className={styles.infantRowBig}>
            <div className={styles.infantWord}>Children</div>
            <div className={styles.adjusters}>
              <button className={styles.minBtn} onClick={this.decreaseInfants}>-</button>
              <div className={styles.infantNum}>{this.state.infants}</div>
              <button className={styles.addBtn} onClick={this.increaseInfants}>+</button>
            </div>
          </div>
          <div className={styles.maxWords}>{this.state.max} guests maximum. Infants don’t count toward the number of guests.</div>
        </div>
      </div>






      //   <table className="guests">
      //   <tbody>
      //       <tr>
      //         <td colSpan="2">
      //           <span></span>
      //         </td>
      //         <td>

      //         </td>
      //         <td>

      //         </td>
      //         <td>

      //         </td>
      //       </tr>
      //       <tr>
      //         <td colSpan="2">
      //           <span>Children</span>
      //         </td>
      //         <td>
      //           <button className={styles.minBtn} onClick={this.decreaseChildren}>-</button>
      //         </td>
      //         <td>
      //           <span>{this.state.children}</span>
      //         </td>
      //         <td>
      //           <button className={styles.addBtn} onClick={this.increaseChildren}>+</button>
      //         </td>
      //       </tr>
      //       <tr>
      //         <td colSpan="2">
      //           <span>Infants</span>
      //         </td>
      //         <td>
      //           <button className={styles.minBtn} onClick={this.decreaseInfants}>-</button>
      //         </td>
      //         <td>
      //           <span>{this.state.infants}</span>
      //         </td>
      //         <td>
      //           <button className={styles.addBtn} onClick={this.increaseInfants}>+</button>
      //         </td>
      //       </tr>
      //       </tbody>
      //   </table>
      //
      // </div>
    )
  }
}

export default Guests;