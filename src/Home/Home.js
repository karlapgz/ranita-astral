import React from 'react';

import Mes from '../Mes/Mes'

import './Home.css'

const Home = () => {
    return (
        <main>
            <section className='content'>
                <h1>Ranita astral ✨</h1>
                <p className='p-content'>Elige tu mes de nacimiento para conocer tu ranita <span>astral etérea divina cósmica.</span></p>
                <Mes />
            </section>
        </main>
    );
};

export default Home;