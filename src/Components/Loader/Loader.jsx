import React from 'react'
import styles from './styles.module.css'

const Loader = ({ 
    size,
    color,
    customStyles
 }) => {
  return (
    <div className={`${styles.loaderContainer} ${customStyles}`}>
        <svg className={`${styles.iconLoader} ${styles[size]}`} viewBox="25 25 50 50">
            <circle className={`${styles.circle} ${styles[color]}`} r="20" cy="50" cx="50"></circle>
        </svg>
    </div>
  )
}

export default Loader

Loader.defaultProps = {
    size: 'large',
    color: 'primary'
}