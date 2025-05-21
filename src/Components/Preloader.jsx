import React from 'react'
import styles from '../Styles/Preloader.module.css'
const Preloader = () => {
  return (
      <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p>Loading...</p>
    </div>
  )
}

export default Preloader