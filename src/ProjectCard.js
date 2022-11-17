import {ProjectCardData} from './ProjectCardData';
import './ProjectCard.css';
import { NavLink } from 'react-router-dom';
import { backToTop } from './utility';

export function ProjectCard(props){
    let data = ProjectCardData[props.title];
    return(
        <NavLink to={'../Projects/' + props.title} className ='myCardContainer' onClick={backToTop}>
        <div className ='border'></div>
        <div className = 'myCard'>
            <div className = 'cardInfo'>
                <p className = 'cardTitle'>{data.projectName}</p>
                <p className = 'cardDescription'>{data.description}</p>
                <div className = 'pills'>
                    {data.pills.map((element)=>(<div key = {element} className = 'pill'><p>{element}</p></div>))}
                </div>
            </div>
            <div className = 'coverImage'>
                <img src = {data.coverImage} alt =''/>
            </div>
        </div>

        </NavLink>
    )
}
