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
$home-image: url('~assets/background.jpg');
$background-opacity: 0.9;

@mixin easeOut {
  transition: all 0.5s ease-out;
}
 
* {
  box-sizing: border-box;
}

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

.naslovna {
  color: #fff;
  padding: 4rem;


// Headings
 
h1{
  margin: 0;
  font-weight: 400;
  margin-top: 4vh;

  &.lg-heading {
    font-size: 6rem;
    margin-bottom:-1.2rem;
  }
}

h1::first-letter{
	font-weight: bold; 
	}
h2::first-letter{
	font-weight: bold;
	}
h2.sm-heading {
    font-weight: 400;
    margin-bottom: 1rem;
    padding: 0.2rem 1rem;
    background: rgba(lighten($primary-color, 2), 0.5);
 
}
}
.text-secondary{
	color: $secondary-color;
}
.icons{
 	 
	font-size: 2rem;
	a{
		color: #fff;
		 
		&:hover{
			@include easeOut;
			color: $secondary-color;
			}
		}
	}
//Smartphones
@media screen and (max-width: 500px){
.naslovna{
	align-items: center;
	text-align: center;
	.lg-heading{
		 
		line-height: 1;
		margin-bottom: 1rem;
		}
	h1.lg-heading{
		font-size: 4rem;
	}
	h1.sm-heading{
		font-size: 2rem;
		}
	
}

 
}
// Tablets & Small Laptops
@media screen and (max-width: 900px){
.naslovna{
	align-items: center;
	text-align: center;
	.lg-heading{
		 
		line-height: 1;
		margin-bottom: 1rem;
		}
	h1.lg-heading{
		font-size: 4rem;
	}
	h1.sm-heading{
		font-size: 2rem;
		}
	
}

 
}

//Desktops & Laptops
@media screen and (min-width: 901px) and (max-width: 1170px){
 

}

//Widescreens
@media screen and (min-width: 1171px){

}
 
</style>
