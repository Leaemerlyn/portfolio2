import { ProjectDetailsIntro } from "./ProjectDetailsIntro";
import { Button } from "../Button";


export function BunBun(){
    return(
        <>
        <div className='projectPageContainer'>
            <ProjectDetailsIntro title='BunBun' />
            <hr/>
            <h1>VIEW THE WEBSITE</h1>
            <Button href={'https://leaemerlyn.github.io/pui-lab/homework_6/index.html'} buttonText = 'View Bun Bun Shop'/>
            <hr/>

            <h1>Reflection</h1>
            <p>change this</p>
        </div>
        </>

    )
}