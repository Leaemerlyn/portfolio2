import './About.css';

export function About(){
    return(
        <>
        <div className ='row firstRow'>
            <div className = 'col-md-5'>
                <div className='profilePicContainer'>
                    <img src={require('./Rectangle 29.jpeg')} id='profilePic'/>
                </div>
            </div>
            <div className = 'col-md-7 intro-text'>
                <p id='hello-greeting'>Hello, I'm Lea!</p>
                <p>Currently, I am a designer at JP Morgan Chase. Previously, I worked as a product</p>
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
                    Adobe CC <br/> 
                    Fusion 360
                </p>
            </div>
            <div className='col-6 about-columns-padding'>
                <p className = 'about-headings'>&nbsp;</p>
                <p className ='about-columns'>
                    <span className ='about-heading2'>Programming</span><br/>
                    Python<br/>
                    JavaScript<br/>
                    Java 
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
                    Expected Grduation: 2024<br/>
                </p>
            </div>
            <div className='col-6 about-columns-padding'>
                <p className = 'about-headings'>&nbsp;</p>
                <p>
                    <span className ='about-heading2'>Bachelor's</span><br/>
                    Carnegie Mellon University<br/>
                </p>
            </div>
        </div>
        <hr></hr>
        <div className ='row'>
            <div className='col-12 about-columns-padding'>
                <p className ='about-headings'>Other Stuff About Me</p>
                <p> Hello from the other side</p>
            </div>

        </div>
        </>
    )
}