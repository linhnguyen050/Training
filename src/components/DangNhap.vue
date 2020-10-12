<template>
        <div class="login">
            <div class="login-main">
                <div class="main">
                    <h1>DANH NHAP TEAM ICON</h1>
                </div>
                <div v-if="error">{{error}}</div>
                <div class="main-one">
                    <div class="gruop-input">
                        <font-awesome-icon icon="envelope" />
                        <input  type="text" placeholder="UserName" v-model="username">
                    </div>
                    <p v-if="username == '' && isClick">Email khong duoc de trong</p>
                    <div class="gruop-input">
                    <font-awesome-icon icon="lock" />
                    <input type="password" placeholder="Password" v-model="password">
                    </div>
                    <p v-if="password =='' && isClick">Password khong duoc de trong</p>
                </div>
                <div class="main-two">
                    <a href="#">Forget Password</a>
                </div>
                <div class="main-1">
                <h5> or use your email account</h5>
            </div>
            </div>
            <div class="main-bar">
                <button @click="dangnhap">Login</button>
            </div>
        </div>
</template>
<script>
    import axios from 'axios'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    export default{
        name: 'App',
        components: {
            FontAwesomeIcon,
        },
        data: function(){
            return {
                username: '',
                password: '',
                isClick: false,
                error:''
            }
        },
        methods: {
            dangnhap: function() {
                this.isClick = true
                const that = this
                if(this.usersname != '' && this.password != ''){
                    const dataPost = {
                        username: this.username,
                        password: this.password,
                    }
                    axios.post('http://localhost:9000/api/auth', dataPost)
                    .then(function(ketqua){
                        if(ketqua.data.success == true){
                            localStorage.userId = ketqua.data.data.id
                            that.$router.push('posts')
                        }
                        else{
                            that.error = 'thong tin sai'
                        }
                    })
                }    
            }

        }


    }
</script>