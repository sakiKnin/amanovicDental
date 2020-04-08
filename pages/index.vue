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
      <a href="https://www.facebook.com/Ordinacija-dentalne-medicine-dr-Amanovi%C4%87-1530440350600836/" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']"/></i></a>
      <a href="https://www.linkedin.com/in/nedjeljko-amanovic-39552137" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></i></a>
    </div>
     <div class="novosti">
	<marquee scrolldelay="60" behavor="alternate">Sve vrste implantata i implantoproetskih radova radimo u suradnji s vrhunskim kirurškim timom njemačke tvrtke Bredent</marquee>
     </div>
      <div class="rotateLogo">
    		<img class="rotating" src="~assets/logo.jpg" alt=".."/>
		<a href="https://www.hzzo.hr/" target="_blank"><img class="rotating" src="~assets/hzzo_logo.jpeg" alt=".."/></a>
		<a href="https://dental-ratio.com/" target="_blank"><img class="rotating" src="~assets/DRS_logo_small.png" alt=".."/></a>
		<a href="https://najdoktor.com/nedjeljko-amanovic/ocijeni-doktora/d13264" target="_blank"><img class="rotating" src="~assets/logo-najdoktor.png" alt=".."/></a>
      </div>
<div class="footer">Copyright &copy; 2020</div>
</div>
</template>

<script>
export default {

   head(){
	return {
	   title: "Amanović Dental",
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
  margin-top: 16vh;

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

.novosti{
	background: rgba(lighten($primary-color,2), 0.5);
	margin-top: 1rem;
}

//Smartphones
@media screen and (max-width: 500px){

body{
	 background: url('~assets/background_small.jpg');
  	 background-attachment: fixed;
  	 background-size: cover;
}

.naslovna{
	padding: 2rem;
	align-items: center;
	text-align: center;
	.lg-heading{
		line-height: 1;
		 margin-top: 2rem;
		}
	h1.lg-heading{
		font-size: 4rem;
	}
	h1.sm-heading{
		font-size: 2rem;
		}
	
}
 
 
}
.rotateLogo{
justify-content: center;
align-items: center;
text-align: center;
margin-top: 1rem;
.rotating {
	border-radius: 50%;
      	border: solid 3px $secondary-color;	
  	transition: transform 1s ease-in-out;
	}
 	.rotating:hover {
  	transform: rotateZ(360deg);
	}
}
.footer{
	color: #fff;
	background: rgba(lighten($primary-color,5),0.9);
	text-align:center;
}

// Tablets & Small Laptops
@media screen and (min-width: 501px) and (max-width: 900px){


 
.naslovna{
	padding: 2rem;
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
