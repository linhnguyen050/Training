<template>
    <div class="head">
        <div class="header" >
           <Header/>
        </div>
            <div class="layout">
                <div class="left-main">
                    <ul>
                        <li> 
                            <font-awesome-icon icon="users" />
                            Users
                        </li>
                        <li>
                            <font-awesome-icon icon="comments" />
                            <router-link to="/posts">Posts</router-link>
                        </li>
                        <li>
                           <i> <font-awesome-icon icon="mail-bulk" /></i>
                            <router-link to="/comments">Comments</router-link>
                        </li>
                    </ul>
                </div>
                <div class="right-main">
                    <Users/>
                </div>
                 <main class="LayoutDefault__main">
                     <slot/>
                </main>
         </div>
    </div>
</template>
<script>
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Users from '@/components/Users'
import Header from '@/components/Header'
export default {
    components: {
        Header ,
        Users, 
        FontAwesomeIcon,
        
    }
    
}
</script>