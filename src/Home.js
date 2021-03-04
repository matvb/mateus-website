import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(props) {
    const [isBackgroundClass, setBackgroundClass] = useState('main-background');


    const changeBackground = (backgroundClass) => {
        setBackgroundClass(backgroundClass);
    }


    return (
    <header className={'App-header ' + isBackgroundClass}>
        <h1 className="title-name" onClick={() => changeBackground('main-background')}>Mateus Villas Boas</h1>
        <div className='row'>        
            <div className='col'>
                <div className='btn' onClick={() => changeBackground('bio-background')}>
                    Bio
                </div>
            </div>
            <div className='col'>
                <div className='btn' onClick={() => changeBackground('education-background')}>
                    Education
                </div>
            </div>
            <div className='col'>
                <div className='btn'>
                    Experience
                </div>
            </div>
        </div>
    </header>
    );
}

export default Home;