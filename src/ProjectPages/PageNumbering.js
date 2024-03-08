import { ProjectDetailsIntro } from "./ProjectDetailsIntro";
import { Button } from "../Button";

export function PageNumbering(){
    return(
        <>
        <div className='projectPageContainer'>
            <ProjectDetailsIntro title='PageNumbering'/>
            <hr/>

            <h1>Take a look at the plugin code</h1>
            <Button href="https://github.com/Leaemerlyn/pageNumbering" buttonText='Github'/> 

            <hr/>
            <iframe title='figma-embed'width="100%" height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDQVEYPVkrSRdVLu8JP7jzK%2FPage-Numbering-Instructions%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DirhUxfdIOe4ldziX-1" allowFullScreen></iframe>

            <hr/>

            <h1>How to use</h1>
            <p>Create a page number component</p>
            <img className='img-fluid img-responsive' src={require('./pageNumbering/step1.png')} alt='step1'/>

            <br/>

            <p>Add instances of the master component to slides</p>
            <img className='img-fluid img-responsive' src={require('./pageNumbering/step2.png')} alt='step2'/>

            <br/>

            <p>Select master component and click Generate on the plugin</p>

            <img className='img-fluid img-responsive' src={require('./pageNumbering/step3.png')} alt='step3'/>

            <p>Slides are numbered in order. The order goes from left to right then top to bottom</p>

            <img className='img-fluid img-responsive' src={require('./pageNumbering/step4.png')} alt='step4'/>
            <hr/>

            <h1>Benefits</h1>
            <ul>
                <li>Designers can customize the look of their page numbers</li>
                <li>When slides are rearranged, they can generate page numbers with one click</li>
                <li>Designers can choose what page number to start at</li>
            </ul>

        </div>
        </>

    )

}