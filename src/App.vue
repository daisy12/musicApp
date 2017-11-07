<template>
    <main>
      <v-header></v-header>
      <router-view></router-view>
      <v-footer></v-footer>
      <audio controls="controls" id="player" src="./src/assets/mp3/1.mp3" hidden="hidden">
	  </audio>
    </main>
</template>

<script>
  import vheader from './component/index/header.vue'
  import vfooter from './component/index/footer.vue'
  export default {
  	components:{
    	'v-header':vheader,
    	'v-footer':vfooter
  	} 
  }
</script>

