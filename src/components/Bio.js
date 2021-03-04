import React from 'react'

function Bio(props) {


    return (
    <section className={props.classes + ' bio-section'} style={{color: 'black'}}>
        <h2> BIO</h2>
        <p>My Name is Mateus Villas Boas</p>
    </section>
    );
}

export default Bio;