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

.main{
	padding:0rem;

}
 

</style>
