import{ Link, useParams} from 'react-router-dom';
import { RecentProjects} from './RecentProjects'
import { WindStax } from './ProjectPages/WindStax';
import { MedBuddy } from './ProjectPages/MedBuddy';
import { GroupShopping } from './ProjectPages/GroupShopping';
import { PublicArt } from './ProjectPages/PublicArt';
import { FirstPortfolio } from './ProjectPages/FirstPortfolio';
import { SecondPortfolio } from './ProjectPages/SecondPortfolio';
import { BunBun } from './ProjectPages/BunBun';
import { Jpm } from './ProjectPages/Jpm.js';
import { Kiavi } from './ProjectPages/Kiavi.js';
import { RecipeBook } from './ProjectPages/RecipeBook.js';
import { PennResources } from './ProjectPages/PennResources.js';
import { PageNumbering } from './ProjectPages/PageNumbering.js';

export function ProjectDetails(){
    let {project} = useParams();
    switch(project){
        case 'PageNumbering':
            return (<PageNumbering/>)
        case 'MedBuddy':
            return (<MedBuddy/>)

        case 'WindStax':
            return(<WindStax/>)

        case 'GroupShopping':
            return(<GroupShopping/>)

        case 'PublicArt' :
            return(<PublicArt />)

        case 'firstPortfolio' :
            return(<FirstPortfolio/>)

        case 'secondPortfolio' :
            return(<SecondPortfolio />)

        case 'BunBun' :
            return(<BunBun />)

        case 'Jpm' :
            return(<Jpm/>)

        case 'Kiavi' :
            return(<Kiavi/>)

        case 'RecipeBook' :
            return(<RecipeBook/>)

        case 'PennResources' :
            return(<PennResources/>)

        default:
            return (<RecentProjects/>)
    }
}