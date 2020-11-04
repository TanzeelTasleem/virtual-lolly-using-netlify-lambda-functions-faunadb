import React, { useState } from "react"
import Layout from "../components/layout"
import Lolly from "../components/svg/svg"
import styles from "./createLolly.module.css"

interface initialValues {
  senderName: string
  reciptentName: string
  msg: string
}
interface error {
  stringError: string
}
const initialStateOfValues: initialValues = {
  senderName: "",
  reciptentName: "",
  msg: "",
}
import { Formik } from "formik"
const CreateLolly = () => {
  const [lollyTop, setlollyTop] = useState<string>("#f54c6b")
  const [lollyMid, setlollyMid] = useState<string>("#FF0000")
  const [lollyBot, setlollyBot] = useState<string>("#6e2633")

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
          initialValues={initialStateOfValues}
          validate={values => {
            const errors: error = {
              stringError: "",
            }
            if (
              /^\s+$/.test(values.senderName) ||
              /^\s+$/.test(values.msg) ||
              /^\s+$/.test(values.reciptentName)
            ) {
              errors.stringError = "should contain string"
            } else {
              errors.stringError = ""
            }
          }}
          onSubmit={(values, { setSubmitting }) => {
            alert("handle submit is running")
            values = {
              msg: "",
              reciptentName: "",
              senderName: "",
            }
          }}
        >
          {formik => (
            <div className={styles.lollyForm}>
              <form onSubmit={formik.handleSubmit} className={styles.form}>
                <label>To</label>
                <input
                  value={formik.values.reciptentName}
                  onChange={formik.handleChange}
                  name="reciptentName"
                  required
                  type="text"
                  placeholder="a lolly for"
                />
                <label>Say something</label>
                <textarea
                  value={formik.values.msg}
                  onChange={formik.handleChange}
                  name="msg"
                  required
                  rows={9}
                  cols={50}
                />
                <label>From</label>
                <input
                  value={formik.values.senderName}
                  onChange={formik.handleChange}
                  name="senderName"
                  required
                  type="text"
                  placeholder="a lolly form"
                />
                <button type="submit" className={styles.formBtn}>
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


