import * as React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"


export default function ThankYouCanal() {
    return (
        <Layout showContact={false}>
            <div style={{
                display: "flex", 
                margin: "auto", 
                justifyContent: "center",
                minHeight: "54vh"
            }}>
                <div
                style={{
                    display: "flex", 
                    flexDirection: "column", 
                    margin: "auto", 
                    justifyContent: "center",
                    alignItems: "center"
                }}
                
                >
                    <p style={{
                        fontSize: "2rem",
                    }}>Thank you for your submission! </p>
                    <p style={{
                        fontSize: "1.5rem"
                    }}
                    >Good luck!</p>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo />


