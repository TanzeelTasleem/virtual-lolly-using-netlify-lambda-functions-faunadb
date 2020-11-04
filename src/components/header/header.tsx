import React from "react"
import styles from "./header.module.css"

const Header = () => (
  <header>
    <div className={styles.container}>
      <p className={styles.heading}>virtual lollipop</p>
      <p className={styles.title}>because we all know someone who deserves some sugar.</p>
    </div>
  </header>
)

export default Header
