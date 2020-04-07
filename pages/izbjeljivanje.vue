<template>  
 
<div class="izbjeljivanje">

<div class="menuIzbjeljivanje">
<img src="~assets/usluge/izbjeljivanje.jpg" class="izbjeljivanjeImg"/>
<div class="naslovIzbjeljivanje">
<p class="opisIzbjeljivanje">
<span class="text-secondary">Izbjeljivanje</span> zuba je postupak kojim se raznim kemijskim i fizikalnim sredstvima pokušava posvijetliti boja zuba do prirodne boje ili još svjetlije.
</p>
<p class="opisIzbjeljivanje">
Izbjeljivati se može pojedini zub, najčeće su to zubi koji su promijenili boju nakon vađenja ili odumiranja pulpe ( živca ), ili se mogu izbjeljivati skupine zubi ili čak svi zubi. Izbjeljivanjem se uklanjaju neka prirođena obojenja zuba i  većina stečenih obojenja koja su uzrokovana raznim čimbenicima.
</p>
<p class="opisIzbjeljivanje">
Izbjeljivanje zuba u ordinaciji se provodi u jednoj ili nekoliko posjeta, pod kontrolom stomatologa i najsigurniji je način izbjeljivanja. Koriste se kemijska sredstva u individualnim udlagama uz zagrijavanje ili osvjetljavanje pomoćnim aparatima.
</p>
<p class="opisIzbjeljivanje">
U našoj ordinaciji koristimo izbjeljivanje u jednoj posjeti ubrzanoh BT cool LED lampom tehnologijom hladnog svjetla sa smanjenim rizikom preosjetljivosti zubi, u samo 30 minuta možete imati bijeli osmjeh.
</p>
<p class="opisIzbjeljivanje">
Izbjeljivanje zuba kod kuće je također moguće, sporije je i obvezno bi se trebalo posavjetovati sa stomatologom. Treba napomenuti da se ne smiju izbjeljivati zubi sa starim i lošim ispunima.
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
	   title: "Izbjeljivanje zubi",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Izbjeljivanje zubi ordinacije dr. Nedjeljko Amanović"

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

.izbjeljivanje{
	padding: 10vh;
	background: rgba(lighten($primary-color,5),0.9);
	.opisIzbjeljivanje{
		color: #fff;

	}
	.menuIzbjeljivanje{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'izbjeljivanjeImg naslovIzbjeljivanje';
	 
		grid-template-columns: repeat(2, 1fr);
	
	.izbjeljivanjeImg{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		border-radius: 50%;
      		border: solid 3px $secondary-color;
	

		}
	.naslovIzbjeljivanje{
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



