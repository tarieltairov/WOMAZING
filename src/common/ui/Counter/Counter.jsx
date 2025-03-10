import { useState } from 'react'

import { Button } from '../Button'

import styles from './Counter.module.scss'

export const Counter = ({ initialValue = 1, min = 0, onChange }) => {
  const [quantity, setQuantity] = useState(initialValue)

  const handleDecrement = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      onChange && onChange(newQuantity)
    }
  }

  const handleIncrement = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    onChange && onChange(newQuantity)
  }

  return (
    <div className={styles.product__quantity}>
      <div className={styles.counterControls}>
        <button
          onClick={handleDecrement}
          disabled={quantity <= min}
          className={styles.button}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            const newQuantity = Math.max(min, +e.target.value)
            setQuantity(newQuantity)
            onChange && onChange(newQuantity)
          }}
          className={styles.inp}
        />
        <button
          onClick={handleIncrement}
          className={styles.button}
        >
          +
        </button>
      </div>
    </div>
  )
}
