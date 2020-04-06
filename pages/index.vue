<template>
<div class="naslovna">
   <h1 class="lg-heading">
      Amanović
      <span class="text-secondary">Dental</span>
    </h1>
    <h2 class="sm-heading">
    Ordinacija dentalne medicine dr. Nedjeljko Amanović
    </h2>
    <div class="icons">
      <a href="https://www.facebook.com/nedjeljkoa" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']"/></i></a>
      <a href="https://www.linkedin.com/in/nedjeljko-amanovic-39552137" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></i></a>
    </div>
</div>
</template>

<script>
export default {

   head(){
	return {
	   title: "Amanović dental",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Web ordinacija dr. Nedjeljko Amanović"

		}
	     ]
	}
   }
  
}
</script>

<style lang="scss">
$primary-color: #038cfc;
$secondary-color: #eece1a; 
$home-image: url(~assets/background.jpg);
$background-opacity: 0.9;

@mixin easeOut {
  transition: all 0.5s ease-out;
}
 
* {
  box-sizing: border-box;
}

.naslovna {
  background: $home-image;
  background-attachment: fixed;
  background-size: cover;
  //background: $primary-color;
  
  color: #fff;
  height: 100%;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
  
  padding: 4rem;
  heagiht: 100%;
  overflow: hidden;
}

// Headings
 
h1{
  margin: 0;
  font-weight: 400;
  margin-top:10vh;
  &.lg-heading {
    font-size: 6rem;
  }

}
h2.sm-heading {
    font-weight: 400;
    margin-bottom: 2rem;
    padding: 0.2rem 1rem;
    background: rgba(lighten($primary-color, 2), 0.5);
 
}
.text-secondary{
	color: $secondary-color;
}
.icons{
 	margin-top:30vh;
	font-size: 2rem;
	a{
		color: #fff;
		padding:0.2rem;
		&:hover{
			@include easeOut;
			color: $secondary-color;
			}
		}
	}
 
 
</style>
