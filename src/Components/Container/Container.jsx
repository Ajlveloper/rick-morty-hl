import styles from './styles.module.css' 

const Container = ({ children, customStyles }) => {
  return (
    <div className={`${styles.container} ${customStyles}`}>
        { children }
    </div>
  )
}

export default Container