<template>
<div class="wrapper">
         <div class="main-container">
        <div class="first-container">
            <div class="profile">
                <img src = "../assets/dtee.jpg" alt="">
                <h3> David Talson </h3>
                <p> Software Developer </p>
            </div>
            <div class = "social-links">
                    <div class = "link">
                        <a href = "https://github.com/dtee1" target="_blank" >
                            <font-awesome-icon icon="fa-brands fa-github" size="2x"/>
                            <h2>Github</h2>
                        </a>
                    </div>
                    <div class = "link">
                        <a href = "https://ca.linkedin.com/in/david-talson-718834132" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-linkedin" size="2x"/>
                            <h2>LinkedIn</h2>
                        </a>
                    </div>
                    <div class = "link">
                        <a href = "https://g.dev/talsondavid" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-google" size="2x"/>
                            <h2>Google Dev</h2>
                        </a>
                    </div>
            </div>
            <div class = "button-container">
                <div class = "link">
                    <a href = "">
                            <font-awesome-icon icon="fa-brands fa-google" size="2x"/>
                            <h2>Projects</h2>
                    </a>
                </div>
                <div class = "link">
                    <a href = "">
                            <font-awesome-icon icon="fa-brands fa-google" size="2x"/>
                            <h2>Resume</h2>
                    </a>
                </div>
            </div> 
        </div>
        <div class = "second-container">
            <div class = "about">
                <h3> About  </h3>
                <p> I have a passion for designing, scaling, and maintaining software. I obtained an Electrical Engineering degree from Carleton University
					where my co-op experience was hardware focused. After working in the idustry for some time, I decided to pursue a career in software engineering.
                    I am currently pursing a part time master's degree in Applied Artificial Intelligence at University of Ottawa. 
                </p>
            </div>
            <div class = "skills">
                <h3> Skills & Technologies</h3>
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
        background-color:white;
        border-radius: 5%;
    }
    .first-container{
        background-color: white;
        width: 25%;
        padding: 2.5%;
        
    }
    .second-container {
        background-color:white;
        width: 75%;
        padding: 2.5%;
        margin: 2.5%;
    }
    .second-container h3 {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .profile {
        margin-bottom: 25%;
    }
    .profile img {
        height: 7rem;
        border-radius: 50%;
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
        background-color: royalblue;
        margin: 0.75rem;
        border-radius: 10px;
        box-shadow: 0.2rem 0.2rem #888888;
        padding: 0;
    }

    .link a:hover {
        background-color: white;
        transition: 0.3s;
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
    .skill {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
    }
    .skill p {
        padding-left: 0.5rem;
    }
    .logos img {
        height: 2rem;
    }
    .button-container{
        margin-top: 25%; 
       
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
    @media screen and (max-width: 600px){
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