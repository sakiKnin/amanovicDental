<template>  
 
<div class="kruniceMostovi">

<div class="menuKruniceMostovi">
<div class="kruniceMostoviImg">
<img src="~assets/usluge/most.jpg" class="mostImg"/>
<img src="~assets/usluge/krunica.jpg" class="krunicaImg"/>
</div>
<div class="naslovKruniceMostovi">
<p class="opisKruniceMostovi">
Krunice i mostovi predstavljaju fiksne protetske nadomjeske zubi koji se cementiraju i ostaju trajno pričvršćeni u ustima. Njima se postiže vraćanje prirodne estetike i funkcije, a uz minimalno oštećenje postojeće funkcije.
</p>
<p class="opisKruniceMostovi">
Svi fiksni radovi se u Stomatološkoj ordinaciji Amanović izrađuju uz pomoć suvremenih tehnologija koje omoguću gotovo idealnu reprodukciju prirodne funkcije i estetike, slijedeći sva                 
pravila stomatološke struke.
</p>
</div>
<div class="krunice">
<p class="opisKrunica">
<span class="text-secondary">Krunica</span> je fiksni nadomjestak koji se cementira na pripremljen izbrušen zub te nadomješta prirodni oblik, boju, veličinu i funkciju zuba. Može biti samostalna ili dio mosta. Krunice mogu biti <span class="text-secondary">akrilatne</span> koje su estetske ali nisu trajne, <span class="text-secondary">metalne</span> - nisu estetske,  <span class="text-secondary">fasetirane</span> - imaju nalijepljen estetski vidljivi dio na metalnoj podlozi, <span class="text-secondary">metalkeramičke</span> - metalne obložene estetskom keramikom, <span class="text-secondary">potpune keramičke</span> - bez metala, estetski naprihvatljivije, ali zbog novih tehnologija i najskuplje.
</p>
</div>
<div class="mostovi">
<p class="opisMostovi">
<span class="text-secondary">Mostovi</span> su fiksni nadomjesci koji nadomještaju izgubljene zube, a cementiraju se na postojeće, izbrušene i pripremljene zube, te ostaju trajno u ustima. Mostovi također mogu biti <span class="text-secondary">metalni, fasetirani, akrilatni, metalkeramičk i potpuni keramički</span>. Mostovi se sastoje od različitog broja članova mosta, o čemu ovisi njihova veličina, pa i cijena.
</p>
</div>
<div class="fasete">
<p class="opisFasete">
<span class="text-secondary">Fasete ( ljuske )</span> su estetski nadomjesci koji se cementiraju obično na prednjim zubima, nodomještaju prirodnu boju i oblik zuba, izrađeni su najčešće od keramike, zahtjevaju minimalno brušenje zuba, te su vrhunske estetike i vrlo uspješno oponašaju prirodne zube, a nekad i predobro ( poznati hollywoodski bijeli osmjeh ).
</p>
</div>
<div class="nadogradnje">
<p class="opisNadogradnje">
<span class="text-secondary">Nadogradnje</span> - su fiksni nadomjesci koji se cementiraju u korijen zuba, te služe kao nosač krunice ili mosta kada je zub previše razoren te je praktično samo korijen zuba moguće iskoristiti. Nadogradnje mogu biti metalne i bezmetalne, estetske i uvijek su pokrivene krunicom.
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
	   title: "Krunice, mostovi",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Krunice, mostovi ordinacije dr. Nedjeljko Amanović"

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

.text-secondary{
	color: $secondary-color;

}
.kruniceMostovi{
	padding: 10vh;
	background: rgba(lighten($primary-color,5),0.9);
	.opisTerapijeKarijesa{
		color: #fff;

	}
	.menuKruniceMostovi{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'kruniceMostoviImg naslovKruniceMostovi'
	 		'krunice mostovi'
			'fasete nadogradnje';
		grid-template-columns: repeat(2, 1fr);
	
	.mostImg{
		width: 200px;
		height: 200px;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		}
	.krunicaImg{
		width: 200px;
		height: 200px;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		}
	.naslovKruniceMostovi{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.krunice{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.mostovi{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.fasete{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	 .nadogradnje{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
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
.kruniceMostovi{
	font-size: 1rem;
	padding: 2vh;
	background: rgba(lighten($primary-color,5),0.9);
	.opisTerapijeKarijesa{
		color: #fff;

	}
	.menuKruniceMostovi{
		display: grid;
		grid-gap: 5px;
		grid-template-areas:
	   		'kruniceMostoviImg'
			'naslovKruniceMostovi'
	 		'krunice'
			'mostovi'
			'fasete'
			'nadogradnje';
		grid-template-columns: repeat(1, 1fr);
	
	.mostImg{
		width: 200px;
		height: 200px;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		}
	.krunicaImg{
		width: 200px;
		height: 200px;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		}
	.naslovKruniceMostovi{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.krunice{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.mostovi{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.fasete{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	 .nadogradnje{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
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



