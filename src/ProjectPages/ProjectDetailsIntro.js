import {ProjectDetailsData} from './ProjectDetailsData';
import './ProjectDetailsIntro.css';
import './ProjectPage.css';

export function ProjectDetailsIntro(props){
    let data = ProjectDetailsData[props.title];
    return(
        <>
            <img className='hero' src={data.url}/>
            <div className='row description'>
                <div className = 'col-3'>
                    <p className ='descriptionHeading'>ROLE</p>
                    <p className='descriptionDetails'>{data.role}</p>
                </div>
                <div className = 'col-3'>
                    <p className='descriptionHeading'>TIME</p> 
                    <p className='descriptionDetails'>{data.time}</p>
                </div>
                <div className = 'col-3'>
                    <p className='descriptionHeading'>TEAM</p>
                    <p className='descriptionDetails'>{data.team}</p>
                </div>
                <div className = 'col-3'>
                    <p className='descriptionHeading'>TOOLS</p>
                    <p className='descriptionDetails'>{data.tools}</p>
                </div>
            </div>

            <div className='row'>
                <h1>OVERVIEW</h1>
                <p>{data.overview}</p>
            </div>
        </>
    )
}