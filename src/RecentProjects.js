import './RecentProjects.css';
import {NameBanner} from './NameBanner';

export function RecentProjects() {
    return(
        <>
            <div className = 'row'>
                <div className = 'main-width col-lg-9'>
                    <NameBanner />

                </div>
                <div className="col-lg-3">
                <img src ={require('./decoration.png')} id= 'decoration'/>
                </div>
            </div>
        </>
    )
}