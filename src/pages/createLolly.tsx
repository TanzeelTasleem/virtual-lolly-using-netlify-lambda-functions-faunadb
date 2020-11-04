import React, { useState } from "react"
import Layout from "../components/layout"
import Lolly from "../components/svg/svg"
import styles from "./createLolly.module.css"

import { Formik } from "formik"
const CreateLolly = () => {
  const [lollyTop, setlollyTop] = useState("#f54c6b")
  const [lollyMid, setlollyMid] = useState("#FF0000")
  const [lollyBot, setlollyBot] = useState("#6e2633")

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.box}>
          <Lolly
            fillLollyTop={lollyTop}
            fillLollyMiddle={lollyMid}
            fillLollyBottom={lollyBot}
          />
          <div className={styles.colorPickers}>
            <label className={styles.labelForPicker}>
              <input
                className={styles.picker}
                type="color"
                onChange={e => {
                  setlollyTop(e.target.value)
                }}
                value={lollyTop}
              />
            </label>
            <label className={styles.labelForPicker}>
              <input
                className={styles.picker}
                type="color"
                onChange={e => {
                  setlollyMid(e.target.value)
                }}
                value={lollyMid}
              />
            </label>
            <label className={styles.labelForPicker}>
              <input
                className={styles.picker}
                type="color"
                onChange={e => {
                  setlollyBot(e.target.value)
                }}
                value={lollyBot}
              />
            </label>
          </div>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {}}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {() => (
            <div className={styles.lollyForm}>
              <form className={styles.form}>
                <label>To</label>
                <input type="text" placeholder="a lolly for" />
                <label>Say something</label>
                <textarea rows={9} cols={50} />
                <label>From</label>
                <input type="text" value="" placeholder="a lolly form" />
                <button className={styles.formBtn}>
                  Freeze this lolly and get a link
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </Layout>
  )
}
export default CreateLolly

{
  /* <div className={styles.lollyForm}> 
              <form className={styles.form}>
                 <label>To</label>
                 <input type ="text"  placeholder="a lolly for"/>
                 <label>Say something</label>
                 <textarea rows={9} cols={50} />
                 <label>From</label>
                 <input type ="text" value="" placeholder="a lolly form"/>
                 <button className={styles.formBtn}>Freeze this lolly and get a link</button>
              </form>
          </div> */
}
{
  /* </div> */
}
