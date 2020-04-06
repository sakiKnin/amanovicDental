<template>  
 
<div class="terapijaIspunom">

<div class="menuTerapijaIspunom">
<img src="~assets/usluge/terapijaIspunom.jpg" class="terapijaIspunomImg"/>
<div class="naslovTerapijaIspunom">
<p class="opisTerapijaIspunom">
U većini slučajeva oštećenja zuba postoji dovoljno zdravog zubnog tkiva koje omogućava restauraciju takozvanim konzervativnim liječenjem ispunom. Cilj je umjetnim materijalom nadomjestiti izgubljena tkiva.
</p>
</div>
<div class="amalgamskiIspun">
<p class="opisTerapijaIspunom">
<span class="text-secondary">Amalgamski ispun ( tzv. crna plomba )</span> - Ispun temeljen na mješavini srebrnih, bakrenih, cinkovih i dr. strugotina ili čestica povezanih elementarnom živom. Ovaj materijal iako se upotrebljava jako dugo i možemo reći da je zastario, još uvijek ima svoje indikacije i neke prednosti koje nisu dostigli ni najsuvremeniji materijali, u prvom redu dugotrajnost i otpornost na karijes. Postoje studije o toksičnosti žive iz amalgama, ali i neke koje to odbacuju, tako da je još uvijek u upotrebi, iako puno rjeđe.
</p>
</div>
<div class="kompozitniIspun">
<p class="opisTerapijaIspunom">
<span class="text-secondary">Kompozitni ispun ( tzv. bijela plomba )</span> - Danas je standardni materijal za nadoknadu zubnog tkiva, svojom estetikom je superioran drugim materijalima za direktne ispune. Imitira boju zdravog zuba, te je uz pažljivu tehniku rada materijal izbora za veliku većinu zubnih restauracija.
</p>
</div>
<div class="cementniIspun">
<p class="opisTerapijaIspunom">
<span class="text-secondary">Cementni ispun</span> - Obično je riječ o bijelom ispunu koji po sastavu može biti staklenoionomerni, fosfatni i dr. , estetski je uglavnom inferioran većini kompozitnih ispuna, ali također ima svoje indikacije. Najčešće je to privremeni ispun, ali nekad i trajni ( mliječni zubi) i ima prednost otpuštanja fluorida koji pomažu prevenciju karijesa (staklenoionomerni ispun).
</p>
</div>
<div class="indirektniIspun">
<p class="opisTerapijaIspunom">
<span class="text-secondary">Indirektni ispun</span> - Obično je riječ o estetskim ispunima izrađenim izvan usta na temelju otiska zuba, iako mogu biti i metalni, obično zlatni. Takvi nadomjesci se cementiraju u čvrstom stanju na zub. Najčešći su kompozitni i keramički nadomjesci kojima se postiže vrhunska estetika u restauraciji zuba.
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
	   title: "Terapija ispunom",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Terapija ispunom ordinacije dr. Nedjeljko Amanović"

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

.text-secondary{
	color: $secondary-color;

}
.terapijaIspunom{
	padding: 10vh;
	background: rgba(lighten($primary-color,5),0.9);
	.opisTerapijeKarijesa{
		color: #fff;

	}
	.menuTerapijaIspunom{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'terapijaIspunomImg naslovTerapijaIspunom'
	 		'amalgamskiIspun kompozitniIspun'
			'cementniIspun indirektniIspun';
		grid-template-columns: repeat(2, 1fr);
	
	.terapijaIspunomImg{
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		}
	.naslovTerapijaIspunom{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.amalgamskiIspun{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.kompozitniIspun{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.cementniIspun{
		 background: lighten($primary-color, 5);
    		 padding: 0rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	 .indirektniIspun{
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



