var typed = new Typed(".typing",{
    strings:["Game Developer"],
    typeSpeed: 100,
    BackSpeed:40,
    loop: true
})

const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for(let i=0; i<totalNavList;i++){
            const a = navList[i].querySelector( "a" );
            a.addEventListener('click', function() 
            {
                for(let i=0; i<totalSection;i++){
                    allSection[i].classList.remove("back-section");
                }
                for(let j=0;j<totalNavList;j++) {
                    if(navList[j].querySelector("a").classList.contains("active")){
                        allSection[j].classList.add("back-section");
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active")
                showSection(this);
            })
       }
       function showSection(ele){
        for(let i=0; i<totalSection;i++){
            allSection[i].classList.remove("active");
        }
        let target = ele.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
        asideSectionTogglerBtn()
       }

    function updateNav(ele){
        for(let i=0;i<totalNavList;i++){
            navList[i].querySelector("a").classList.remove("active")
            const target = ele.getAttribute("href").split("#")[1];
            if(target == navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active")
            }
        }
    }

       document.querySelector(".hire-me").addEventListener("click",function(){
        showSection(this)
        updateNav(this)
        asideSectionTogglerBtn();
       })

       const navTogglerBtn = document.querySelector(".nav-toggler"),
       aside = document.querySelector(".aside");
       navTogglerBtn.addEventListener( 'click' , () =>{
        asideSectionTogglerBtn();
       });

       function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0;i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
       }


       //project 
       //place project to be displated on top in starting
    /*
       {
        "title": "",
        "tech" : "",
        "play": "",
        "description": "",
        "image": "images/project/github.png",
        "video": "https://www.youtube.com/embed/",
        "github": ""
    },
    */
       const projectsData = [
        {
            "title": "Tiny-Verse",
            "tech" : "Unity-3d, C#",
            "play": "https://nayankamalverma.itch.io/tiny-verse",
            "description": "➢ Made this for WTF x IGDC game jam 2024 and the theme was “Small World, Big Adventure”.<br>➢ Created dynamic 3D environment, enemy AI, aim and shoot system, audio system, animation and engaging game mechanics to improve gameplay.<br>➢ Utilized singleton pattern, oops, coroutine for implementation.",
            "image": "images/project/TinyVerse.png",
            "github": "https://github.com/nayankamalverma/Tinyverse/tree/build-v.1.0.1"
        },
        {
            "title": "Snake-2D",
            "tech" : "C++ and SFML",
            "play": "",
            "description": "➢ Retro snake game with 4 unique levels with one boss level and added different boosters.<br>➢ Implemented the Service locator design pattern to manage game services, enhancing modularity and scalablity.<br>➢ Used MVC pattern for creating snake and levels.",
            "video": "https://www.youtube.com/embed/C0y3PQm6ilo",
            "github": "https://github.com/nayankamalverma/Snake"
        },
        {
            "title": "Endless-Waves",
            "tech" : "Unity-2d, C#",
            "play": "https://nayankamalverma.itch.io/endless-waves",
            "description": "➢ Made this for a game jam hosted by GameDev.tv and the theme was “Last stand”.<br>➢ Implemented enemy AI, aim and shoot system, high score save system, audio system and setup difficultycurve as per time passes.<br>➢ Also added animations, blood particle system with interactive UI",
            "image": "images/project/endless-waves.png",
            "github": "https://github.com/nayankamalverma/Endless-Waves"
        },
        {
            "title": "Minesweeper",
            "tech" : "C++ and SFML",
            "play": "",
            "description": "➢ Developed a Minesweeper game with traditional mechanics and scalable design.<br>➢ Implemented the Service Locator design pattern for efficient resource management.<br>➢ Applied MVC architecture to separate game logic, UI, and data handling.",
            "video": "https://www.youtube.com/embed/tgYr3GgCFcM",
            "github": "https://github.com/nayankamalverma/Minesweeper"
        },
        {
            "title": "Skip-The Lights",
            "tech" : "Unity-2d, C#",
            "play": "https://outscal.com/nayankamalverma/game/play-skip-the-lights-1-game",
            "description": "➢ A endless runner game.<br>➢ Implemented a dynamic background parallax system to enhance visual depth and user experience.<br>➢ Utilized singleton pattern, oops, coroutine, JSON utilities to build save system for high score.<br>➢ Created dynamic UI elements and engaging game mechanics to improve gameplay.",
            "video": "https://www.youtube.com/embed/74bQSqWbbkY",
            "github": "https://github.com/nayankamalverma/Skip---The-Lights"
        },
        {
            "title": "The Explorer",
            "tech" : "Unity-2d, C#",
            "play": "https://outscal.com/nayankamalverma/game/play-the-explorer-game",
            "description": "➢ A 2D RPG game.<br>➢ Implemented gameplay mechanics, enemy AIs, character animations, audio system.<br>➢ also designed and created UI elements and 3 unique levels using tilemap tool.<br>➢ Used singleton, OOP for implementation.",
            "image": "images/project/explorer.png",
            "github": "https://github.com/nayankamalverma/2D-Platformer-Game"
        },
        {
            "title": "Duck Hunt",
            "tech" : "C++ and SFML",
            "play": "",
            "description": "➢ Clone of classic Duck hunt game<br>➢ Utilized MVC, service locator pattern for smooth gameplay.<br>➢ Animated duck sprites with different flying patterns.<br>➢  Mouse-controlled aiming and shooting Score tracking.<br>➢  Sound effects for shooting and duck hits and Game over screen when the player misses too many ducks",
            "image": "images/project/duck_hunt.jpg",
            "github": "https://github.com/nayankamalverma/Duck-Hunt"
        },
        {
            "title": "Space Invaders",
            "tech" : "C++ and SFML",
            "play": "",
            "description": "➢ Implemented core mechanics like player controls, enemy movement and collision detection.<br>➢ Utilized MVC, service locator pattern, OOP principles, event handling, and optimized performance for smooth gameplay.<br>➢ Integrated graphics, animations, and sound effects to enhance the user experience.",
            "video": "https://www.youtube.com/embed/kgfeGIyMsJc",
            "github": "https://github.com/nayankamalverma/Space-Invaders"
        },
    ];
    
    const container = document.getElementById('project-container');
    
    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card'); 
            // Alternate layout based on index
        if (index % 2 === 1) {
           projectCard.classList.add('reverse');  
        }

        let mediaContent = '';
        if (project.image) {
            mediaContent = `<img src="${project.image}" alt="${project.title}" class="project-image">`
        } else if (project.video) {
            mediaContent = `<iframe width="100%" height="100%" src="${project.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="project-image"></iframe>`;
        }
        let playButton =''
        if(project.play){
            playButton = `<a href=${project.play} target="blank" class="btn play">Play</a>`
        }

        projectCard.innerHTML = `
                    ${mediaContent}
                    <div class="project-details">
                        <h3><div class="title">${project.title} <div class="tech">(${project.tech})</div></div>  ${playButton} </h3>
                        <p>${project.description}</p>
                        <a href="${project.github}"  target="_blank"><i class="fa-brands fa-square-github fa-3x"></i></a>
                    </div>
                `;
        container.appendChild(projectCard);
    });
    