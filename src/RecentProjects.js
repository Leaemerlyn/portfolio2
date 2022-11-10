import './RecentProjects.css';
import {NameBanner} from './NameBanner';
import {Button} from './Button'
import pdf from './Lea_Emerlyn_Resume.pdf';

export function RecentProjects() {
    return(
        <>
            <div className = 'row'>
                <div className = 'main-width col-lg-9'>
                    <NameBanner />
                    <div className = 'row mx-0 button-collection'>
                        <Button href={pdf} buttonText='Resume'/>
                        <Button href={'https://www.linkedin.com/in/lea-emerlyn-7b8170168/'} buttonText = 'LinkedIn'/>
                        <Button href={'mailTo:leaodovia@gmail.com'} buttonText = 'Email'/>
                    </div>

                </div>
                <div className="col-lg-3">
                <img src ={require('./decoration.png')} id= 'decoration'/>
                </div>
            </div>
        </>
    )
}