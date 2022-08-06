<template>
  <ClockWeb/>
  <MainCard/>
  <ProjectsCard/> 
</template>

<script>
import MainCard from './components/MainCard.vue'
import ProjectsCard from './components/ProjectsCard.vue'
import ClockWeb from './components/ClockWeb.vue'
export default {
  name: 'App',
  components: {  
    MainCard,
    ProjectsCard,
    ClockWeb
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,300&family=Roboto:ital,wght@1,100&display=swap');
#app {
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 0;
  padding-top:0;
  letter-spacing: 0.05rem;
}

</style>
