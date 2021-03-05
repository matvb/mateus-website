import React, { useState } from 'react'
import Bio from './components/Bio';
import Education from './components/Education';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

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
    <div>
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
                        <Button variant="contained" color="primary" onClick={() => clickEducation()}>
                            Experience
                        </Button>
                    </div>
                </div>
            </div>
        </header>
        <div className='sections'>
            <div className='row justify-content-end'>
                <Slide direction="right" timeout={1000} in={isEducationActive}   >
                    <h1 style={{color: 'black'}}> UFRJ </h1>
                </Slide>
                <Slide direction="left" timeout={1000} in={isBioActive}   >
                    <div className='col-6'>
                        <Bio classes={'active'} />

                    </div>
                </Slide>
            </div>
        

        </div>
     </div>
    );
}

export default Home;