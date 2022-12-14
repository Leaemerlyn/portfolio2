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
                <p>Currently, I am a designer at JP Morgan Chase. Previously, I worked as a product designer at Sony PlayStation, PNC and Cardinal Health. <br/><br/>
                What I'm Learning at the Moment: Unity, C#, and C.</p>
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
                    Java <br/>
                    HTML/CSS<br/>
                    Boostrap<br/>
                    React<br/>
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