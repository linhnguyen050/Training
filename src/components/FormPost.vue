<template>
        <div class="default1">
            <div class="default1-one"> 
                <div class="default1-one-input">
                    <input type="text" name="usrname" v-model="title" placeholder="...."> 
                    <p v-if="title == '' && isClick"> Title không được để trống</p> 
                </div> 


            <div class="default1-one-a">
                <textarea rows="4" cols="50" name="comment" form="usrform" v-model="contents" placeholder=" ..."> 
            
            </textarea>
            <p v-if="contents == '' && isClick">Contents không được để trống</p>
            <p v-if="msg">{{msg}}</p>
            </div>
            </div> 
                <button @click="submit">
                   <font-awesome-icon icon="paper-plane"/>
                </button>
        </div>
</template>
<script>
import axios from 'axios'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//import LayoutDefault from '@/layout/Default'
export default {
    components: {
        FontAwesomeIcon,
       
    },
    data: function() {
        return {
            title:'',
            contents: '',
            isClick: false,
            msg:''

        }
    },
     props: ['afterSubmitForm'],


    methods: {
        submit: function() {
            this.isClick = true
            const that = this
            if(this.contents != '' && this.tittle != '') {
                const dataPost = {
                    title: this.title,
                    content: this.contents,
                    auth_id: localStorage.getItem('userId'),
                    thumb_url: 'kikiki',
            }
                axios.post('http://localhost:9000/api/post', dataPost)
                    .then(function(ketqua){
                        if(ketqua.data.success == true) {
                            that.msg = 'Post Thanh Cong'
                            that.afterSubmitForm()
                            
                        }
                        else{ 
                            that.msg = 'Khong Thanh Cong'
                        }
                    })

                }
            
        },
        updateItems: async function () {
            const ketqua = await axios.get('http://localhost:9000/api/post')
            if(ketqua.status == 200){
                this.items = ketqua.data
             }
        }
    },
}
</script>