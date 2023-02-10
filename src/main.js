import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-vue/dist/bootstrap-vue"
import "bootstrap-icons/font/bootstrap-icons.css"
import { createApp } from 'vue'
import App from './App.vue'
 
import './assets/css/style.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component 
git add .
git commit -m ""
 git push -u origin main */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faHtml5, faJs, faPhp , faJava, faPython,faLinux, faBootstrap, faSymfony,faVuejs,faWindows,faWordpress,faGithub} from "@fortawesome/free-brands-svg-icons"


/* add icons to the library */
library.add(faUserSecret,faTwitter,faCss3Alt, faHtml5,faJs, faPhp,faJava, faPython,faLinux,faBootstrap, faWordpress,faSymfony,faVuejs,faWindows,faGithub)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
