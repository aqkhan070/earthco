import React from 'react'
import StaticComps from '../components/StaticComps'
import DashBoard from '../components/DashBoard'
import { useEffect } from 'react'
import Footer from '../components/Footer'

const DashboardPage = () => {
    // useEffect(() => {
    //     var script = document.createElement('script');
    //     script.type = 'text/javascript';
    //     script.src = '../assets/vendor/global/global.min.js';
    //     script.onload = function () {
    //         // setScriptLoadingState('LOADED');
    //     };
    //     script.onerror = function () {
    //         // setScriptLoadingState('FAILED');
    //     };
    //     document.body.appendChild(script);
    // })
    return (
        <>
            <StaticComps />
            <DashBoard />
            <Footer />
        </>
    )
}

export default DashboardPage
