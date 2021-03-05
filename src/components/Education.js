import React from 'react'

function Education(props) {


    return (
        <section className={props.classes + ' education-section sections'} style={{color: 'black'}}>
        <div className='row justify-content-start'>
            <div className='col col-6'>
                <h2> Education</h2>
                <p style={{textAlign:'left'}}>
                Studying technology since 2012.
                <br/>
                <br/>
                At the age of 15, I took one of the best choices of my life, to enter the Federal Center 
                for Technological Education of Rio de Janeiro in a technical course in computer science. 
                The size of the place and the variety of experiences and new people I met during my high school 
                and technical studies at the Federal Center guided several of my thoughts and my life choice to 
                work with technology and programming.
                 </p>
            </div>
        </div>
    </section>
    );
}

export default Education;