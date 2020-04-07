<template>  
 
<div class="terapijaKarijesa">

<div class="menuTerapijaKarijesa">
<img src="~assets/usluge/terapijaKarijesa.jpg" class="terapijaKarijesaImg"/>
<div class="naslovTerapijaKarijesa">
<p class="opisTerapijeKarijesa">
<span class="text-secondary">Karijes</span> je bolest uzrokovana bakterijama u zubnim naslagama (plaku) koja kao rezultat ima destrukciju tvrdog zubnog tkiva i konačno neliječen dovodi do potpunog razaranja zuba, upale pulpe zuba odnosno do kompliciranijih stanja zuba i potpornog tkiva. Posljedice su poremećaj funkcije, estetike, bol...
Karijes je najčešći uzrok oštećenja zuba.
</p>
<p class="opisTerapijeKarijesa">
Prvi korak u terapiji karijesa je prevencija, odnosno edukacija pacijenta kako spriječiti karijes. Kada je oštećenje zuba već nastalo nastupa čišćenje karijesa i restauracija (nadoknada) izgubljenih dijelova zuba. Ovisno o opsegu i prirodi oštećenja, higijeni usne šupljine, stanju preostalih struktura u usnoj šupljini i o drugim faktorima, postoji nekoliko načina i materijala da se vrati izgubljena funkcija i estetika.
</p> 
</div>
</div>
<div class="button" @click="back()"><div class="buttonName">back</div></div>
<div class="footer">Copyright &copy; 2020</div>
</div>
</div> 

</template>

<script>

import { mapGetters } from 'vuex';

export default{

computed: mapGetters(['getUslugeFlag']),

   head(){
	return {
	   title: "Terapija karijesa",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Terapija karijesa ordinacije dr. Nedjeljko Amanović"

		}
	     ]
	}
   },
methods:{
	back(){
		this.$router.push('/usluge');
		}
	}

}

</script>

<style lang="scss">
$primary-color: #038cfc;
$secondary-color: #eece1a; 
 
@mixin easeOut {
  transition: all 0.5s ease-out;
}

.terapijaKarijesa{
	padding: 10vh;
	background: rgba(lighten($primary-color,5),0.9);
	height: 100vh;
	.opisTerapijeKarijesa{
		color: #fff;

	}
	.menuTerapijaKarijesa{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'terapijaKarijesaImg naslovTerapijaKarijesa';
	 
		grid-template-columns: repeat(2, 1fr);
	
	.terapijaKarijesaImg{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
	

		}
	.naslovTerapijaKarijesa{
		 background: lighten($primary-color, 5);
    		 padding: 0.2rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		 

		}
	}
}
 
.button {
  background-color: $secondary-color;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  cursor: pointer;
	.buttonName{
		font-size: 1.2rem;
		&:hover{
			@include easeOut;
		}
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
@media screen and (max-width: 768px){
 
.terapijaKarijesa{
	padding: 2vh;
	font-size: 0.6rem;
	height: 100vh;
	 
	.menuTerapijaKarijesa{
		display: grid;
		grid-gap: 5px;
		grid-template-areas:
	   		'terapijaKarijesaImg'
			'naslovTerapijaKarijesa';
	 
		grid-template-columns: repeat(1, 1fr);
		
		.terapijaKarijesaImg{
	 		height: 200px;
			width: 200px;
	

		}
	 
	}
}

}

//Desktops & Laptops
@media screen and (min-width: 769px) and (max-width: 1170px){

 

}

//Widescreens
@media screen and (min-width: 1171px){

}

</style>



