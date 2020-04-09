<template>
  <div class="main">
    <appHeader/>
    <nuxt />
  </div>
</template>

<script>
import appHeader from '../components/appHeader';

export default{

components:{
	appHeader
}

}
</script>
<style lang="scss">

$primary-color: #038cfc;
$secondary-color: #eece1a; 
$home-image: url(~assets/background.jpg);
$background-opacity: 0.9;

body {
  background: $home-image;
  background-attachment: fixed;
  background-size: cover;
  color: $primary-color;
  height: 100%;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
}



@media screen and (max-width: 500px){
body{
	 background: url('~assets/background_small.jpg');
  	 background-attachment: fixed;
  	 background-size: cover;
}

 }

</style>
