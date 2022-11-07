import './RecentProjects.css';
import {NameBanner} from './NameBanner';

export function RecentProjects() {
    return(
        <>
            <img src ={require('./decoration.png')} id= 'decoration'/>
            <div className = 'main-width'>
                <NameBanner />

            </div>
        </>
    )
}