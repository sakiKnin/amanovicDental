<template>
<div class="naslovna">
   <h1 class="lg-heading">
      Amanović
      <span class="text-secondary">Dental</span>
    </h1>
    <h2 class="sm-heading">
    	<p class="opisNaslovna">
	Ordinacija dentalne medicine <span class="text-secondary">Nedjeljko Amanović, dr. med. dent</span> je privatna ordinacija, koja je ujedno i ugovorna stomatološka ordinacija HZZO-a od <span class="text-secondary">01.08.2008.</span>
	</p> 
	<p class="opisNaslovna">
	 U ordinaciji pružamo sve stomatološke usluge iz košarice osnovnog osiguranja HZZO-a, te usluge izvan 		     		 košarice osnovnog osiguranja.
        </p> 
	<p class="opisNaslovna">
        Vaš dentalni tim vodi <span class="text-secondary">Nedjeljko Amanović, med. dent., </span>sa asistenticom <span class="text-secondary">Nevenka Kurbalija ms.</span>
	</p>
    </h2>
    <div class="icons">
      <a href="https://www.facebook.com/Ordinacija-dentalne-medicine-dr-Amanovi%C4%87-1530440350600836/" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']"/></i></a>
      <a href="https://www.linkedin.com/in/nedjeljko-amanovic-39552137" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></i></a>
    </div>
     <div class="novosti">
	<marquee scrolldelay="60">&#128968 Sve vrste implantata i implantoproetskih radova radimo u suradnji s vrhunskim kirurškim timom njemačke tvrtke Bredent &#128968 Izbjeljivanje BT COOL led lampom, potpuno sigurno bez zagrijavanja, brzo i efikasno do bijelog osmjeha &#128968 IPS e.max - potpune staklokeramičke krunice i ljuskice za vrhunsku estetiku &#128968 MDI Implant System - Mini dentalni implantati za stabilizaciu proteza i pojedinačne zube &#128968 </marquee>
     </div>
      <div class="rotateLogo">
    		<a href="http://ordinacija-amanovic.hr/" target="_blank" class="logo"> </a>
		<a href="https://www.hzzo.hr/" target="_blank" class="hzzo"> </a>
		<a href="https://dental-ratio.com/" target="_blank" class="drs"> </a>
		<a href="https://najdoktor.com/nedjeljko-amanovic/ocijeni-doktora/d13264" target="_blank" class="najDoktor"> </a>	 
      </div>
<div class="footer">Copyright &copy; 2020</div>
</div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {

   computed: mapGetters(['getNaslovnaFlag']),

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

 

.naslovna {
  color: #fff;
  padding: 1rem;
  
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
    text-align: center;
    font-weight: 400;
    margin-bottom: 1rem;
    padding: 0.2rem 1rem;
    background: rgba(lighten($primary-color, 2), 0.5);
    .opisNaslovna{
			font-size: 2rem;
			}
 
}

.rotateLogo{
	display: flex;
    	align-items: center;
    	justify-content: center;
	padding: 0.2rem;
		 
	.logo{
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		transition: transform 1s ease-in-out;
		height:91px;
		width:200px;
		background: url('~assets/logo_small.jpg');
	 }
	.hzzo{
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		transition: transform 1s ease-in-out;
		height:91px;
		width:200px;
		background: url('~assets/hzzo_logo_small.jpeg');
	 }
	.drs{
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		transition: transform 1s ease-in-out;
		height:91px;
		width:200px;
		background: url('~assets/DRS_logo.png');
	 }
	 .najDoktor{
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		transition: transform 1s ease-in-out;
		height:91px;
		width:200px;
		background: url('~assets/logo-najdoktor_small.png');
	 }
	 .logo:hover {
  		transform: rotateZ(360deg);
	}
	 .hzzo:hover {
  		transform: rotateZ(360deg);
	}
	 .drs:hover {
  		transform: rotateZ(360deg);
	}
	 .najDoktor:hover {
  		transform: rotateZ(360deg);
	}
}


.text-secondary{
	color: $secondary-color;
}
.icons{
 	text-align: center;
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

.footer{
	color: #fff;
	background: rgba(lighten($primary-color,5),0.9);
	text-align:center;
}
}



//Smartphones
@media screen and (max-width: 500px){


.naslovna{
	padding: 0.5rem;
	align-items: center;
	text-align: center;
	.lg-heading{
		line-height: 1;
		 margin-top: 2rem;
		}
	h1.lg-heading{
		margin-top: 6vh;
		font-size: 4rem;
	}
	h2.sm-heading{
		line-height: 1.2;	
		//font-size: 1rem;
		.opisNaslovna{
			font-size:15px;
			}
	}
 	.rotateLogo{
		
		display: grid;
		grid-gap: 0px;
		padding: 0.2rem;
		grid-template-areas:
	   		'logo hzzo drs najDoktor';
		grid-template-columns: repeat(4, 1fr);
	.logo{
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		transition: transform 1s ease-in-out;
		height:45px;
		width:80px;
		background: url('~assets/logo_smallSmall.jpg');
	 }
	.hzzo{
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		transition: transform 1s ease-in-out;
		height:45px;
		width:80px;
		background: url('~assets/hzzo_logo_ smallSmall.png');
	 }
	.drs{
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		transition: transform 1s ease-in-out;
		height:45px;
		width:80px;
		background: url('~assets/DRS_logo_smallSmall.png');
	 }
	 .najDoktor{
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		transition: transform 1s ease-in-out;
		height:45px;
		width:80px;
		background: url('~assets/logo-najdoktor_smallSmall.png');
	 }
	 .logo:hover {
  		transform: rotateZ(360deg);
	}
	 .hzzo:hover {
  		transform: rotateZ(360deg);
	}
	 .drs:hover {
  		transform: rotateZ(360deg);
	}
	 .najDoktor:hover {
  		transform: rotateZ(360deg);
	}

	}
	.novosti{
	background: rgba(lighten($primary-color,2), 0.5);
	margin-top: 1rem;
	font-size: 13px;
	}
	.footer{
		font-size: 13px;
		}
}
  
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
