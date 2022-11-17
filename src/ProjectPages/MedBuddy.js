import {ProjectDetailsIntro} from './ProjectDetailsIntro';

export function MedBuddy(){
    return(
        <>
        <ProjectDetailsIntro title='MedBuddy'/>
        <hr/>
        <h1>Prompt</h1>
        <p>HMW leverage IoT to meaningfully enhance community based aid and emergency response?</p>

        <h1>Solution</h1>
        <div className="embed-responsive embed-responsive-16by9">
        <iframe width="100%" src="https://www.youtube.com/embed/-ZTRYeLA_9w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <hr/>

        <h1>Understanding the Problem Space</h1>

        <h2>Concept Mapping</h2>
        <p>Before diving into brainstorming, our group needed to find out what is community-based aid and emergency response. After our initial research, we consolidated our understanding of the problem space.</p>

        <div className='callout'>
            <p>What is community base aid</p>
            <p>Communities helping each other through exchanging resources and services in an effort to elevate an individuals quality of life and to prepare for and respond to community needs or emergencies.</p>
        </div>

        <p>To create the concept map, we brainstormed words that thought were relevant to this space. Then we categorized them into nouns, verbs, and adjectives. This helps us see what it is, what actions people take, and how we can describe it.</p>
        <img className='img-fluid img-responsive' src={require('./medBuddy/conceptMap.png')}/>

        <p>After some initial research, brainstorming, and discussion, we created two concept maps to capture our thoughts - one on mutual aid in the community where community members bond together to address various needs through collective action.</p>

        <p>And the other is centered on proactive approaches to aid emergency responses, where community members collect resources and mobilize action in response to a possible emergency.</p>

        <img className='img-fluid img-responsive' src={require('./medBuddy/conceptMapWords.png')}/>

        <p>After some initial research, brainstorming, and discussion, we created two concept maps to capture our thoughts - one on mutual aid in the community where community members bond together to address various needs through collective action.</p>

        <hr/>

        <h1>Exploring Solutions</h1>
        <h2>Crazy 12 Ideas</h2>
        <p>Instead of just crazy 8 ideas, our group got creative and came up with 12.</p>
        <img className='img-fluid img-responsive' src={require('./medBuddy/crazy12.png')}/>

        <h2>Feedback Session</h2>
        <p>After getting feedback on these 12 ideas, we whittled it down to 4 that were the most promising. Two on proactive work and two on emergency reactions.</p>

        <img className='img-fluid img-responsive' src={require('./medBuddy/feedback1.png')}/>

        <h2>Storyboard</h2>
        <p>Since scenarios 7 and 8 are similar, we combined the two ideas and created 3 storyboards.</p>
        <div className='row'>
            <div className='col-4'>
                <p>1. <br/> Our first storyboard was based around the idea of helping elderly individuals by reminding them to take their medications with an IoT dispenser.</p>
            </div>
            <div className='col-4'>
                <p>2. <br/>Our second storyboard was climate change-related with a focus on community and the idea of “rain garden buddies” that utilized an application for maintaining those rain gardens.</p>
            </div>
            <div className='col-4'>
                <p>3. <br/>And our third storyboard centered around community policing where the community would be called on to respond to situations where a police response wasn’t necessary, such as a mental health crisis.</p>
            </div>
        </div>

        <img className='img-fluid img-responsive' src={require('./medBuddy/storyboards.png')}/>

        <h2>Storyboard Feedback</h2>
        <img className='img-fluid img-responsive' src={require('./medBuddy/storyBoardFeedback.png')}/>
        <p>We received the most positive response to the medication dispenser idea because it was strongly rooted in the community - the medication dispenser would pair elderly individuals with ‘medication buddies’ and they would remind each other to take their medicine. For this project, we settled on this scenario.</p>

        <hr/>

        <h1>Finalizing Solution</h1>
        <p>Using the idea for scenario 1, we created an overview of our video storyboard in order to map out the key scenes. The overview gives us an idea of how we want to structure the video as well as allows us to get general feedback.</p>
        </>
    )
}