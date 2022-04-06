import React from 'react';

import data from '../data.json'
import imageData from './dataImages.js'

import './Image.css'

const Image = ({value}) => {
    return (
        <section className='info-image'>
            <img src={imageData[value]} alt={data.ranitas[value].name}/>
            <div className='info'>
                <h2>{data.ranitas[value].name}</h2>
                <p className='par-image'>{data.ranitas[value].desc}</p>
            </div>
        </section>
    );
};

export default Image;