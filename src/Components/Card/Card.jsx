import HeartIcon from '../../assets/icons/Heart'
import styles from './styles.module.css'

const Card = ({
    image,
    name,
    status,
    elementRef,
    id,
    detailHandler,
    favoriteHandler
}) => {
  return (
    <button value={id} className={styles.card} ref={elementRef} onClick={detailHandler}>
        <div className={styles.cardImageContainer}>
            <img src={image} alt={name} className={styles.cardImage} />
        </div>
        <div>
          <p className={styles.cardText}>{ name }</p>
          <p className={styles.cardText}>{ status }</p>
        </div>
        {favoriteHandler ? (
        <span value={id} className={styles.cardIconButton} onClick={favoriteHandler}>
          <HeartIcon />
        </span>
        ) : null }
    </button>
  )
}

export default Card

Card.defaultProps = {
  favoriteHandler: null
}