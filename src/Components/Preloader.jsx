import React from 'react'
import styles from '../Styles/Preloader.module.css'
import UPloader from '../Animations/UPloader'
const Preloader = () => {
  return (
      <div className={styles.loaderContainer}>
      {/* <div className={styles.loader}></div> */}
      <UPloader />
      <p>Loading...</p>
    </div>
  )
}

export default Preloader