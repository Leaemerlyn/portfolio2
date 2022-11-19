import{ Link, useParams} from 'react-router-dom';
import { WindStax } from './ProjectPages/WindStax';
import { MedBuddy } from './ProjectPages/MedBuddy';
import { GroupShopping } from './ProjectPages/GroupShopping';
import { PublicArt } from './ProjectPages/PublicArt';

export function ProjectDetails(){
    let {project} = useParams();
    switch(project){
        case 'MedBuddy':
        default:
            return (<MedBuddy/>)

        
        case 'WindStax':
            return(<WindStax/>)

        case 'GroupShopping':
            return(<GroupShopping/>)

        case 'PublicArt' :
            return(<PublicArt />)
    }
}