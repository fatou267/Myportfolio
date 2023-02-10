<script>
import HomeView from './HomeView.vue'
import SkillsView from './SkillsView.vue'
import WorkView from './WorkView.vue'
import ContactView from './ContactView.vue'
import CourseView from './CourseView.vue'

const routes = {
  'about': HomeView,
  'skills': SkillsView,
  'work':WorkView,
  'contact': ContactView,
  'course' : CourseView
}

export default {
  name:'MenuView',
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] 
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		this.currentPath = window.location.hash
		})
  }
}
// #bd6513  #ffd871 #000000 <component :is="currentView" />
</script>

<template>
<nav class="navbar navbar-expand-lg fixed-top  bg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="../assets/logo1.png" alt="logo" width="90"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-light"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav me-4">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#about">A propos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#course" >Parcours</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Compétences</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#work">Projets</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>







<style scoped>
.bg{
    background-color: #000000 ;
    color: #bd6513 ;
}
a{
    color: #bd6513 ;
}
a:hover{
  color: #ffd871;
}
a:active{
  color: #ffd871;
}
</style>