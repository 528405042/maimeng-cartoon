import Vue from 'vue'
import Router from 'vue-router'
import Comic from '@/components/Comic'
import Novel from '@/components/Novel'
import Community from '@/components/Community'
import Bookcase from '@/components/Bookcase'
import Recommend from '@/components/Recommend'
import Category from '@/components/Category'
import Topics from '@/components/Topics'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/comic', name: 'Comic', component: Comic},
    {path: '/novel', name: 'Novel', component: Novel},
    {path: '/community', name: 'Community', component: Community},
    {path: '/bookcase', name: 'Bookcase', component: Bookcase},
    {path: '/recommend', name: 'Recommend', component: Recommend},
    {path: '/category', name: 'Category', component: Category},
    {path: '/topics', name: 'Topics', component: Topics}

  ]
})

