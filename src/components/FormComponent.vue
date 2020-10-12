<template>
        <div class="default2">
            <div class="defaultone">
            <input type="text" name="usrname" v-model="title" placeholder="vui lòng nhập">  
            <div >
                <p v-if="title == '' && isClick">
                    Bạn chưa nhập title
                </p>
            </div>
            </div>
            <div class="defaultone">
            <select v-model="selected">
                <option v-for="(post,ind) in items" :value="post.id" :key="ind">
                        {{post.title}}
                </option>
            </select>
           
                    <p v-if="selected == '' && isClick ">
                        Kích vào để chon
                    </p>
            
            </div>
            <div class="defaultone">
            <textarea rows="5" cols="40" name="comment" form="usrform" v-model="content" placeholder="vui lòng nhập"> 
           
            </textarea>
            <p v-if ="content == '' && isClick ">Bạn chưa nhập Content</p>
            <p v-if="msg" >{{msg}}</p>
            <button @click="submit">
                   <font-awesome-icon icon="paper-plane"/>
                </button>
            <br>
            </div>
            
        </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
export default {
    components: {
        FontAwesomeIcon,
    },
    data: function() {
        return {
            items:[],
            title: '',
            content: '',
            msg: '',
            isClick: false ,
            selected: '',
        }
    },
    props: ['afterSubmitForm'],

        async created(){
            const ketqua = await axios.get('http://localhost:9000/api/post')
                if(ketqua.status == 200){
                    this.items = ketqua.data
                }

        },

    methods : {
        submit: function() {
            const that = this
            this.isClick = true
            if(this.content != '' && this.title != '' && this.selected != '') {
                const dataPost = {
                    title: this.title,
                    content: this.content,
                    auth_id: localStorage.getItem('userId'),
                    thumb_url: 'ojojo',
                    post_id: this.selected,
                }
                axios.post('http://localhost:9000/api/comment' , dataPost)
                    .then(function(ketqua){
                        if(ketqua.data.success == true){
                            that.msg = 'Comment Thành Công'
                            that.afterSubmitForm()
                        }
                        else{
                            that.msg = 'Không Thành Công'
                        }
                    })
            }
        },

    }

}
</script>