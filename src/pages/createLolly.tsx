import React, { useState } from "react"
import Layout from "../components/layout"
import Lolly from "../components/svg/svg"
import Styles from "./createLolly.module.css"
import { Formik, FormikErrors } from "formik"
import { gql, useMutation } from "@apollo/client"
import { navigate } from "gatsby"
interface initialValues {
  senderName: string
  recipient: string
  msg: string
}
interface error {
  stringError: string
}
const initialStateOfValues: initialValues = {
  senderName: "",
  recipient: "",
  msg: "",
}

const createVirtualLolly = gql`
  mutation createLolly(
    $senderName: String!
    $recipient: String!
    $msg: String!
    $lollyTop: String!
    $lollyMid: String!
    $lollyBotm: String!
  ) {
    createLolly(
      senderName: $senderName
      recipient: $recipient
      msg: $msg
      lollyTop: $lollyTop
      lollyMid: $lollyMid
      lollyBotm: $lollyBotm
    ) {
      senderName
      msg
      recipient
      lollyTop
      lollyMid
      lollyBotm
      lollyPath
    }
  }
`

const CreateLolly = () => {
  const [lollyTop, setlollyTop] = useState<string>("#f54c6b")
  const [lollyMid, setlollyMid] = useState<string>("#FF0000")
  const [lollyBot, setlollyBot] = useState<string>("#6e2633")
  const [createLolly, { loading, data }] = useMutation(createVirtualLolly)
  return (
    <Layout>
      <div className={Styles.container}>
        <div className={Styles.box}>
          <Lolly
            fillLollyTop={lollyTop}
            fillLollyMiddle={lollyMid}
            fillLollyBottom={lollyBot}
          />
          <div className={Styles.colorPickers}>
            <label className={Styles.labelForPicker}>
              <input
                className={Styles.picker}
                type="color"
                onChange={e => {
                  setlollyTop(e.target.value)
                }}
                value={lollyTop}
              />
            </label>
            <label className={Styles.labelForPicker}>
              <input
                className={Styles.picker}
                type="color"
                onChange={e => {
                  setlollyMid(e.target.value)
                }}
                value={lollyMid}
              />
            </label>
            <label className={Styles.labelForPicker}>
              <input
                className={Styles.picker}
                type="color"
                onChange={e => {
                  setlollyBot(e.target.value)
                }}
                value={lollyBot}
              />
            </label>
          </div>
        </div>
        <div className={Styles.lollyForm}>
          <Formik
            initialValues={initialStateOfValues}
            onSubmit={async (values, { setSubmitting }) => {
              await createLolly({
                variables: {
                  senderName: values.senderName,
                  recipient: values.recipient,
                  msg: values.msg,
                  lollyTop: lollyTop,
                  lollyMid: lollyMid,
                  lollyBotm: lollyBot,
                },
              }).then(res => {
                setSubmitting(false)
                navigate(`/${res.data.createLolly.lollyPath}`)
              })
              values = {
                msg: "",
                senderName: "",
                recipient: "",
              }
            }}
          >
            {formik => (
              <form onSubmit={formik.handleSubmit} className={Styles.form}>
                <label>To</label>
                <input
                  value={formik.values.recipient}
                  onChange={formik.handleChange}
                  name="recipient"
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
                <button
                  type="submit"
                  className={Styles.formBtn}
                  disabled={formik.isSubmitting}
                >
                  Freeze this lolly and get a link
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  )
}
export default CreateLolly
