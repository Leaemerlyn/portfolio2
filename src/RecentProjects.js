import './RecentProjects.css';
import {NameBanner} from './NameBanner';
import {Button} from './Button'
import pdf from './Assets/Lea_Emerlyn_Resume.pdf';
import { ProjectCard } from './ProjectCard';

export function RecentProjects() {

    return(
        <>
            <div className = 'row'>
                <div className = 'main-horizontal-padding main-vertical-padding col-lg-9'>
                    <div className="name-banner-container">
                    <NameBanner />
                    </div>
                    <div className = 'row mx-0 button-collection'>
                        <Button href={pdf} buttonText='Resume'/>
                        <Button href={'https://www.linkedin.com/in/lea-emerlyn-7b8170168/'} buttonText = 'LinkedIn'/>
                        <Button href={'mailTo:leaemerlyn@gmail.com'} buttonText = 'Email'/>
                    </div>

                </div>
                <div className="col-lg-3">
                <img src ={require('./Assets/decoration.png')} id= 'decoration'/>
                </div>
            </div>

            <div className ='row'>
                <div className = 'col-lg-12 main-horizontal-padding'>
                    <ProjectCard title="PageNumbering"/>
                    <ProjectCard title="PennResources"/>
                    <ProjectCard title="RecipeBook"/>
                    <ProjectCard title= 'Jpm' />
                    <ProjectCard title= 'Kiavi' />
                </div>
            </div>
        </>
    )
}

