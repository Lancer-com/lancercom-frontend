import React from 'react'
import {  Footer, Header } from '../../../../components'
import { HeroBackground, HiwBackground, Services, ShBackground, Team as TeamSection } from './components'

function body() {
    return (
        <div>
            <Header />
            <HeroBackground />
            <ShBackground />
            <HiwBackground />
            <Services />
            <TeamSection />
            <Footer />
        </div>
    )
}

export default body
