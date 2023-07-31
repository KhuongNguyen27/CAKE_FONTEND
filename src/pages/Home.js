import React from 'react';
import LayoutMaster from '../layouts/LayoutMaster';
import Slider from '../components/Home/Slider';
import Instagram from '../components/Home/Instagram';
import Newsletter from '../components/Home/Newsletter';
import Contents from '../components/Home/Contents';

function Home(props) {
    return (
        <LayoutMaster>
         <Slider/>
         <Contents/>
        <Instagram/>
        <Newsletter/>
        </LayoutMaster>
    );
}

export default Home;