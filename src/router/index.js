import Vue from 'vue'
//Dòng này để import vue-router
import Router from 'vue-router'
import Users from '@/components/Users'
import Comments from '@/components/Comments'
import Posts from '@/components/Posts'
import DangNhap  from '@/components/DangNhap'
import Header from '@/components/Header'
import FormPost from '@/components/FormPost'
import PostComponent from '@/components/PostComponent'



Vue.use(Router)

export default new Router({
  routes: [ // bao gồm danh sách route
    {
      path: '/users', ///path của route
      name: 'Users', // tên route
      component: Users // component route sử dụng
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
        path: '/comments',
        name: 'comments',
        component: Comments
    },
    {
        path:'/',
        name:'dangnhap',
        component: DangNhap
    },
    {
        path: '/header',
        name: 'header',
        component: Header
    },
    {
      path: '/formPost ',
      name: 'formpost ',
      component: FormPost
    },
    {
      path:'/postcomponent',
      name: 'postcomponent',
      component: PostComponent
    },
    
    
  ]
})