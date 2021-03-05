import React, { useState } from 'react'
import Bio from './components/Bio';
import Education from './components/Education';
import Experience from './components/Experience';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

function Home(props) {
    const [isBackgroundClass, setBackgroundClass] = useState('main-background');
    const [isBioActive, setBioActive] = useState(false);
    const [isEducationActive, setEducationActive] = useState(false);
    const [isExperienceActive, setExperienceActive] = useState(false);


    const setAllFalse = () => {
        setBioActive(false);
        setEducationActive(false);
        setExperienceActive(false);
    }

    const clickTitle = () => {
        setBackgroundClass('main-background');
        setAllFalse();
    }

    const clickBio = () => {
        setBackgroundClass('bio-background');
        setAllFalse();
        setBioActive(true);
    }

    const clickEducation = () => {
        setBackgroundClass('education-background');
        setAllFalse();
        setEducationActive(true);
    }

    const clickExperience = () => {
        setBackgroundClass('education-background');
        setAllFalse();
        setExperienceActive(true);
    }


    return (
    <div className='container'>
        <header className={'App-header ' + isBackgroundClass}>
            <div className="main-menu">
                <h1 className="title-name" style={{position:'relative'}} onClick={() => clickTitle() }>Mateus Villas Boas</h1>
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
                        <Button variant="contained" color="primary" onClick={() => clickExperience()}>
                            Experience
                        </Button>
                    </div>
                </div>
            </div>
        </header>
        <div className='section-containers' style={{margin: 'auto', position: 'relative'}}>
            <Bio classes={isBioActive ? 'active' : 'deactive'} />   
            <Education classes={isEducationActive ? 'active' : 'deactive'} /> 
            <Experience classes={isExperienceActive ? 'active' : 'deactive'} /> 
        </div>
     </div>
    );
}

export default Home;