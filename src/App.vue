<template>
  <div id="app">
  <main >
            <MenuView/>
          
            <HomeView id="about"/>
           
            <CourseView id="course"/>
            
            <SkillsView id="skills"/>
          
            <WorkView id="work"/>
          
            <ContactView id="contact"/>
           
            
            
</main>
<footerView />
</div> 
</template>

<script>
import MenuView from './components/MenuView.vue';
import HomeView from './components/HomeView.vue';
import CourseView from './components/CourseView.vue';
import WorkView from './components/WorkView.vue';
import ContactView from './components/ContactView.vue';
import SkillsView from './components/SkillsView.vue';
import footerView from './components/footerView.vue';

export default {
  name: 'App',
  components: { MenuView, HomeView, CourseView, WorkView, ContactView, SkillsView, footerView}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #bd6513;
  margin-top: 150px;
  text-align: center;
  background-color: #f5e5b7;
}
</style>
