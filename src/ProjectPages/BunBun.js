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
            <p>This project was a huge challenge since I was learning Javascript for the first time. I also was not familiar with session storage. Some improvements that I would make next time would be the ability to quick add from the general products page and the ability to save an item for later.</p>
        </div>
        </>

    )
}