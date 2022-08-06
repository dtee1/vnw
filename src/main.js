import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faHtml5} from '@fortawesome/free-brands-svg-icons'
import { faCss3} from '@fortawesome/free-brands-svg-icons'
import { faVuejs} from '@fortawesome/free-brands-svg-icons'
import { faPython} from '@fortawesome/free-brands-svg-icons'
import { faJs} from '@fortawesome/free-brands-svg-icons'
import { faBook} from '@fortawesome/free-solid-svg-icons'
import { faFile} from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin, faGoogle, faHtml5, faCss3, faVuejs, faPython, faJs, faBook, faFile, faGraduationCap);
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


