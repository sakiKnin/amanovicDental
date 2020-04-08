<template>  
 
<div class="ljecenjeZuba">

<div class="menuLjecenjeZuba">
<div class="ljcenjeZubaImg">
<img src="~assets/usluge/ciscenje.jpg" class="ljecenjeImg"/>
<img src="~assets/usluge/punjenje.jpg" class="ljecenjeImg"/>
</div>
<div class="naslovLjecenjeZuba">
<p class="opisLjecenjeZuba">
Nekada je zubno tkivo toliko razoreno karijesom, traumom, ili brušenjem da je došlo do oštećenja i upale ili odumiranja pulpe ( tzv. živca ) zuba. Tada je jedina terapija vađenje pulpe, čišćenje prostora u zubnoj kruni i korijenu gdje je ona bila smještena, te punjenje tog prostora umjetnim materijalom, a tek tada je moguća konačna restauracija zuba. To takozvano <span class="text-secondary">liječenje</span> zuba je osjetljiv i ponekad dugotrajan postupak, te je potrebna upornost i suradnja pacijenta.
</p>
<p class="opisLjecenjeZuba">
Koristimo suvremene materijale i strojnu opremu za brzo i učinkovito liječenje, te rentgen za točnu dijagnostiku i praćenje liječenja zuba.
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
	   title: "Lječenje zuba",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Lječenje zuba ordinacije dr. Nedjeljko Amanović"

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

.ljecenjeZuba{
	padding: 10vh;
	background: rgba(lighten($primary-color,5),0.9);
	height: 100vh;
	.opisLjecenjeZuba{
		color: #fff;

	}
	.menuLjecenjeZuba{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'ljecenjeZubaImg naslovLjecenjeZuba';
	 	grid-template-columns: repeat(2, 1fr);
	
	.ljcenjeZubaImg{
		display: flex;
		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		padding: 0.2rem;
		.ljecenjeImg{
			border-radius: 50%;
      			border: solid 3px $secondary-color;
			height: 200px;
			width: 200px;
			
			}
		}
	.naslovLjecenjeZuba{
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
 .ljecenjeZuba{
	padding: 2vh;
	font-size: 1rem;
	background: rgba(lighten($primary-color,5),0.9);
	height: 100vh;
	.opisLjecenjeZuba{
		color: #fff;

	}
	.menuLjecenjeZuba{
		display: grid;
		grid-gap: 5px;
		grid-template-areas:
			'ljcenjeZubaImg'
			'naslovLjecenjeZuba';
	 	grid-template-columns: repeat(1, 1fr);
	
	 
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



