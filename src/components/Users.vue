<template>
        <div class="main1">
            <div class="main1-two">
                 <img src="@/assets/img.jpg"  width="45px" height="45px" v-for="(user,ind) in items" :key="ind" :post-data ="user"  >
            </div>
            <div class="ok">
                <UserComponent v-for="(user,ind) in items" :key="ind" :post-data ="user"/>
            </div>
        </div>
</template>
<script>
//import FormPost from '@/components/FormPost'
//import Images from '@/components/Images'
import UserComponent from '@/components/UserComponent'
import axios from 'axios'
export default {
    components: {
        UserComponent,
        
        
    },
    data : function(){
        return {
            items: [],

            
        }
    },
    async created(){
        const ketqua = await axios.get('http://localhost:9000/api/user')
            if(ketqua.status == 200) {
                this.items = ketqua.data
            }
    }
    
}
</script>