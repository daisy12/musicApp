import VueRouter from 'vue-router';
import my from '../component/nav/my.vue'
import music from '../component/nav/music.vue';
import dynamic from '../component/nav/dynamic.vue';
import play from '../component/play/play.vue'
import playTwo from '../component/play/playTwo.vue'

import recommend from '../component/music/recommend.vue'
import billboard from '../component/music/billboard.vue'
import songsheet from '../component/music/songsheet.vue'
import broadcasting from '../component/music/broadcasting.vue'
import more from '../component/more/more.vue'
import install from '../component/slide/install.vue'
import search from '../component/slide/search.vue'
import local from '../component/local/local.vue'
import song from '../component/local/song.vue'
import files from '../component/local/file.vue'
import singer from '../component/local/singer.vue'
import album from '../component/local/album.vue'
import lately from '../component/lately/lately.vue'

import singList from '../component/singList/singList.vue'
import login from '../component/login/login.vue'
import register from '../component/register/register.vue'
import user from '../component/user/user.vue'
import registerTwo from '../component/register/registerTwo.vue'
import registerThree from '../component/register/registerThree.vue'

import detail from '../component/detail/detail.vue'

export default new VueRouter({
	routes:[
		{path:'/my',component:my},
		{
			path:'/music',
			component:music,
			children:[
				{path:'/recommend',component:recommend},
				{path:'/billboard',component:billboard},
				{path:'/songsheet',component:songsheet},
				{path:'/broadcasting',component:broadcasting},
				{path:'/',redirect:'/recommend'}
			]
		},
		{path:'/play',component:play},
		{path:'/playTwo/:myid',component:playTwo},
		{path:'/install',component:install},
		{path:'/search',component:search},
		{path:'/dynamic',component:dynamic},
		{path:'/more',component:more},
		{
			path:'/local',
			component:local,
			children:[
				{path:'/song',component:song},
				{path:'/file',component:files},
				{path:'/singer',component:singer},
				{path:'/album',component:album},
				{path:'/',redirect:'/song'}
			]
		},
		{path:'/lately',component:lately},
		{path:'/singList',component:singList},
		{path:'/login',component:login},
		{path:'/user',component:user},
		{path:'/register',component:register},
		{path:'/registerTwo',component:registerTwo},
		{path:'/registerThree',component:registerThree},
		{path:'/detail',component:detail},
		{path:'/',redirect:'/music'}
	]
})