import{ Link, useParams} from 'react-router-dom';
import { WindStax } from './ProjectPages/WindStax';
import { MedBuddy } from './ProjectPages/MedBuddy';

export function ProjectDetails(){
    let {project} = useParams();
    switch(project){
        case 'MedBuddy':
        default:
            return (<MedBuddy/>)

        
        case 'WindStax':
            return(<WindStax/>)
    }
}