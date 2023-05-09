/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NOT_FOUND_TEXT_DEFAULT } from '../../Common/messages'
import DefaultImage from '../../assets/img/rick-not-found.png';
import styles from './styles.module.css';

const NotFound = ({ text, widthImage, urlImage }) => {
  return (
    <div className={styles.notFound}>
        {widthImage ? <img className={styles.notFoundImage} src={urlImage || DefaultImage} /> : null}
        <h2 className={styles.notFoundtext}>{ text || NOT_FOUND_TEXT_DEFAULT }</h2>
    </div>
  )
}

export default NotFound

NotFound.defaultProps = {
    widthImage: false
}