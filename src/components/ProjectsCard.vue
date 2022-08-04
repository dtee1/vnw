<template>
    <div class = "main-container">
        <div class="project-card" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
            <h2>{{projectData.ProjectsArray[index].Title}}</h2>
            <img :src = "projectData.ProjectsArray[index].Image" alt = "">
            <p> {{projectData.ProjectsArray[index].About}}</p>
            <div class = "links">
                <a href = "projectData.ProjectsArray[index].Link"><img src = "" alt = ""></a>
                <a href = "projectData.ProjectsArray[index].Link"><img src = "" alt = ""></a>
            </div>
        </div>
    </div>
</template>

<script>
import jsonData from "/projects.json"
export default {
    data(){
        return{
            projectData: jsonData
        }
    }
}
</script>

<style scoped>
    .main-container { 
        margin-top: 1%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color:black;
        color: white;
    }
    .project-card {
        margin: 1rem;
        padding: 2rem;
        flex-wrap: 0 0 40%;
        border-radius: 2rem; 
    }
    .project-card img {
        height: 10rem;
    }

    .links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }
    .links img {
        height: 2rem;
    }
</style>