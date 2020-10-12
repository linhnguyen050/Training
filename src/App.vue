<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock,faEnvelope,faSearchPlus,faAlignCenter,faUsers,faComments,faMailBulk,faPaperPlane,faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'


library.add([faLock,faEnvelope,faSearchPlus,faAlignCenter,faUsers,faComments,faMailBulk,faPaperPlane,faCloudUploadAlt])
import ('@/assets/app.css')
export default {
  name: 'App',
  components: {
    
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
