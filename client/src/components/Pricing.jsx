import React from 'react';
import styles from '../styles/Pricing.css';

const Pricing = (props) => {

  let price = props.property.price;
  let totalTax = Number((props.nights * price * props.property.tax).toFixed(2));
  let totalFee = Number((props.nights * price * props.property.service_fee).toFixed(2));
  let totalCost = Number((props.nights * price).toFixed(2));
  let total = Number(totalTax + totalFee + totalCost).toLocaleString()

  totalCost = totalCost.toLocaleString();
  // total = Number(total).toLocaleString()


  return (

    <div className={styles.pricingBox}>
      <div>
        <div className={styles.pricingRow}>
          <div className={styles.priceNightsSection}>
            <span className={styles.priceNightsWords}><span>${price} x {props.nights} nights</span></span>
          </div>
          <div className={styles.price}>
            <span className={styles.priceNumber}>${totalCost}</span>
          </div>
        </div>
        <div>
          <div className={styles.lineBreak}></div>
        </div>
      </div>
      <div>
        <div className={styles.pricingRow}>
          <div className={styles.priceFeeSection}>
            <span className={styles.serviceFeeWords}><span>Service fee</span></span>
          </div>
          <div className={styles.price}>
            <span className={styles.priceNumber}>${totalFee}</span>
          </div>
        </div>
        <div>
          <div className={styles.lineBreak}></div>
        </div>
      </div>
      <div>
        <div className={styles.pricingRow}>
          <div className={styles.priceTaxSection}>
            <span className={styles.taxWords}><span>Occupancy taxes and fees</span></span>
          </div>
          <div className={styles.price}>
            <span className={styles.priceNumber}>${totalTax}</span>
          </div>
        </div>
        <div>
          <div className={styles.lineBreak}></div>
        </div>
      </div>
      <div>
        <div className={styles.pricingRow}>
          <div className={styles.priceFeeSection}>
            <span className={styles.totalWords}><span>Total</span></span>
          </div>
          <div className={styles.price}>
            <span className={styles.totalNumber}>${total}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing;