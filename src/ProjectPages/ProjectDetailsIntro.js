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
                    <p>Role</p>
                    <p className='descriptionDetails'>{data.role}</p>
                </div>
                <div className = 'col-3'>
                    <p>Time</p> 
                    <p className='descriptionDetails'>{data.time}</p>
                </div>
                <div className = 'col-3'>
                    <p>Team</p>
                    <p className='descriptionDetails'>{data.team}</p>
                </div>
                <div className = 'col-3'>
                    <p>Tools</p>
                    <p className='descriptionDetails'>{data.tools}</p>
                </div>
            </div>

            <div className='row'>
                <h1>Overview</h1>
                <p>{data.overview}</p>
            </div>
        </>
    )
}