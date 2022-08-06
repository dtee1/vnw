<template>
<div class="wrapper">
         <div class="main-container">
        <div class="first-container">
            <div class="profile">
                <img src = "../assets/dtee.jpg" alt="">
                <h1> David Talson </h1>
                <h3> Software Developer </h3>
            </div>
            <div class = "social-links">
                    <div class = "link">
                        <a href = "https://github.com/dtee1" target="_blank" >
                            <font-awesome-icon icon="fa-brands fa-github" size="2x"/>
                        </a>
                    </div>
                    <div class = "link">
                        <a href = "https://ca.linkedin.com/in/david-talson-718834132" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-linkedin" size="2x"/>
                        </a>
                    </div>
                    <div class = "link">
                        <a href = "https://g.dev/talsondavid" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-google" size="2x"/>
                        </a>
                    </div>
            </div>
            <div class = "button-container">
                <div class = "link">
                    <a href = "">
                            <font-awesome-icon icon="fa-brands fa-file" size="2x"/>
                            <h2>Resume</h2>
                    </a>
                </div>
            </div> 
            <div class = "interests">
                <h2>Interests</h2>
                <ul class="ul-interests">
                    <li>Artificial Intelligence</li>
                    <li>System Simulation </li>
                    <li> Computer Aided Design </li>
                </ul>
            </div> 
        </div>
        <div class = "second-container">
            <div class = "about">
                <h1> About  </h1>
                <p> I have a passion for designing, scaling, and maintaining software. I obtained an Electrical Engineering degree from Carleton University
					where my co-op experience was hardware focused. After working in the idustry for some time, I decided to pursue a career in software engineering.
                    I am currently pursing a part time master's degree in Applied Artificial Intelligence at University of Ottawa. 
                </p>
            </div>
            <div class="education">
                <h2> Education </h2>
                <div class="school"><font-awesome-icon icon="fa-solid fa-graduation-cap" size="2x"/><div><p><b>Master of Engineering</b>, Concentration in Applied Artificial Intelligence</p><p><b>University of Ottawa</b>, 2022 - Present</p> </div></div>
                <div class="school"><font-awesome-icon icon="fa-solid fa-graduation-cap" size="2x"/><div><p><b>Bachelor of Engineering</b>, Electrical Engineering</p><p><b>Carleton University</b>, 2015 - 2020</p> </div></div>

            </div>
            <div class = "skills">
                <h2> Skills & Technologies</h2>
                <div class="table">
                    <div class = "column">
                        <h3> Frontend </h3>
                        <div class="skill">
                            <font-awesome-icon icon="fa-brands fa-html5" size="2x"/>
                                <p>HTML</p>
                        </div>
                        <div class="skill">
                            <font-awesome-icon icon="fa-brands fa-css3" size="2x"/>
                                <p>CSS</p>
                        </div>
                        <div class="skill">
                            <font-awesome-icon icon="fa-brands fa-vuejs" size="2x"/>
                                <p>Vue.JS</p>
                        </div>
                    </div>
                    <div class = "column">
                        <h3> Backend </h3>
                        <div class="skill">
                            <font-awesome-icon icon="fa-brands fa-python" size="2x"/>
                                <p>Python</p>
                        </div>
                        <div class="skill">
                            <font-awesome-icon icon="fa-brands fa-github" size="2x"/>
                                <p>C++</p>
                        </div>
                        <div class="skill">
                            <font-awesome-icon icon="fa-brands fa-js" size="2x"/>
                                <p>Javascript</p>
                        </div>
                    </div>
                    <div class = "column">
                        <h3> Knowledge </h3>
                        <div class="skill">
                            <font-awesome-icon icon="fa-solid fa-book" size="2x"/>
                                <p>OOP</p>
                        </div>
                        <div class="skill">
                            <font-awesome-icon icon="fa-solid fa-book" size="2x"/>
                                <p>DS and Algo</p>
                        </div>
                        <div class="skill">
                            <font-awesome-icon icon="fa-solid fa-book" size="2x"/>
                                <p>CI / CD</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>
   

</template>

<script>
export default {

}
</script>

<style scoped>
    .wrapper {
        display: flex;
        justify-content: center;
    }
    img {
            height: 20px;
        }
    .main-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color:white;
        margin-top: 0.75%;
        width: 80%;
    }
    .first-container{
        background-color: white;
        width: 25%;
        padding: 2.5%;
    }
    .second-container {
        background-color:white;
        width: 75%;
        padding-left: 2.5%;
        padding-top: 0;
        margin: 2.5%;
    }
    .second-container h1 {
        font-size: 3rem;
    }
    .second-container h3 {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .second-container p {
        font-size: 1.25rem;
    }
    .profile {
        margin-bottom: 10%;
    }
    .profile h1 {
        margin:0;
        padding:0;
    }
    .profile h3 {
        margin: 0;
        padding: 0;
    }
    .profile img {
        height: 15rem;
        border-radius: 50%;
        box-shadow: 0 1rem 1rem 0 rgb(0 0 0 / 11%);
    }
    
    .social-links {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .link a{
        text-decoration: none;
        width: 100%;
        height: 2rem;
        color: black;
        font-size: 0.7rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #f7f7f7;
        margin: 0.75rem;
        border-radius: 10px;
        box-shadow: 0.2rem 0.2rem #888888;
        padding: 0;
    }

    .link a:hover {
        background-color: gray;
        transition: 0.3s;
    }
    .interests {
        margin: 0;
        padding: 0;
        display: block;
        align-items: flex-end;
    }
    .interests h2 {
        display: flex;
        justify-content: flex-start;
        padding-left: 10%;
    }
    .ul-interests {
        margin-top: -1.25rem;
        padding-top: -1.25rem;
        
    }
    .about {
        text-align: left;
    }

    .skills {
        display: block;
        justify-content: center;
        align-items: center;
    }
    
    .table {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
    .column {
        width: 33%;
        height: auto;
    }
    .education {
        margin-top: 5%;
    }
    .education h2 {
        text-align: left;
        font-size: 2rem;
        margin-top: -1.25rem;
        padding-top: -1.25rem;
    }
    .education p {
        text-align: left;
        margin-top: -0.75rem;
        padding-top: -0.8rem;
    }
    .school {
        display: flex;
        flex-direction: row;
    }
    .school div {
        padding-left: 1%;
        padding-bottom: 1.25rem;
    }
    .skill {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
    }
    .skills h2 {
        text-align: left;
        font-size: 2rem;
        padding-top: -1rem;
        margin-top: -1rem;
    }
    .skill p {
        padding-left: 0.5rem;
    }
    .logos img {
        height: 2rem;
    }
    .button-projects {
        background-color: blue;
        padding: 1%;
        margin: 2%;
        border-radius: 1rem;
        color: black;   
    }
    .button-projects a{
        text-decoration: none;
        color: black;
    }
    @media screen and (max-width: 1140px) and (min-width: 800px) {
        .profile img {
            height: 10rem;
        }
    }
    @media screen and (max-width: 800px){
        .main-container {
            display: block;
        }
        .first-container {
            width: 100%;
            padding: 2.5%;
        }
        .second-container {
            width: 100%;
        }
        .table {
            display: inline-block;
            justify-content: center;
            align-items: center;
            align-content: center;
        }
        .column {
            width: 100%;
        }
        .link a {
            font-size: 0.6rem;
        }
    }
</style>