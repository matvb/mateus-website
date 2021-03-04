import React, { useState } from 'react'
import Bio from './components/Bio';

function Home(props) {
    const [isBackgroundClass, setBackgroundClass] = useState('main-background');
    const [isBioActive, setBioActive] = useState(false);
    const [isEducationActive, setEducationActive] = useState(false);


    const clickTitle = () => {
        setBackgroundClass('main-background');
        setBioActive(false);
        setEducationActive(false);
    }

    const clickBio = () => {
        setBackgroundClass('bio-background');
        setBioActive(true);
        setEducationActive(false);
    }

    const clickEducation = () => {
        setBackgroundClass('education-background');
        setBioActive(false);
        setEducationActive(true);
    }


    return (
    <header className={'App-header ' + isBackgroundClass}>
        <div className="main-menu">
            <h1 className="title-name" onClick={() => clickTitle() }>Mateus Villas Boas</h1>
            <div className='row'>        
                <div className='col'>
                    <div className='btn' onClick={() => clickBio()}>
                        Bio
                    </div>
                </div>
                <div className='col'>
                    <div className='btn' onClick={() => clickEducation()}>
                        Education
                    </div>
                </div>
                <div className='col'>
                    <div className='btn'>
                        Experience
                    </div>
                </div>
            </div>
        </div>
        <div className='sections'>
            <Bio classes={isBioActive ? 'active' : 'deactive'} />

        </div>
    </header>
    );
}

export default Home;