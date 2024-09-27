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
    featuredProductsText
} from "./index.module.css"

// NOTE - this form has been DEPRECATED and is no longer being tracked in netlify

export default function CanalDaysRaffle() {
    return (
        <Layout>
        <h1 className={featuredProductsText}>Canal Days Raffle</h1>
            <div className={formRoot}>
                <form
                    name="Canal Days Raffle Form"
                    method="POST"
                    data-netlify="true"
                    action="/thank-you-raffle"
                >
                    <input type="hidden"s name="form-name" value="Canal Days Raffle Form" />
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



