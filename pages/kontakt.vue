<template>  
<div class="kontakt">
<div class="menuKontakt">
<div class="kartaImage">
<div v-bind:class="classKarta" @click="togglePic()"></div>
</div>
<div class="kontakt-heading">
	<p class="opisKontakt">
	Ordinacija dentalne medicine <span class="text-secondary">Nedjeljko Amanović, dr. med. dent</span> je privatna ordinacija, koja je ujedno i ugovorna 		stomatološka ordinacija HZZO-a od <span class="text-secondary">01.08.2008.</span>
	</p> 
	<p class="opisKontakt">
	 U ordinaciji pružamo sve stomatološke usluge iz košarice osnovnog osiguranja HZZO-a , te usluge izvan 		     		 košarice osnovnog osiguranja.
        </p> 
	<p class="opisKontakt">
        Vaš dentalni tim vodi <span class="text-secondary">Nedjeljko Amanović, med. dent., </span>sa asistenticom <span class="text-secondary">Nevenka Kurbalija ms.</span>
	</p>
</div>
</div>
<nuxt-link to="/cjenik" class="navLink">Cjenik</nuxt-link>
<div class="boxes">
<div><span class="text-secondary">Mobitel: </span> (+385) (0)917861187</div> 
<div><span class="text-secondary">Telefon: </span> (+385) (0)22492111</div> 
<div><span class="text-secondary">Adresa: </span> 22300 Knin, Meštrovićeva 7</div>
</div> 
<div class="radnoVrijeme">
	<div><span class="text-secondary">Pon, Sri:</span> 13:00 - 19:30</div> 
	<div><span class="text-secondary">Uto, Čet, Pet:</span> 07:00 - 14:30</div> 
	<div><span class="text-secondary">Subotom:</span> 07:00 - 12:00  (prva subota u mjesecu)</div>
</div>
<div class="footer">Copyright &copy; 2020</div>
</div>
</template>

<script>

import { mapGetters } from 'vuex';

export default{

computed: mapGetters(['getKontaktFlag']),

data(){
	return{
		classKarta:{
			malaKarta: true,
			velikaKarta:false
			
			}

		}

},

   head(){
	return {
	   title: "Kontakt",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Kontakt ordinacije dr. Nedjeljko Amanović"

		}
	     ]
	}
   },
methods:{
	 togglePic(){
		 this.classKarta.malaKarta=!this.classKarta.malaKarta;
		 this.classKarta.velikaKarta=!this.classKarta.velikaKarta;		
		}
	}

}

</script>

<style lang="scss">
$primary-color: #038cfc;
$secondary-color: #eece1a; 
$home-image: url(~assets/background.jpg);
@mixin easeOut {
  transition: all 0.5s ease-out;
}

.kontakt{
	padding: 10vh;
	background: rgba(lighten($primary-color, 5), 0.9);
	color: #fff;

	.menuKontakt{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'kartaImg kontakt-heading';
	 
		grid-template-columns: repeat(2, 1fr);
	
	.kontaktImg{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
	

		}
	.kontakt-heading{
		 background: lighten($primary-color, 5);
    		 padding: 0.2rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		 

		}
	}
	.malaKarta{
		width: 150px;
        	height: 150px;
		background:url('~assets/karta-mala.jpeg');
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		cursor: pointer;
		}
	.velikaKarta{
		width: 300px;
        	height: 300px;
		background:url('~assets/karta.jpeg');
  		background-size: cover;
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		cursor: pointer;
		}
	.navLink{
		font-size: 1.5rem;
		padding: 0.5rem;
		background: rgba(lighten($primary-color, 5), 0.9);
		color:$secondary-color;
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		text-decoration: none;
		}
	}

.footer{
	color: #fff;
	background: rgba(lighten($primary-color,5),0.9);
	text-align:center;
	 
}

 
//Smartphones
@media screen and (max-width: 500px){

 

 
 
 
}
// Tablets & Small Laptops
@media screen and (min-width:501px) and (max-width: 768px){
 
 

}

//Desktops & Laptops
@media screen and (min-width: 769px) and (max-width: 1170px){

 

}

//Widescreens
@media screen and (min-width: 1171px){

}

</style>



