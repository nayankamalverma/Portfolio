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

       document.querySelector(".projects").addEventListener("click",function(){
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

    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('project-container');
        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');
        const span = document.getElementsByClassName('close')[0];
        const navLinks = document.querySelectorAll('.nav a');

        // Clear modal content and hide modal on page load
        modalBody.innerHTML = '';
        modal.style.display = 'none';

        // Fetch the JSON data
    fetch('./projects.json')
            .then(response => response.json())
            .then(projectsData => {
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
                    let playButton = ''
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

                    projectCard.addEventListener('click', () => {
                        modalBody.innerHTML = projectCard.innerHTML;
                        modal.style.display = 'block';
                    });
                });
            })
            .catch(error => console.error('Error fetching projects data:', error));

        // Hide modal when the close button is clicked
        span.onclick = function() {
            modal.style.display = 'none';
        }

        // Hide modal when clicking outside of the modal content
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // Hide modal when navigating to any other section
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
    });