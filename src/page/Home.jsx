import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Section1 from '../component/home/Section1'
import Section2 from '../component/home/Section2'
import Section3 from '../component/home/Section3'
import Section4 from '../component/home/Section4'
import Section5 from '../component/home/Section5'
import Footer from '../component/home/Footer'

function Home() {
    return (
        <div className=''>
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </div>
    )
}

export default Home
