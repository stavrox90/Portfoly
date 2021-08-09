import React, { useState } from 'react'
import AboutMeCard from '../components/cards/AboutMeCard'

export default function AboutPage({ children }) {
    return (
        <>
            <AboutMeCard />
            {children}
        </>
    )
}