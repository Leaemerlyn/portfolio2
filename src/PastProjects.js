import { ProjectCard } from "./ProjectCard";
import './PastProjects.css'

export function PastProjects(){
    return(
        <>
        <p id = 'past-projects-header'>These are projects that I have worked on in the past.</p>
        <div className = 'col-lg-12 main-horizontal-padding'>
            <ProjectCard title= 'MedBuddy'/>
            <ProjectCard title= 'WindStax' />
            <ProjectCard title= 'GroupShopping' />
            <ProjectCard title='firstPortfolio'/>
            <ProjectCard title='secondPortfolio'/>
            <ProjectCard title='bunbun'/>
        </div>
        </>
    )
}