import * as React from "react"
import { Layout } from "../components/layout"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Recaptcha from "../components/recaptcha"
import {
    formRoot,
    formEmail,
    formTextArea,
    submitButtonWrapper,
    submitButton,
    featuredProductsText,
    emailPhotoLink,
    emailPhotoWrapper,
    emailLinkDiv,
    contestStep,
    contestHeader
} from "./index.module.css"

export default function HalloweenContest() {
    return (
        <Layout>
            <h1 className={featuredProductsText}>Maizie and Friends Spooky Costume Contest</h1>
            <div className={emailLinkDiv}>
                <h2 className={contestHeader}>Contest Steps:</h2>
                <br/>
                <ul>
                    <li className={contestStep}>1. Please click the orange button below to email us your photo</li>
                    <li className={contestStep}>2. Please fill your <b>name</b>, <b>email</b>, and<b> email</b></li>
                </ul>
            </div>
            <div className={emailPhotoWrapper}>
                <a
                    className={emailPhotoLink}
                    href="mailto:doug@rocsites?subject=Maizie and Friends Spooky Costume Contest Submission">
                    Submit Your Photo Here!
                </a>
            </div>

            <div className={formRoot}>
                <form
                    name="Halloween Contest"
                    method="POST"
                    data-netlify="true"
                    action="/thank-you-raffle"
                >
                    <input type="hidden" s name="form-name" value="Halloween Contest" />
                    <div className={formEmail}>
                        <label style={{ marginRight: "10px" }}>Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={formEmail}>
                        <label style={{ marginRight: "10px" }}>Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={formEmail}>
                        <label style={{ marginRight: "10px" }}>Phone</label>
                        <input type="tel" name="phone" />
                    </div>
                    <div style={{ margin: "10px" }}>
                        <GoogleReCaptchaProvider reCaptchaKey="6LeKGGApAAAAAFHqUMBHjpurs49F61ybKCsbH4Wh">
                            <Recaptcha />
                        </GoogleReCaptchaProvider>
                    </div>
                    <div
                        className={submitButtonWrapper}
                    >
                        <button
                            className={submitButton}
                            type="submit"
                        >Send</button>
                    </div>
                </form>
            </div>
       
        </Layout>

    )
}



