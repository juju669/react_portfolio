import React from 'react';
import julianHeadshot from '../../assets/img/julian-headshot.jpg'

function About() {

    return (
    <div className="container">
        <div classnName="row">
            <div className="col">
                <img src={julianHeadshot} style={{height: '300px'}}></img>
            </div>
            <div className="col">
                <p>
                I'm a recent gradutate at New Jersey City University. 
                I pursued a Bachelor of Science degree as a dual major in Criminal Justice and Professional Security Studies. 
                In the security studies program my focuses were on national, corporate and information assurance/cyber security. 
                My end goal is to specialize in forensic computing. Mitigating techniques to gather and preserve evidence from a particular computing device in a way that is suitable for presentation in a court of law. 
                I'm seeking to gain practical experience that will lead to a career path that drives continuous innovation, improvement, and creativity.
                </p>
            </div>
        </div>
    </div>
    )
};
export default About;


