import { ProjectDetailsIntro } from "./ProjectDetailsIntro"

export function WindStax(){
    return(
        <>
        <div className='projectPageContainer'>
            <ProjectDetailsIntro title='WindStax'/>
            <hr/>

            <h1>DESIGN BRIEF</h1>
            <p>After I set up my wind turbines, I want to make sure my energy use and production are managed, and what environmental impact it has, but I don’t have easy access to my turbine systems or battery.</p>

            <p>Help me control my energy usage, conserve my money, and reduce my carbon footprint, so that I can get value from my energy investment.</p>
            <hr/>

            <h1>SOLUTION</h1>

            <div className="row">
                <div className="col-7"> 
                    <iframe title='figma-embed'width="100%" height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fxte1rf10mSllvG3AYH7CnP%2FIxDS2-Group-B5-(Copy)%3Fnode-id%3D184%253A1578%26t%3D7HcyEeHKS7DnAqqh-1" allowFullScreen></iframe>
                </div>

                <div className="col-5">
                    <iframe title="figma-embed2" width="100%"height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fxte1rf10mSllvG3AYH7CnP%2FIxDS2-Group-B5-(Copy)%3Fpage-id%3D184%253A1578%26node-id%3D366%253A2407%26viewport%3D331%252C85%252C0.1%26scaling%3Dscale-down%26starting-point-node-id%3D366%253A2407" allowFullScreen></iframe>
                </div>
            </div>

            <hr/>

            <h1>UNDERSTANDING DOMAIN</h1>
            <h2>Domain and Company</h2>
            <p>We started off the process by doing secondary research on Windstax and its goals. Some of the key takeaways from the research are:</p>

            <img className='img-fluid img-responsive' src={require('./windstax/windstaxDomain.png')}/>

            <h2>Stakeholder Map</h2>
            <p>We then proceeded to create a stakeholder map in order to help us visualize the relationship between groups of people, This also allowed us to identify any opportunities for us to innovate.</p>

            <img className='img-fluid img-responsive' src={require('./windstax/windstaxStakeholder.png')}/>
            <p>From this stakeholder map, we realized there were not many resources for consumers after they bought the product. Instead of handing off the product to consumers, we think Windstax can enhance the customer’s experience by giving them support after their purchase.</p>

            <img className='img-fluid img-responsive' src={require('./windstax/consumerGoal.png')}/>

            <h2>Getting Feedback</h2>
            <p>We presented our research and initial ideas for Windstax to our peers. We wanted to get others’ perspectives on other possibilities. Some key takeaways were:</p>

            <img className='img-fluid img-responsive' src={require('./windstax/feedback1.png')}/>

            <hr/>

            <h1>SCOPING DOWN</h1>
            <h2>Tone and Voice</h2>
            <p>Before we jumped into designing concrete screens, we needed to first settle down on the tone and voice of our app in order to establish consistent branding and fit the needs of our consumers.</p>

            <img className='img-fluid img-responsive' src={require('./windstax/toneVoice.png')}/>

            <h2>Goals and Flows</h2>
            <p>Our next task is to organize the information given to the user. To do so, we started from identifying user goals, and then described the steps they would take to achieve that goal in our app.</p>

            <img className='img-fluid img-responsive' src={require('./windstax/goalFlow.png')}/>

            <h2>Persona</h2>
            <p>Creating a persona like Oscar help drive the story we want to pitch. It also helped us focus on the design ideas we want to share with stakeholders, specifically exploring the interactions that will occur through the lens of the persona we created.</p>

            <img className='img-fluid img-responsive' src={require('./windstax/persona.png')}/>

            <hr/>

            <h1>LOW FIDELITY PROTOTYPE</h1>
            <img className='img-fluid img-responsive' src={require('./windstax/lo-fiOverview.png')}/>
            <img className='img-fluid img-responsive' src={require('./windstax/lo-fiScreen.png')}/>

            <p>Based on the goals and flows of our users, our first prototype focuses on information hierarchy. Prioritizing how certain information can be more accessible over other, user goals can be achieved within a click or two away. We organized pages into home page, turbine view, data page, and controls.</p><br/>

            <h2>Low Fidelity Critique</h2>
            <p>We wanted to get feedback for the general concept of the app and see if there are other things that we might want to take into consideration for the next iteration. The three key feedbacks were:</p>

            <img className='img-fluid img-responsive' src={require('./windstax/lo-fiCrit.png')}/>
            <hr/>

            <h1>MID FIDELITY PROTOTYPE</h1>
            <img className='img-fluid img-responsive' src={require('./windstax/mid-fiOverview.png')}/>

            <p>How we addressed the feedback from Low-Fidelity:</p>
            <img className='img-fluid img-responsive' src={require('./windstax/mid-fiScreen.png')}/>

            <h2>Micro Interactions</h2>
            <p>We looked into how to design the micro-interactions. Some questions to consider were: should a tap bring you to another page or a pop-up modal? How can we create a confirmation page? Should there be a button or a toggle?</p>
            <img className='img-fluid img-responsive' src={require('./windstax/microinteractions.png')}/>

            <h2>Mid Fidelity Critique</h2>
            <p>Our critique centered around refining our prototype and considering the phrasing and context of several of our design elements.<br/><br/>

                An example included adding a Y-axis to the graph to allow users to understand the unit of power generation.<br/><br/>

                For clarity and scannability, someone also advised us to streamline the phrasing we used on some screens, which read as almost too conversational. This ensures the data users need is glanceable, especially in emergencies.
            </p>
            <hr/>

            <h1>HIGH FIDELITY PROTOTYPE</h1>
            <img className='img-fluid img-responsive' src={require('./windstax/high-fiOverview.png')}/>

            <hr/>

            <h1>REFLECTION</h1>
            <p>Throughout this project, our team considered how best to position WindStax’s product-centric business model to deliver a new service, one that provides real value to both customers and WindStax. Envisioning this new service challenged us to take on a unique perspective we hadn’t before, by carefully examining the relationship between stakeholders.<br/><br/>

            We were also reminded to leverage the capabilities of a mobile app, and to design with intention: what features are unique to the mobile app platform, and how can we best connect those to a service offered through WindStax? This esssential question helped ground us in the reality of WindStax customers and taught us to take advantage of constraints, rather than design for design’s sake. <br/> <br/>

            As a team, we pushed ourselves to improve on our ideas and prototypes through effective communication. At team meetings, input was heard and respected. During class critiques, our team members worked cohesively, fielding questions, accepting comments, or taking notes. Subsequently, our designs matured as we each learned from critiques, and we improved our data visualization skills. This required a careful balance between offering contextualized data yet retaining readability and scannability.<br/><br/>

            In total, this project was a meaningful exercise in both design, critique, and teamwork, as each of us invested in those skills to improve our critical thinking and create a mobile app service we’re proud of.</p>


        </div>
        </>
    )
}