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
                <h2 className={contestHeader}>Contest Instructions:</h2>
                <br/>
                <ul>
                    <li className={contestStep}>1. Please click the <b><span style={{color: "#ff7132"}}>orange button</span></b> below to email us your photo. </li>
                    <br/>
                </ul>
            </div>
            <div className={emailPhotoWrapper}>
                <a
                    className={emailPhotoLink}
                    href="mailto:doug@rocsites.com?subject=Maizie and Friends Spooky Costume Contest Submission &body=Please include your name and phone number, then attach your photo to this email. Good luck! %0D%0A %0D%0A Name: %0D%0A %0D%0A Phone Number:">
                    Submit Your Photo Here!
                </a>
            </div>
       
        </Layout>

    )
}



