<template>  
 
<div class="rentgen">

<div class="menuRentgen">
<img src="~assets/usluge/rtg.jpeg" class="rentgenImg"/>
<div class="naslovRentgen">
<p class="opisRentgen">
Rentgenska dijagnostika je postala nezaobilazna svakodnevica suvremene stomatološke prakse. Dijagnostika karijesa, upalih promjena oko korijena zuba, cisti, procjena stanja potpornih tkiva zuba, procjena zuba nosača protetskih nadomjestaka samo su neke indikacije koje su danas nezamislive bez pomoći rentgenskih snimaka.
</p>
<p class="opisRentgen">
Današnja rentgenska tehnologija u stomatologiji je uvelike napredovala te je zračenje svedeno na minimum i omogućena je češća upotreba rentgena u svakodnevnoj stomatologiji. Naravno da se još uvijek pacijent ne izlaže nepotrebno rentgenskom zračenju, već samo u indiciranim slučajevima
</p>
<p class="opisRentgen">
Ordinacija Amanović koristi RTG uređaj najnovije generacije koji koristi tehnologiju visokofrekventne istosmjerne struje u proizvodnji RTG zraka, koje su strogo usmjerene i ograničene na područje koje se snima. <span class="text-secondary">RTG uređaj XGenus DC</span> proizvođača '' de Götzen'' podliježe normama Europske unije u pogledu zračenja, te omogućuje smanjenje doze zračenja za 35 % u odnosu na starije AC uređaje na izmjeničnu struju.
</p>
<p class="opisRentgen">
U ordinaciji Amanović možete snimiti klasične RTG zubne retroalveolarne snimke do 3 susjedna zuba po filmu, te zagrizne snimke za dijagnozu karijesa.
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
	   title: "Rentgen",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Rentgen zubi ordinacije dr. Nedjeljko Amanović"

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
$home-image: url(~assets/background.jpg);
@mixin easeOut {
  transition: all 0.5s ease-out;
}

.rentgen{
	padding: 10vh;
	background: rgba(lighten($primary-color,5),0.9);
	.opisRentgen{
		color: #fff;

	}
	.menuRentgen{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'rentgenImg naslovRentgen';
	 
		grid-template-columns: repeat(2, 1fr);
	
	.rentgenImg{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
	

		}
	.naslovRentgen{
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

 

.radovi{

	margin:0;

}
 
 
}
// Tablets & Small Laptops
@media screen and (min-width:501px) and (max-width: 768px){
 
 .prevencija{

	margin:0;

}

}

//Desktops & Laptops
@media screen and (min-width: 769px) and (max-width: 1170px){

 

}

//Widescreens
@media screen and (min-width: 1171px){

}

</style>



