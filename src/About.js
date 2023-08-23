import './About.css';
import { Button } from './Button';
import gigWorkPdf from './Assets/cscw_2021_gigwork.pdf';

export function About(){
    return(
        <>
        <div className ='row firstRow'>
            <div className = 'col-md-5'>
                <div className='profilePicContainer'>
                    <img src={require('./Assets/profilePic.jpg')} id='profilePic'/>
                </div>
            </div>
            <div className = 'col-md-7 intro-text'>
                <p id='hello-greeting'>Hello, I'm Lea!</p>
                <p>I am a software engineer at J.P. Morgan creating full stack applications. I primarily work with JavaScript, Python, Java, and TypeScript. Previously, I worked as a UX Designer for J.P. Morgan, PlayStation, PNC Bank and Cardinal Health.<br/><br/></p>
                <p>Reach out: leaodovia@gmail.com</p>
            </div>
        </div>            
        <hr></hr>
        <div className='row'>
            <div className ='col-6 about-columns-padding'>
                <p className ='about-headings'>Skills</p>
                <p className = 'about-columns'>
                    <span className ='about-heading2'>Design</span><br/>
                    Figma<br/> 
                    Sketch<br/>
                    Adobe CC <br/> 
                    Fusion 360<br/>
                    UX Research
                </p>
            </div>
            <div className='col-6 about-columns-padding'>
                <p className = 'about-headings'>&nbsp;</p>
                <p className ='about-columns'>
                    <span className ='about-heading2'>Programming</span><br/>
                    Python<br/>
                    JavaScript<br/>
                    TypeScript<br/>
                    Java <br/>
                    HTML/CSS<br/>
                    React<br/>
                    C
                </p>
            </div>
        </div>
        <hr></hr>
        <div className = 'row'>
            <div className='col-6 about-columns-padding'>
                <p className = 'about-headings'>Education</p>
                <p className = 'about-columns'>
                    <span className='about-heading2'>Master's</span> <br/>
                    University of Pennsylvania<br/>
                    Computer Science<br/><br/>
                    Expected Grduation: 2024<br/>
                </p>
            </div>
            <div className='col-6 about-columns-padding'>
                <p className = 'about-headings'>&nbsp;</p>
                <p>
                    <span className ='about-heading2'>Bachelor's</span><br/>
                    Carnegie Mellon University<br/>
                    Human-Computer Interaction<br/>
                    Business Administration <br/>
                    Media Design<br/><br/>

                    Graduated: 2022 
                </p>
            </div>
        </div>
        <hr></hr>
        <div className ='row'>
            <div className='col-12 about-columns-padding'>
                <p className ='about-headings'>Other Stuff About Me</p>
                <p>When I was in undergrad, I worked with my professor and a PhD student on a research paper about challenges of gig workers during the pandemic.</p>
                <Button href={gigWorkPdf} buttonText='View CSCW Paper'/>
            </div>

        </div>
        </>
    )
}