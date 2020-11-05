import React from 'react'
import Layout from '../components/layout'
import Lolly from '../components/svg/svg'
import styles from  './showLolly.module.css'

const showLolly = () => {
    return (
        <Layout>
            <div className={styles.container}>
            <Lolly fillLollyTop="#3100f5" fillLollyBottom="#4221f5" fillLollyMiddle="#4287f5" />
            <div className={styles.box}>
                <p className={styles.details}> Your lolly is freezing. Share it with this link</p>
                <div className={styles.linkBox}>
                   <p className={styles.link}>http://localhost:8888/showLolly/</p>
                </div>
                <div className={styles.detailBox}>
                    <p className={styles.details}>detail</p>
                    <p className={styles.details} style={{fontFamily : "monospace" , fontSize:"20px"}} >detail</p>
                    <p className={styles.details} >detail</p>
                </div>
            </div>
            </div>
        </Layout>
    )
}
export default showLolly
