import * as React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Recaptcha from "../components/recaptcha"

import {
    servicesPageRoot,
    servicesHeader,
    formRoot,
    formEmail,
    formTextArea,
    submitButtonWrapper,
    submitButton
} from "./services-page.module.css"


export default function ServicesPage() {
    return (
        <Layout showContact={false}>
            <div className={servicesPageRoot}>
                <p className={servicesHeader}>Services</p>
                <div className={formRoot}>
                    <form
                        name="Fairport Computers Services Form"
                        method="POST"
                        data-netlify="true"
                        action="/thank-you"
                    >
                        <input type="hidden" name="form-name" value="Fairport Computers Services Form" />

                        <div className={formEmail}>
                            <label style={{ marginRight: "10px" }}>Email (required)</label>
                            <input type="email" name="email" />
                        </div>
                        <div className={formEmail}>
                            <label style={{ marginRight: "10px" }}>Phone</label>
                            <input type="tel" name="phone" />
                        </div>
                        <div className={formTextArea}>
                            <label>Description of Problem</label>
                            <textarea name="message" />
                        </div>
                        <div className={formEmail}>
                            <label>Power Cord/Adapter? - (Yes/No)</label>
                            <input name="power" />
                        </div>
                        <div className={formEmail}>
                            <label>Device/Computer Type - (Laptop, Phone, Desktop etc.)</label>
                            <input name="device-type" />
                        </div>
                        <div className={formEmail}>
                            <label>Device Make - (Apple, Microsoft, Lenovo etc.)</label>
                            <input name="device-make" />
                        </div>
                        <div className={formEmail}>
                            <label>Device Model - (iPhone, MacBook, ThinkPad etc.)</label>
                            <input name="device-model" />
                        </div>
                        <div className={formEmail}>
                            <label>Serial Number</label>
                            <input name="service-number" />
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
            </div>
        </Layout>
    )
}

export const Head = () => <Seo />


