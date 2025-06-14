import React from 'react';
import Navber from '../Components/Navber';
import AboutBanner from '../Components/AboutBanner';
import TechStack from '../Components/TechStack';


const AboutPages = () => {
    return (
        <div className=''>
            <Navber></Navber>
            <AboutBanner></AboutBanner>
            <TechStack />
            
            
            
        </div>
    );
};

export default AboutPages;