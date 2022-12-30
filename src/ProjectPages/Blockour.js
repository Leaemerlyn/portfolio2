import { ProjectDetailsIntro } from "./ProjectDetailsIntro"

export function Blockour(){
    return(
        <>
            <ProjectDetailsIntro title='Blockour'/>
            <hr/>

            <h1>Try the Game</h1>
            <iframe mozallowfullscreen="true" allow="autoplay; fullscreen" src={window.location.origin + "/BlockourBuild/index.html"} style={{border: "0px #000000 none", aspectRatio: "16/9"}} name="Blockour" scrolling="no" msallowfullscreen="true" allowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true" frameborder="0" marginHeight="px" marginWidth="320px" width="100%"></iframe>
        </>
    )
}