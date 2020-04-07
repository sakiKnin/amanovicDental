<template>  
 
<div class="prevencija">
<h3 class="headPrevencija">
U suvremenoj stomatologiji na prevenciju i edukaciju pacijenta se gleda kao na najvažniji korak u očuvanju zdravlja usne šupljine. Tek nakon toga dolazi na red restorativna stomatologija.
U prevenciji ponajprije se mora razlikovati briga pacijenta za oralno zdravlje i higijenski postupci koje provodi sam pacijent, te preventivni postupci koje provodi stomatolog u ordinaciji. Svi postupci čine nerazdvojnu cjelinu i preduvjet za zdrav i lijep osmjeh.
</h3> 

<div class="menuPrevencija">
<img src="~assets/usluge/prevencija.jpg" class="prevencijaImg"/>
<div class="naslovPrevencija">
<h3 class="opisPrevencija">
Usluge vezane uz prevenciju koje možete dobiti u ordinaciji dr. Amanović su stručni savjeti i upute kako sami možete očuvati zdrave i lijepe zube te preventivni postupci koji se provode u ordinaciji:
</h3>
</div> 
<div class="usluga usluga-1">
<h4 class="naslov">Profesionalno čišćenje i poliranje zuba</h4> 
<p class="opis">Čišćenje tvrdih i mekih zubnih naslaga (kamenca i plaka) zvučnim i ultrazvučnim instrumentima, te poliranje zubi do vrhunskog sjaja abrazivnim gumicama i polirnim pastama. Postupak se preporučuje barem jednom do dva puta godišnje da bi olakšali redovito održavanje higijene.
</p>
</div> 
<div class="usluga usluga-2">
<h4 class="naslov">Profesionalna fluoridacija zubi</h4> 
<p class="opis">
Premazivanje zubi zaštitnim lakovima i otopinama bogato zasićenim preparatima fluora, pod nadzorom stomatologa. Osobito koristan postupak u prevenciji karijesa kod djece i važan dodatak redovitom održavanju higijene usta. Provodi se više puta godišnje prema procjeni stomatologa ovisno o riziku za nastanak karijesa kod djeteta.
</p>
</div> 
<div class="usluga usluga-3">
<h4 class="naslov">Pečaćenje zubi</h4> 
<p class="opis">
Zalijevanje jamica i fisura (usjeklina) na zubima posebnim materijalima koji hermetički zatvaraju udubine na zubima u kojima se najčešće razvija karijes. Postupak se najčešće provodi kod djece na pvim trajnim kutnjacima koji obično niču između 6. i 7. godine života. To je obično vrijeme kada u ustima još postoje i moguće kariozni mliječni zubi koji predstavljaju rizik za nastanak karijesa na trajnim zubima.
</p>
</div> 
<div class="usluga usluga-4"><h4 class="naslov">Uklanjanje prevjesa ispuna</h4> 
<p class="opis">
Mnogi loše napravljeni ili stari ispuni stvaraju na rubovima mjesta koja su podložna nakupljanju plaka i razvoju karijesa, mijenjanjem ovih ispuna ili uklanjanjem njihovih rubnih prevjesa omogućuje se pravilna higijena zuba te spriječava razvoj karijesa.
</p>
</div>
</div>
<div class="button" @click="back()"><div class="buttonName">back</div></div>
<div class="footer">Copyright &copy; 2020</div>
</div>
 

</template>

<script>

import { mapGetters } from 'vuex';

export default{

computed: mapGetters(['getUslugeFlag']),

   head(){
	return {
	   title: "Prevencija",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Prevencija bolesti zuba"

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

.prevencija{
	padding: 10vh;
	background: rgba(lighten($primary-color,5),0.9);

}
 
.headPrevencija{
	padding: 0.2rem;
	color: #fff;
	background: rgba(lighten($primary-color,5),0.9);
	font-weight: 400;
}

.menuPrevencija{
	display: grid;
	grid-gap: 10px;
	grid-template-areas:
	   'prevencijaImg naslovPrevencija'
	   'usluga1 usluga2'
	   'usluga3 usluga4';
	    
	grid-template-columns: repeat(2, 1fr);
	
	 
	.usluga-1{
		grid-area: usluga1;
	}
	.usluga-2{
		grid-area: usluga2;
	}
	.usluga-3{
		grid-area: usluga3;
		}
	.usluga-4{
		grid-area: usluga4;
		}
	 
	.usluga{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		.naslov{
			color: $secondary-color;
			padding: 0.2rem;
			}

	}
	
	.prevencijaImg{
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		height: 200px;
		weight: 100px;
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;

		}
	 
	.naslovPrevencija{
		font-size:1rem;
		background: lighten($primary-color,5);
		color: #fff;
		padding: 0.2rem;
		.opisPrevencija{
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			font-weight: 400;
			color: $secondary-color;
			}
		}
	}
p.opis{
	padding:0.3rem;

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

.prevencija{
	padding: 2vh;
	background: rgba(lighten($primary-color,5),0.9);
	font-size: 1rem;

 
.headPrevencija{
	padding: 0.2rem;
	color: #fff;
	background: rgba(lighten($primary-color,5),0.9);
	
}

.menuPrevencija{
	display: grid;
	grid-gap: 5px;
	grid-template-areas:
	   'prevencijaImg'
	   'naslovPrevencija'
	   'usluga1'
	   'usluga2'
	   'usluga3'
	   'usluga4';
	    
	grid-template-columns: repeat(1, 1fr);
	
	 
	 
	.usluga{
		 
		 margin-bottom:0.5rem;
		 
		.naslov{
			 
			padding: 0.2rem;
			}

	}
	
	.prevencijaImg{
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		height: 200px;
		weight: 100px;
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;

		}
	 
	.naslovPrevencija{
		font-size: 0.8rem;
		padding: 0.2rem;
		 
		}
	}
	.opis{
		padding:0.3rem;

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



