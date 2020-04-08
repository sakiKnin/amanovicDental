<template>  
 
<div class="udlage">

<div class="menuUdlage">
<img src="~assets/usluge/udlaga.jpg" class="udlageImg"/>
<div class="naslovUdlage">
<p class="opisUdlage">
<span class="text-secondary">Dentalne udlage</span> su skupina dentalnoproteskih pomagala koja se stavljaju preko netaknutog zubnog niza da bi ispravili ili spriječili oštećenje zuba, zglobova i potpornih struktura.
</p>
<p class="opisUdlage">
Nejčešće korištene udlage su udlage za zaštitu zubi od noćnog škripanja (bruksizma). Velik broj ljudi iz različitih razloga ubrzano troši zubna tkiva kontaktom donjih i gornjih zubi . Najčešće stradaju prednji zubi te se ubrzano troše i lome. Razlozi mogu biti poremećaji u zagrizu (kontaktu među zubima), zglobni poremećaji, psihološki stres. Jednostavna naprava poput nagrizne udlage koja se nosi na gornjim zubima može zaustaviti oštećenje zubi. Udlaga se u ordinaciji dr. Amanovića izrađuje brzo prema otisku zubnog luka te je prozirna lagana i ugodna za nošenje zbog mekanog unutarnjeg sloja.
</p>
<p class="opisUdlage">
Sportske udlage se izrađuju u svrhu zaštite od traume zubi i potpornih tkiva zbog udaraca koji su mogući u raznim sportovima i zbog stiskanja zubi u naporu tijekom bavljenja sportom. Zog jačih sila sportske udlage su deblje i veće od običnih te pokrivaju i zubno meso. Također se brzo izrađuju te su mogući različiti uzorci boja.
</p>
<p class="opisUdlage">
Terapijske udlage služe olakšavanju tegoba koje pacijenti imaju sa žvačim sustavom, mišićima i zglobovima (bolovi, škljocanje) . One se razlikuju prema indikacijama i postavljenoj dijagnozi. Slične su dijagnostičke udlage.
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
	   title: "Udlage",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Udlage ordinacije dr. Nedjeljko Amanović"

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

.udlage{
	height: 100%;
	padding: 10vh;
	background: rgba(lighten($primary-color,5),0.9);
	.opisUdlage{
		color: #fff;

	}
	.menuUdlage{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'udlageImg naslovUdlage';
	 
		grid-template-columns: repeat(2, 1fr);
	
	.udlageImg{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
	

		}
	.naslovUdlage{
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
 
.udlage{
	padding: 2vh;
	font-size: 1rem;
	height: 100vh;
	background: rgba(lighten($primary-color,5),0.9);
	.opisUdlage{
		color: #fff;

	}
	.menuUdlage{
		display: grid;
		grid-gap: 5px;
		grid-template-areas:
	   		'udlageImg'
			'naslovUdlage';
	 
		grid-template-columns: repeat(1, 1fr);
	
	.udlageImg{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		width: 200px;
		height: 100px;

		}
	.naslovUdlage{
		 background: lighten($primary-color, 5);
    		 padding: 0.2rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		 

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



