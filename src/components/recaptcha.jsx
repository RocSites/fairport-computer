import React, { useEffect, useCallback } from 'react';


import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

const Recaptcha = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        const token = await executeRecaptcha('yourAction');
    }, [executeRecaptcha]);

    useEffect(() => {
        handleReCaptchaVerify();
    }, []);
return <span></span>
};


export default Recaptcha;