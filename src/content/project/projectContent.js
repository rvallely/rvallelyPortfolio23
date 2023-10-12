import discreteMathsProjectTile from '../../assets/projectTiles/discreteMathsProjectTile.png';
import ncNewsProjectTile from '../../assets/projectTiles/ncNewsProjectTile.png';
import betterWordsProjectTile from '../../assets/projectTiles/betterWordsProjectTile.png';
import swapifyProjectTileWhiteBckgrd from '../../assets/projectTiles/swapifyProjectTileWhiteBckgrd.png';
import mortgageBoothProjectTile from '../../assets/projectTiles/mortgageBoothProjectTile.png';
import whatYaBeenWatchingDarkProjectTile from '../../assets/projectTiles/whatYaBeenWatchingDarkProjectTile.png';

const projectContent = Object.freeze({
    DISCRETE_MATHEMATICS: {
        NAME: 'Discrete Maths (Aug - Oct 2023)',
        DESCRIPTION: (
            <p className='project-description'>
                Discrete Maths is an educational resource on the topic of Discrete Mathematics, much like <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.mathsisfun.com'>mathisfun.com</a> or <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.bbc.co.uk/bitesize'>BBC Bitesize</a>. I began the exploring the topic because I wanted to get a deeper understanding of the what was going on behind the scenes when I was building apps.
                <br></br>
                <br></br>
                Having completed Codecademy&apos;s <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.codecademy.com/learn/discrete-math'>Discrete Maths course</a> and further explored topics like <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=pcJHkWwjNl4'>sorting algorithms</a> and <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=kgBjXUE_Nwc'>Big O Notation</a>, I wanted to test my understanding of the concepts by applying them. Other topics covered in my study included permutations and combinations, set theory and congruence.
                <br></br>
                <br></br>
                The app is written in JavaScript and is hosted on Heroku. A particular point of challenge and ultimately triumph, was working out how to dynamically generate the x and y coordinates of the nodes on the <a className='link' target="_blank" rel="noopener noreferrer" href='TODO.com'>Quicksort sorting algorithm diagram</a>, so that they didn&apos;t overlap in longer lists. I plan to keep adding topics to this app in the future as I enjoy learning things that progress my understanding and make me a more effective developer.
            </p>
        ),
        PROJECT_TILE: discreteMathsProjectTile,
        IMAGE: <img style={{ border: 'solid', borderWidth: '2px' }} className='rounded-box' src={discreteMathsProjectTile} alt='still from Discrete Maths website' width='90%'></img>,
        HOSTED_APP_LINK: {
            displayText: 'Go to the app',
            link: 'TODO.com',
        },
        SOURCE_CODE: {
            frontend: 'https://github.com/rvallely/fe-discrete-maths-exploration',
            backend: 'https://github.com/rvallely/discrete-maths-exploration',
        },
        PATH_NAME: 'discrete-maths-app',
    },
    WHAT_YA_BEEN_WATCHING: {
        NAME: 'What Ya Been Watching? (Oct 2023 - present)',
        DESCRIPTION: (
            <p className='project-description'>
                Not so much the age-old question, but rather the question of this age. You meet up with a friend and after the usual conversation there&apos;s a lull and they say, “Sooo, what ya been watching recently? Anything good?”.
                <br></br>
                <br></br>
                Part of what makes media so impactful is not just that it touches us, but that we can share this with others and in doing so share a little bit of ourselves too.
                <br></br>
                <br></br>
                In the time of streaming giants and binge watching, the amount of media we consume is arguably the most it has ever been. This a gift for media lovers, but also leads to overload and an inability to retain all the media gems you've found.
                <br></br>
                <br></br>
                'What Ya Been Watching?' gives users the ability to document their media history, track trends in their watching across all streaming platforms and find new content along the way. 
                <br></br>
                <br></br>
                <p>As of mid October 2023, I'm in the planning and design stage and have chosen to use Python and Django as the foundation for my project. This decision was motivated by a few of Django's key features. Firstly, Django's ORM system is intuitive and simplifies database management. Next, the admin interface is something I am already familiar with and want to further my knowledge in. Lastly, I have generally found developing Django projects is both an efficient and a scalable way of working. </p>
            </p>
        ),
        PROJECT_TILE: whatYaBeenWatchingDarkProjectTile,
        IMAGE: <img style={{ border: 'solid', borderWidth: '2px' }} className='rounded-box' src={whatYaBeenWatchingDarkProjectTile} alt='Website logo'width='90%'></img>,
        HOSTED_APP_LINK: null,
        SOURCE_CODE: null,
        PATH_NAME: 'what-ya-been-watching',
    },
    BETTER_WORDS: {
        NAME: 'Better Words (Oct 2023 - present)',
        DESCRIPTION: (
            <p className='project-description'>
                Have you ever been writing a professional document and on proof reading realised you&apos;ve fallen into the trap of using the same words repetitively? You know what you are trying to say, but need a different and just <i>better</i> way of saying it. This leads you to open a new tab in your browser and search “synonyms for ... x”. Then another tab to search “synonyms for ... y” and so on.
                <br></br>
                <br></br>
                This little extension takes the hassle right out of the process. Much like Grammarly, it scans the text you&apos;re writing and when asked to, provides synonyms for a word you're hovering over. No more breaking of concentration as you switch from one tab to another to find those better words. Instead, the options are right there in front of you.
                <br></br>
                <br></br>
                As of October 2023, I've begun to plan and experiment with how best to build this project.
        </p>
        ),
        PROJECT_TILE: betterWordsProjectTile,
        IMAGE: <img style={{ border: 'solid', borderWidth: '2px' }} className='rounded-box' src={betterWordsProjectTile} alt='extension logo'width='90%'></img>,
        HOSTED_APP_LINK: null, 
        SOURCE_CODE: null,
        PATH_NAME: 'better-words',
    },
    THE_MORTGAGE_BOOTH: {
        NAME: 'The Mortgage Booth (Sep - present 2023)',
        DESCRIPTION: (
            <p className='project-description'>
               The Mortgage Booth is the first freelance project I've taken on. Teaming up with a partner, we are building a website tailored to meet the needs of our client's mortgage brokerage business. My role on the project is primarily on the backend, but I'm hoping to complete some frontend features along the way too. 
            <br></br>
            <br></br>
The project is being written in TypeScript and has multiple requirements. Our client wanted a unified platform that could serve a variety of purposes. It needed to serve as a promotional hub for the company, offer users access to repayment and stress test calculators, provide brokers with a portal to manage their cases, and offer customers a secure space to track their mortgage applications and communicate with their brokers.
<br></br>
            <br></br>
As of mid October 2023, we have completed the design, planning and spike stage of the project and are working on the first features and functionality. It has been a valuable experience to work on something from the ground up, being able to trial different tech stacks and platforms and plan systems without having the constraints of an existing codebase. 
<br></br>
            <br></br>
Communication both with the client and between me and my project partner has been key to being as effective as possible. We've learnt how to stay in sync (even from a distance) and I'm looking forward to completing what will be a rewarding first freelance project.
            </p>
        ),
        PROJECT_TILE: mortgageBoothProjectTile,
        IMAGE: <img style={{ border: 'solid', borderWidth: '2px' }} className='rounded-box' src={mortgageBoothProjectTile} alt='website home page design'width='90%'></img>,
        HOSTED_APP_LINK: null,
        SOURCE_CODE: null,
        PATH_NAME: 'the-mortgage-booth',
    },
    NC_NEWS: {
        NAME: 'NC News (Mar 2022)',
        DESCRIPTION: 
            <p className='project-description'>
                NC News is a news and social platform, with the aim of creating a hub for users to connect while posting short news articles and viewpoints on the things that interest them. The app aims to be smaller in scale than national news sites and is more focussed on connecting users, than on the content they may be connecting over.
                <br></br>
                <br></br>
                It is analogous to a friendly Discord server, where the users help craft their own experience by interacting with the site and making it their own. NC News has more detail than tweets on Twitter and is more personal than BBC News.
                <br></br>
                <br></br>
                I chose to build a news and social app, because I am interested in the news and how we communicate information. This was a good opportunity to consolidate what I had learned during my time at the Northcoders bootcamp and it was the first app I&apos;d built from start to finish.
                <br></br>
                <br></br>
                With the experience I have now there are definite improvements that could be made, like more efficient testing and a more responsive UI, but I wanted to show my progression.
            </p>,
        PROJECT_TILE: ncNewsProjectTile,
        IMAGE: <img style={{ border: 'solid', borderWidth: '2px' }} className='rounded-box' src={ncNewsProjectTile} alt='website homepage' width='90%'></img>,
        HOSTED_APP_LINK: {
            displayText: 'Go to the app',
            link: 'https://nc-news-rvallely.netlify.app/',
        },
        SOURCE_CODE: {
            frontend: 'https://github.com/rvallely/nc-news',
            backend: 'https://github.com/rvallely/ncNewsApp',
        },
        PATH_NAME: 'nc-news',
    },
    SWAPIFY: {
        NAME: 'Swapify (Mar 2022)',
        DESCRIPTION: (
            <p className='project-description'>
                Welcome to Swapify, the mobile app where users can swap anything for anything, with absoluteley no money changing hands between users.
                <br></br>
                <br></br>
                Swapify was built in the group project stage of the Northcoders bootcamp. My group realised there was a gap in the market for a different kind of e-commerce experience and we wanted to build something to bridge it.
                <br></br>
                <br></br>
                So many people have items in their homes they aren&apos;t using anymore and selling them second hand on sites like Gumtree and eBay only achieves a small fraction of an item&apos;s original value. Swapify offers an innovative service that is good for your wallet, good for the planet and above all is good for users.
                <br></br>
                <br></br>
                We built the app over a period of two weeks and presented a demo at the end of the process. The tech stack used was React Native, Expo, Firebase firestore, Firebase authentication and Trello. My role on the project was on the backend, setting up the database and routes to perform CRUD operations, as well as adding features like filtering by category and allowing users to give items a star rating.
            </p>
        ),
        PROJECT_TILE: swapifyProjectTileWhiteBckgrd,
        IMAGE: <img style={{ border: 'solid', borderWidth: '2px' }} className='rounded-box' src={swapifyProjectTileWhiteBckgrd} alt='swapify logo' width='90%'></img>,
        HOSTED_APP_LINK: {
            displayText: 'Watch a demo',
            link: 'https://northcoders.com/projects/march-2022/pivot1',   
        },
        SOURCE_CODE: {
            frontend: 'https://github.com/rvallely/Swapify',
            backend: 'https://github.com/rvallely/Swapify',
        },
        PATH_NAME: 'swapify',
    },
});

export default projectContent