import { ProjectDetailsIntro } from "./ProjectDetailsIntro";

export function GroupShopping(){
    return(
        <>
        <div className='projectPageContainer'>
            <ProjectDetailsIntro title='GroupShopping' />
            <hr/>

            <h1>PROBLEM SPACE</h1>
            <p>Amid a global pandemic we’ve all had to adjust and adapt to a new way of life — the services we use should too. For the past few weeks we have been reimagining the everyday task of grocery shopping, and moulding the experience to better serve people today.</p>

            <hr/>
            
            <h1>SOLUTION</h1>
            <p>A group shopping experience that allows housemates to shop asynchronously, yet together.</p>
            <div className='row'>
                <div className='col-4'><p>1. <br/>Users can join multiple shopping carts</p></div>
                <div className='col-4'><p>2. <br/>Items in cart are separated by who added them. (Easy to figure out who bought what items) </p></div>
                <div className='col-4'><p>3. <br/>Allow users to explore different recipes and ingredients</p></div>
            </div>
            <div className="row">
                <div className="col-7"> 
                    <iframe title='figma-embed'width="100%" height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5umzFtkcOnZkGU5FfFfUKR%2FP4%3Fnode-id%3D2325%253A1212%26viewport%3D-76%252C437%252C0.17926566302776337%26scaling%3Dscale-down-width" allowFullScreen></iframe>
                </div>

                <div className="col-5">
                    <iframe title="figma-embed2" width="100%"height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5umzFtkcOnZkGU5FfFfUKR%2FP4%3Fnode-id%3D537%253A1893%26viewport%3D469%252C537%252C0.2511104643344879%26scaling%3Dscale-down" allowFullScreen></iframe>
                </div>
            </div>

            <div className="row">
                <div className="col-6"> 
                    <iframe title='figma-embed'width="100%" height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5umzFtkcOnZkGU5FfFfUKR%2FP4%3Fnode-id%3D495%253A2" allowFullScreen></iframe>
                </div>

                <div className="col-6">
                    <iframe title="figma-embed2" width="100%"height='500'src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5umzFtkcOnZkGU5FfFfUKR%2FP4%3Fnode-id%3D537%253A1747" allowFullScreen></iframe>
                </div>
            </div>

            <hr/>

            <h1>UNDERSTANDING THE PROBLEM</h1>
            <p>Before designing, we need to define the scope of our project. We started off with conducting 12 semi-structured interviews. Then, we consolidated our user stories into three main personas — this got our wheels turning. </p>

            <img className='img-fluid img-responsive' src={require('./shopping/Persona1.png')}/>
            <img className='img-fluid img-responsive' src={require('./shopping/Persona2.png')}/>
            <img className='img-fluid img-responsive' src={require('./shopping/Persona3.png')}/>

            <p>We then proceeded to create a consolidated journey map — this helped us identify paint points and discretize the tasks of the shopping experience.</p>

            <img className='img-fluid img-responsive' src={require('./shopping/journeyMap1.png')}/>
            <img className='img-fluid img-responsive' src={require('./shopping/journeyMap2.png')}/>

            <h2>Key Takeaways</h2>
            <div className='row'>
                <div className='col-4'><p>1. <br/>Because of the pandemic, people prefer to shop online rather than in-person. </p></div>
                <div className='col-4'><p>2. <br/>It was difficult to grocery shop for the entire household. Current solutions include using google spreadsheets, a physical paper, or their group chats. The problem is that these solutions usually mean that the responsibilities fall onto one member of the household. </p></div>
                <div className='col-4'><p>3. <br/>People missed the serendipitous aspect of grocery shopping.</p></div>
            </div>

            <hr/>

            <h1>DEFINING THE PROBLEM</h1>
            <p>How might we bring the serendipitous feeling of in person shopping experience into the digital one?<br/><br/>

                How might we make the grocery shopping experience feel more expedient and safe during a pandemic - especially as it pertains to households?</p>
            
            <hr/>

            <h1>EXPLORING SOLUTIONS</h1>
            <h2>Crazy 8</h2>
            <p>We started the process by conducting a Crazy 8s session. Even though not all of the ideas will be part of the final product, it was a way for our team to get creative with possible solutions. Our ideas ranged from grocery tinder to grocery shopping in VR.</p>

            <p>After discussing our ideas, we settled down on a couple of scenarios. Many of us came up with some sort of recipe ideas, so we decided that our app can leverage on recipes to create a serendipitous feeling. We also were interested in creating a more convenient group shopping experience with the group cart idea.</p>

            <img className='img-fluid img-responsive' src={require('./shopping/crazy8.png')}/>
            
            <h2>Parallel Prototyping</h2>
            <p>Taking these ideas, we each moved onto creating paper prototypes of specific screens. Our team decided to split off to create our own versions of the app because we wanted to do parallel prototyping. This method helped us generate a lot of different concrete screen ideas.</p>

            <img className='img-fluid img-responsive' src={require('./shopping/paper.png')}/>

            <p>Using all of these paper prototypes, we proceeded to conduct think-aloud sessions. During these sessions, we were doing parallel testing because it will provide our team with more critical feedback from the users by allowing them to compare between choices.</p><br/>

            <p>Tasks that we had for our users were:</p>
            <div className='row'>
                <div className='col-4'><p>1. <br/>“You want to order groceries for your household for the week. Create a shared cart so your housemates can also add to the weekly order.”</p></div>
                <div className='col-4'><p>2. <br/>“Find out what items you have in your own cart and the items you and your housemates are sharing.”</p></div>
                <div className='col-4'><p>3. <br/>“Your housemate Alex has started their own cart. Join their cart and add an item to the shared cart.”</p></div>
            </div>
            <br/>

            <h2>Key Takeaways</h2>
            <div className='row'>
                <div className='col-6'><p>1. <br/>Users brought up the idea of having multiple carts</p></div>
                <div className='col-6'><p>2. <br/>Think that buying ingredients from recipes helps with meal planning</p></div>
            </div>
            
            <hr/>

            <h1>FINALIZING SOLUTIONS</h1>
            <p>Following the Think Aloud Protocol testing, we incorporated the feedback we received into the next iteration of our mock-ups. We continued our practice of parallel prototyping to generate multiple different perspectives on the design.</p><br/>

            <h2>Multiple carts</h2>
            <p>While designing the multiple carts feature, our main concern was that users might accidentally add items to the wrong cart. Users can easily add items to the wrong cart and not realize until much later. This means that they would then need to delete all the items, and re-add them to the correct cart.</p>
            <p>We decided we can prevent this error by making the name of the current cart visible at all times. This helps the user orient themselves while shopping and mitigates the chances of the user “slipping”.</p>
            
            <img className='img-fluid img-responsive' src={require('./shopping/multipleCarts.png')}/>

            <h2>Recipe Page</h2>
            <p>In our research, participants mentioned the hassles of meal planning as well as concerns about food waste. We came up with two different ideas for the recipes tab.</p>
            <p>In “Recipe Idea A”, the customer inputs the recipes they want to try into the app. Then the app will recommend options from the store for any missing ingredients. This design would expedite the customer’s shopping experience and help get different items in front of customers.</p>
            <p>In “Recipe Idea B”, the user searches a database of recipes and selects ones that appeal to them. Then, the customer can add all items to the cart. This would make trying a new recipe quick and easy for customers, while boosting the store’s sales.</p>

            <img className='img-fluid img-responsive' src={require('./shopping/recipeIdeas.png')}/>

            <h2>Narrowing Scope</h2>
            <p>We quickly realized that it wasn’t enough to rely solely on customers’ desire to try out new recipes if our goal is to help customers discover items that they might not usually consider. The solution was to make the application more proactive about putting new ingredients in front of customers by moving the recipes into the top of the cart page. This way, the recipes will be a focal point every time a customer views their cart.</p>
            <p>Another reason to migrate the recipes into the cart page is that we believe the recipe suggestions should be based upon the items that the customer has already added to their cart. By showing users recipes that use ingredients they were already planning to buy, they will be more inclined to try out one of the system’s recommendations.</p>

            <img className='img-fluid img-responsive' src={require('./shopping/narrowingScope.png')}/>

            <h2>Refine Refine Refine</h2>
            <p>We were also beginning to consider some smaller interactions, such as how a customer may want to select substitutes for an ingredient for a recipe. The limited screen real estate on mobile devices is not conducive for displaying too much information all at once. We decided the best course of action would be to hide the options away in a drawer that opens and closes if the customer chooses to view them. This would eliminate confusion and save screen space.</p>

            <img className='img-fluid img-responsive' src={require('./shopping/substitution.png')}/>

            <h2>Responsive Design</h2>
            <p>Up until this point in the process, we had been focused on a mobile-first approach, designing primarily for the experience of a handheld device. However, we felt that our design was solidified enough to start thinking about how the application might look like on larger screens, as well as the contexts of use.</p>
            <p>Translating our mobile designs to desktop came with its own set of challenges. We had to be mindful of maintaining a reasonable hierarchy among the visual elements in our design and consider the most important actions for the customers on various devices. For instance, while a customer’s primary goal on mobile would most likely be to checkout and pay, the same customer would probably use the desktop application to browse. So we chose to make the recipe cards large on the desktop experience to encourage customers to explore and experiment, while the same recipe cards are smaller in scale on mobile.</p>
            <img className='img-fluid img-responsive' src={require('./shopping/responsive.png')}/>

            <hr/>

            <h1>FINAL HIGH FIDELITY PROTOTYPE</h1>
            <div className="row">
                <div className="col-7"> 
                    <iframe title='figma-embed'width="100%" height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5umzFtkcOnZkGU5FfFfUKR%2FP4%3Fnode-id%3D2325%253A1212%26viewport%3D-76%252C437%252C0.17926566302776337%26scaling%3Dscale-down-width" allowFullScreen></iframe>
                </div>

                <div className="col-5">
                    <iframe title="figma-embed2" width="100%"height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5umzFtkcOnZkGU5FfFfUKR%2FP4%3Fnode-id%3D537%253A1893%26viewport%3D469%252C537%252C0.2511104643344879%26scaling%3Dscale-down" allowFullScreen></iframe>
                </div>
            </div>

            <div className="row">
                <div className="col-6"> 
                    <iframe title='figma-embed'width="100%" height='500' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5umzFtkcOnZkGU5FfFfUKR%2FP4%3Fnode-id%3D495%253A2" allowFullScreen></iframe>
                </div>

                <div className="col-6">
                    <iframe title="figma-embed2" width="100%"height='500'src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5umzFtkcOnZkGU5FfFfUKR%2FP4%3Fnode-id%3D537%253A1747" allowFullScreen></iframe>
                </div>
            </div>

            <hr/>

            <h1>REFLECTION</h1>
            <p>If we expanded on our prototype, we could dive deeper into the idea of ingredient recommendations and suggested substitutions and think of how better to curate this experience for specific users––what if a user is vegan, or allergic? We could also create more screens for areas we did not focus on for our prototype, such as checkout: how would our users be able to split costs for the cart?</p>
            <p>For future iterations, we would have liked to emphasize the benefits of a responsive design through the visual elements by really drawing out the tasks that we think users would be performing most often on different devices. In retrospect, our mobile design could have pulled more attention toward the process of creating and sharing carts among groups of people. Highlighting the shared carts feature on mobile could have helped us drive home our vision that the application is a quick and convenient alternative to the current experience to facilitate grocery shopping for groups.</p>


        </div>
        </>


    )
}