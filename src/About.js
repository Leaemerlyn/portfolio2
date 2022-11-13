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
            <div className ='col-md-6'>
                <p>hi</p>
            </div>
            <div className='col-md-6'>
                <p>hi</p>
            </div>
        </div>
        </>
    )
}