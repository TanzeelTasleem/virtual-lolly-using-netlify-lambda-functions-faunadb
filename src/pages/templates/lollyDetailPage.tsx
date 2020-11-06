import React from 'react'
import Layout from '../../components/layout'
import Lolly from '../../components/svg/svg'
import styles from './lollyDetail.module.css'

const lollyDetailPage = () => {
    return (
        <Layout>
            <div className={styles.container}>
            <Lolly fillLollyTop="#3100f5" fillLollyBottom="#4221f5" fillLollyMiddle="#4287f5" />
            <div className={styles.detailBox}>
                    <p className={styles.details}>detail</p>
                    <p className={styles.details} style={{fontFamily : "monospace" , fontSize:"20px"}} >detail</p>
                    <p className={styles.details} >detail</p>
                </div>
            </div>
        </Layout>
    )
}

export default lollyDetailPage
