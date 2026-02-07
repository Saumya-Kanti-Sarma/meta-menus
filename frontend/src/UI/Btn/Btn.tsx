import styles from "./Btn.module.css"

type BtnProps = {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  text?: string
}

const Btn = ({ onClick, disabled = false, className, text = "Click me" }: BtnProps) => {
  return (
    <button
      className={`${styles.btn} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Btn
