<template>
    <layout-default>
        <div class="comment">
           
                <FormComponent :after-submit-form="updateItems"/>
           
        </div>
        <div class="layout-bar">
                <PostComponent v-for="(comment,ind) in items" :key="ind" :post-data= "comment"/>
            </div>
    </layout-default>
</template>

<script>
import axios from 'axios'
import LayoutDefault from '@/layout/Default'
import FormComponent  from '@/components/FormComponent'
import PostComponent from '@/components/PostComponent'
export default {
    components: {
        LayoutDefault,
        FormComponent  ,
        PostComponent,
     
    },
   
    data: function() {
        return {
            items: [],
        }
    },
    async created() {
        const ketqua = await axios.get('http://localhost:9000/api/comment')
            this.items = ketqua.data
    },
      methods : {
        updateItems: async function() {
            const ketqua = await axios.get('http://localhost:9000/api/comment')
            if(ketqua.status == 200){
                this.items = ketqua.data
            }
        }
    }

}
</script>