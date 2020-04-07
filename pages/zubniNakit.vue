<template>  
 
<div class="zubniNakit">

<div class="menuZubniNakit">
<img src="~assets/usluge/nakit.jpg" class="zubniNakitImg"/>
<div class="naslovZubniNakit">
<p class="opisNakit">
Kada imate lijepe i zdrave zube, imate i lijep osmjeh. Tada možete razmišljati kako dodatno ukrasiti taj osmjeh i dodati crtu osobnosti već lijepom i zdravom osmjehu.
</p>
<p class="opisNakit">
<span class="text-secondary">Zubni nakit</span> - takozvani cirkoni, dijamanti, skyce, su ukrasni elementi od različitih materijala koji se lijepe na prednje zube potpuno bezbolno, bez štete za zub, te ih je moguće lako skinuti ili zamijeniti. Prije stavljanja nakita se treba posavjetovati sa stomatologom, te  tada izabrati nakit koji će vam pribaviti i postaviti vaš stomatolog.
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
	   title: "Zubni nakit",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Zubni nakit ordinacije dr. Nedjeljko Amanović"

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

.zubniNakit{
	padding: 10vh;
	background: rgba(lighten($primary-color,5),0.9);
	height: 100vh;
	.opisRentgen{
		color: #fff;

	}
	.menuZubniNakit{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'zubniNakitImg naslovZubniNakit';
	 
		grid-template-columns: repeat(2, 1fr);
	
	.zubniNakitImg{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
	

		}
	.naslovZubniNakit{
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

.zubniNakit{
	padding: 2vh;
	font-size: 0.6rem;
	background: rgba(lighten($primary-color,5),0.9);
	height: 100vh;
	.opisRentgen{
		color: #fff;

	}
	.menuZubniNakit{
		display: grid;
		grid-gap: 5px;
		grid-template-areas:
	   		'zubniNakitImg'
			'naslovZubniNakit';
	 
		grid-template-columns: repeat(1, 1fr);
	
	.zubniNakitImg{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
		width: 200px;
		height: 100px;

		}
	.naslovZubniNakit{
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



