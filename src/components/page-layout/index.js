import React from 'react'
import Header from '../header'
import Footer from '../footer'

const PageLayout = (props) => {
    return (
        <div >
            <Header/>
            {/* <Notifications/> */}
            {props.children}
            <Footer/>
        </div>
    )
}

export default PageLayout;