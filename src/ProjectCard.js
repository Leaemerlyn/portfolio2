import {ProjectCardData} from './ProjectCardData';
import './ProjectCard.css';

export function ProjectCard(props){
    let data = ProjectCardData[props.title];
    return(
        <div className = 'myCard'>
            <div className = 'cardInfo'>
                <h1 className = 'cardTitle'>{props.title}</h1>
                <p className = 'cardDescription'>{data.description}</p>
                <div className = 'pills'>
                    {data.pills.map((element)=>(<div key = {element} className = 'pill'><p>{element}</p></div>))}
                </div>
            </div>
            <div className = 'coverImage'>
                <img src = {data.coverImage} alt =''/>
            </div>
        </div>
    )
}
