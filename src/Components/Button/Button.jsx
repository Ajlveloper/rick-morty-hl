import styles from './styles.module.css'

const Button = ({ children, icon, stylesCustom, ...props }) => {
  return (
    <button className={!icon ? `${styles.button} ${stylesCustom}` : null}{ ...props }>{ children }</button>
  )
}

export default Button

Button.default = {
  icon: false
}