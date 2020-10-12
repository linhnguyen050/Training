<template>
    <layout-default>
        <div class="default">
           
                <FormPost  :after-submit-form="updateItems"/>
           
        </div>
        <div class="layout-bar">
                <PostComponent v-for="(post,ind) in items" :key="ind" :post-data= "post"/>
            </div>
    </layout-default>
</template>
<script>
import axios from 'axios'
import LayoutDefault from '@/layout/Default'
import FormPost from '@/components/FormPost'
import PostComponent from '@/components/PostComponent'

export default {
    components: {
       LayoutDefault,
        FormPost,
        PostComponent,
    },
    data: function() {
        return {
            items:[],
        }
    },
    async created() {
        const ketqua = await axios.get('http://localhost:9000/api/post')
            if(ketqua.status == 200){
                this.items = ketqua.data
            }
    },
    methods : {
        updateItems: async function() {
            const ketqua = await axios.get('http://localhost:9000/api/post')
            if(ketqua.status == 200){
                this.items = ketqua.data
            }
        }
    }
  
}
</script>