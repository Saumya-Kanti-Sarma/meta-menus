import styles from './Menubar.module.css'

interface MenubarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Menubar = ({ isOpen, toggleMenu }: MenubarProps) => {
  return (
    <aside className={styles.aside} style={{
      left: isOpen ? "0" : "-100%"
    }}>
      hii
    </aside>
  )
}

export default Menubar
