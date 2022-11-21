import { ProjectDetailsIntro } from "./ProjectDetailsIntro";


export function PublicArt(){
    return(
        <>
        <div className='projectPageContainer'>
            <ProjectDetailsIntro title='PublicArt' />
            <hr/>
            <h1>PROBLEM SPACE</h1>
            <p>We know that public art increases the livability of a city by giving the citizens a sense of identity and a landmark where they can feel proud of living there. However, in Pittsburgh, public art does not play a strong role in people’s lives. We want to figure out a way where we can encourage people to feel more connected with the city through public art.</p>

            <hr/>

            <h1>SOLUTION</h1>
            <p>We created an interactive public art viewing experience. Users can:</p>
            <div className='row'>
                <div className='col-md-4'><p>1. <br/> Learn about the art in an interactive way using AR</p></div>
                <div className='col-md-4'><p>2. <br/> Explore nearby artwork in Pittsburgh</p></div>
                <div className='col-md-4'><p>3. <br/> Express feelings towards the art and sharing with the public or the artist</p></div>
            </div>

            <div className="row">
                <div className="col-md-5"> 
                    <iframe title='figma-embed'width="100%" height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FN4VnfEXR3wjVLXduQvp1G9%2FModel-UCRE%3Fnode-id%3D648%253A1558%26viewport%3D582%252C305%252C0.14864154160022736%26scaling%3Dcontain" allowFullScreen></iframe>
                </div>

                <div className="col-md-7">
                    <iframe title="figma-embed2" width="100%"height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FN4VnfEXR3wjVLXduQvp1G9%2FModel-UCRE%3Fnode-id%3D648%253A3" allowFullScreen></iframe>
                </div>
            </div>

            <hr/>

            <h1>UNDERSTANDING THE PROBLEM</h1>
            <p>From previous research, we know that a primary reason for installing art in a city is that it increases the livability of a space. People can feel a sense of connectedness to the community as well as the city. It gives the city a landmark and people feel proud of living there.</p><br/>

            <h2>Initial Research</h2>
            <p>Before our team got together as a group, each of us tried to understand the current state of public art using data from previous research. We watched recordings of interviews as well as done experiential research. From these, we created stakeholder maps, user journey maps, Usability Finding Templates (UFTs) and Data Visualizations.</p>

            <img className='img-fluid img-responsive' src={require('./Public/journeyMap.png')} alt='Public Art Journey Map'/>
            <img className='img-fluid img-responsive' src={require('./Public/stakeholderMap.png')} alt='Public Art Stakeholder Map'/>

            <h2>Walk the Wall</h2>
            <p>Taking all the individual insights, we conducted a Walk the Wall session and pinpointed common themes among our data.</p>
            <img className='img-fluid img-responsive' src={require('./Public/wallWalk.png')} alt='Public Art Wall Walk 1'/>
            <img className='img-fluid img-responsive' src={require('./Public/wallWalk2.png')} alt='Public Art Wall Walk 2'/>

            <p>Key Takeaways from the Walk the Wall Session:</p>
            <div className='row'>
                <div className='col-md-6'><p>1. <br/> During the creation of the artwork, the general public cannot contribute to the final outcome.</p></div>
                <div className='col-md-6'><p>2. <br/> There are no interactions with the viewers. People often cannot do much with the art other than looking at it.</p></div>
            </div>

            <h2>Reverse Assumptions</h2>
            <p>Our team also chose to do a reverse assumption activity in order to identify a problem space that we were interested in. The assumption we were most interested in was "public art is only created by artists" and its reversal. We wanted allow the public to be able to participate in the creation of the artwork in some way. If the general public has a voice during the creation process, it ensures that public art is representative of the people.</p>

            <img className='img-fluid img-responsive' src={require('./Public/reverse.png')} alt='Public Art Reverse Assumption'/>

            <hr/>

            <h1>DEFINING THE PROBLEM</h1>

            <div className='callout'><p>Problem Statement</p><p>How Might We Encourage the Communication Between Artists and Viewers as well as Viewers and Viewers?</p></div>

            <h2>Semi-structured interviews</h2>
            <p>We refined our HMW statements after conducting our semi-structured interviews. We recruited five viewers of public art and one artist. Some of the main questions asked were: “ When you see those artwork, do you want to express your opinions to the artist? Do you think the public has a say in these types of art pieces? How might we foster that?" After every session, we held an interpretation session.</p>

            <a target='_blank' href='https://app.mural.co/t/ucre20202802/m/ucre20202802/1586111183110/52a7b715f91de23742152521d45940107c7a7927' rel="noreferrer"><img className='img-fluid img-responsive' src={require('./Public/affinityDiagram.png')} alt='Mural'/></a>

            <h2>Key Insights from the semi-structured interviews:</h2>
            <p>1. <br/>
                The topic of public art has a perceived certain threshold that allows people to engage with or talk about it.<br/><br/>
                Depending on someone’s perceived threshold of the public art, he/she will engage with others about it. For example, those who believe that the topic of art is casual will perceive that conversing about art has a low threshold of entry (ref. A1-2 and A1-9).
            </p>
            <div className='callout'><p>Quote:</p> <p>“I don’t feel comfortable talking about public art unless I know something about it”</p></div>

            <p>2. <br/>
            The level of exposure to public art is influenced by people’s daily routines. We observed that the measure of how often one views public art is dependent on where people go on a daily basis.<br/> <br/>
            The frequency of viewing public art is affected by one’s close proximity to pieces.
            For example, one observation from our interviews points to how location affects an artwork’s noticeability due to the artwork’s surroundings and other businesses that may be nearby (ref. V3-3)
            </p>
            <div className='callout'><p>Quote:</p><p> “I would only talk about the piece with someone else if we’re near it.”</p></div>

            <h2>Why does our problem statement matter?</h2>
            <p>The current state of public art has a problem: The intention of public art contradicts the reality of its experience.</p>
            <p>The intention is that we see public art as something anyone can enjoy. There is no fee, no time limit and no barriers to enjoy public art. In other words, there is a low threshold of entry. However, the reality is that people think art has a high threshold of entry. People think that there are barriers between them and public art, which are preventing them from talking about public art with one another. The three barriers that we identified are: Prior Knowledge, Proximity, Privacy</p><br/>

            <div class="row">
                <div class="col-md-4">
                    <p class="text-center">Prior Knowledge</p>
                </div>
                <div class="col-md-8">
                We found that people thought that they needed background knowledge to talk about public art with one another. They think that they need to be of a certain intellect or class to talk about it. These people also did know any suitable platform they can use to learn more about the art.<br/>
                "I don’t feel comfortable talking about art unless I know something about it."
                </div>
            </div>

            <div class="row my-5">
                <div class="col-md-4">
                    <p class="text-center">Proximity</p>
                </div>
                <div class="col-md-8">
                People confine their experience with public art to when they were proximally close the art piece. The experience of public art ends whenever they leave the site. They will not talk about it with others unless they are at the site. During their daily lives, people will not talk about public art because they are not physically close to it.<br/>
                "I would only talk about the piece with someone else if we’re near it."
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <p class="text-center">Privacy</p>
                </div>
                <div class="col-md-8">
                We saw that people thought that their art experience was a private and individual experience. They thought that they did not want their interpretations of the artwork to be influenced by others’ interpretations.<br/>
                “I don’t want to ruin other people’s experience with art.”
                </div>
            </div>

            <hr/>

            <h1>EXPLORING SOLUTIONS</h1>
            <h2>Think-Aloud Protocol</h2>
            <p>To explore solutions for our HMW, we first conducted a think-aloud protocol in order to find out how users are currently interacting with art related websites. We used James Simon’s website to test the functionality and usability of the site. We were curious to see what viewers wanted to see in a website and how the experience can be improved for them.</p>

            <iframe title='Story Board' width='100%' height='500px' src="https://xd.adobe.com/embed/1c853965-0a14-434e-9a5c-62eea951df9b-49d6/" frameborder="0" allowFullScreen></iframe>

            <p>Key Insights from Think Aloud Protocol:</p>

            <p>1. <br/> It was difficult for the user to browse through the art pieces because of the lack of a search function (UFT #1)</p>
            <div className='callout'><p>Solution: Provide a filter and sort system to personalize the users’ interests and help them identify art pieces that they probably like, so that they would be more willing to talk/contribute their thoughts on art pieces.</p></div>

            <p>2. <br/>Users couldn’t easily identify the location of the art pieces (UFT’s #3 and #8).</p>
            <div className='callout'><p>Solution: Implement real-time ETA to the art piece based on user’s location or include a short, concise address with an interactive map on the site.</p></div>

            <p>3. <br/> Users find it hard to understand art pieces without knowing the contexts of art pieces (UFT #9)</p>
            <div className='callout'><p>Solution: Provide a communication tunnel for viewers and they are able to ask questions on the page if any information they would like to know is lacking on the website.</p></div>

            <h2>Speed Dating</h2>
            <p>Taking the usability issues and insights from our think-aloud session, we proceeded to come up with new ideas for an app. We started off with a crazy 8 session. Then we each voted on which ones we want to turn into story boards to test with users. We tested 12 scenarios total with the users.</p>

            <img className='img-fluid img-responsive' src={require('./Public/crazy8.png')} alt='Public Art Crazy 8'/>

            <iframe title='crazy 8' width='100%' height='500px' src="https://xd.adobe.com/embed/88bc76e5-ebc6-4cc5-aeb5-fa97accd5b5b-ddef/" frameborder="0" allowFullScreen></iframe><br/><br/>

            <h2>Key Takeaways from Speed Dating:</h2>
            <p>The main concern for users when interacting with the artist or artist’s work were:</p>

            <div className='row'>
                <div className='col-md-4'><p>1. <br/> Users need to feel creatively empowered in order to engage</p></div>
                <div className='col-md-4'><p>2. <br/> Users prefer an efficient way to directly contact the artist</p></div>
                <div className='col-md-4'><p>3. <br/> Users prefer both ways of drawing and writing to encourage all users to express their ideas</p></div>
            </div>

            <h2>Design Ideas and Opportunities</h2>
            <div className='row'>
                <div className='col-md-4'><p>1. <br/> People are more willing to learn information that are scaffolded for them.</p></div>
                <div className='col-md-4'><p>2. <br/> People are interested in interacting with art pieces and they are willing to draw or write to actively interact with art pieces.</p></div>
                <div className='col-md-4'><p>3. <br/> Artifacts (Games, art boards) around the art can be a gateway to motivate users to communicate with artist.</p></div>
            </div>

            <div className='callout'><p>Quotes:</p>
                <p>
                    “I like this scenario because it feels like a game and it makes me want to explore.”<br/>
                    “I would use the drawing function because it gives people something fun to do around the art.”
                </p>
            </div>

            <hr/>

            <h1>FINALIZING SOLUTIONS</h1>
            <p>After conducting various research, we decided that we want to create an app that allows users to communicate with others. The app will also give users a personalized experience while viewing the art. We named this app PUBLiC. Here are some features:</p>

            <h2>AR Camera</h2>
            <ol>
                <li><p>Allows users to scan art pieces to view interesting facts</p></li>
                <li><p>Facts are clickable to allow users to comment under them</p></li>
                <li><p>Take a picture and draw to share with others</p></li>
                <li><p>Value — Opportunity to contribute in discussion among viewers and artists by expressing creatively and commenting shared in a common space of public art interest</p></li>
            </ol>
            
            <h2>Explore for More</h2>
            <ol>
                <li><p>Map feature allows users to explore more artwork around them</p></li>
                <li><p>Locked Information: Can only view fun facts and others’ drawings by personally visiting artwork site. Otherwise, the information will be locked</p></li>
                <li><p>Value — Motivates people to join a community by actively viewing a piece, Addresses need for instant communication tool between viewers and artists</p></li>
            </ol>

            <div className="row">
                <div className="col-md-5"> 
                    <iframe title='figma-embed'width="100%" height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FN4VnfEXR3wjVLXduQvp1G9%2FModel-UCRE%3Fnode-id%3D648%253A206%26viewport%3D359%252C47%252C0.15392759442329407%26scaling%3Dcontain" allowFullScreen></iframe>
                </div>

                <div className="col-md-7">
                    <iframe title="figma-embed2" width="100%"height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FN4VnfEXR3wjVLXduQvp1G9%2FModel-UCRE%3Fnode-id%3D648%253A2" allowFullScreen></iframe>
                </div>
            </div>

            <img style={{backgroundColor: 'white'}} className='img-fluid img-responsive' src={require('./Public/prototype1.png')} alt='Public Art Prototype 1'/>

            <h2>Experience Prototype</h2>
            <p>We created the prototype using Figma and tested the usability of the app with several users. Here are our findings:</p>
            <ol>
                <li><p>It was not obvious that you could click on the comments.</p></li>
                <li><p>Users thought the magnifying glass icon was confusing. It looks like a search icon but is actually a navigation tool.</p></li>
                <li><p>Users wanted a marker for their location and estimated ETA for a nearby artwork.</p></li>
                <li><p>Text can be hard to see if the camera is facing something white.</p></li>
            </ol>

            <div className='callout'><p>Quotes:<br/>
            "The search icon looks like you are looking up something. Expected a search bar to pop up. If it were a map, it should be a map/compass icon."<br/>
            "I think that it is cool that you can see other’s work and have it be locked before you go see it."</p></div>

            <h2>Changes Made For Iteration 2</h2>
            <ol>
                <li><p>Made the comments on the art piece look more clickable by adding a dot indication</p></li>
                <li><p>Magnifying glass icon → Navigation icon</p></li>
                <li><p>Included a marker for user location and estimated ETA for each artwork.</p></li>
                <li><p>Added a background color to text to improve readability</p></li>
            </ol>

            <div className="row">
                <div className="col-md-5"> 
                    <iframe title='figma-embed'width="100%" height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FN4VnfEXR3wjVLXduQvp1G9%2FModel-UCRE%3Fnode-id%3D648%253A1558%26viewport%3D582%252C305%252C0.14864154160022736%26scaling%3Dcontain" allowFullScreen></iframe>
                </div>

                <div className="col-md-7">
                    <iframe title="figma-embed2" width="100%"height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FN4VnfEXR3wjVLXduQvp1G9%2FModel-UCRE%3Fnode-id%3D648%253A3" allowFullScreen></iframe>
                </div>
            </div>

            <img style={{backgroundColor: 'white'}} className='img-fluid img-responsive' src={require('./Public/prototype2.png')} alt='Public Art Prototype 2'/>

            <hr/>

            <h1>REFLECTION</h1>
            <p>When I first met with my group members, I was afraid that I would not meet the group’s standards for the project. Because I have never participated in any sort of research before, I did not know what to expect and was nervous the first time I interviewed a participant. I was pushed out of my own comfort zone by recruiting interviewees and talking to strangers over zoom. Looking back at the semester, I was proud of the work I have done.</p><br/>
            
            <h2>Challenges</h2>
            <p>Interviewing<br/> Because I was so nervous when I conducted the interview, I was worrying about whether everything would go well. I wanted to follow the interview guide thoroughly to make sure that I did not miss any important steps of the interview. I think that because I worried too much about the structure of the interview, I seemed uninterested during the interview. For the future, I will try to focus less on following the guide/structure and more on learning about the interviewee.</p><br/>

            <p>Designing Interfaces<br/>
            I have worked with Figma in the past for individual projects. This is the first time that I tried designing interfaces with a team. I was glad that I learned so much from my teammates because it was clear that they had a lot more experience than me. Because I have never taken a design course before, I was mentored on design principles while making the interfaces.</p>
        </div>
        </>
    )
}