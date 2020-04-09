<template>  
 
<div class="proteze">

<div class="menuProteze">
<div class="protezeImg">
<img src="~assets/usluge/proteza1.jpg" class="protezaImg"/>
<img src="~assets/usluge/proteza2.jpg" class="protezaImg"/>
</div>
<div class="naslovProteze">
<p class="opisProteze">
Proteze u širem smislu predstavljaju umjetne nadomjeske prirodnim dijelovima tijela.
</p>
<p class="opisProteze">
<span class="text-secondary">Stomatološke proteze</span> predstavljaju nadomjeske zuba i okolnih struktura napravljene od umjetnih materijala, sa ciljem vraćanja funkcije i estetike usne šupljine. Proteze mogu biti fiksne (nepomične u ustima) i mobilne (pomične, koje se vade). Kada govorimo o protezama u svakodnevnoj komunikaciji sa pacijentima obično se misli na <span class="text-secondary">mobilne proteze</span> tj. proteze koje se mogu vaditi iz usta.
</p>
<p class="opisProteze">
Proteze se u Stomatološkoj ordinaciji Amanović izrađuju uz pomoć suvremenih tehnologija koje omoguću gotovo idealnu reprodukciju prirodne funkcije i estetike, slijedeći sva                 
pravila stomatološke struke.
</p>
</div>
<div class="potpuneProteze">
<p class="opisProteze">
<span class="text-secondary">Potpune ( totalne ) proteze</span> su pomične proteze izrađene od materijala koji imitiraju prirodne zube i okolna tkiva, a nadomještaju potpuni gubitak zuba. Obično su izrađene od akrilata (plastične), a mogu imati i neka metalna pojačanja.
</p>
</div>
<div class="djelomicneProteze">
<p class="opisProteze">
<span class="text-secondary">Djelomične (parcijalne) proteze</span> su pomične proteze koje nadomještaju djelomični gubitak zuba, izrađene su od kombinacije akrilata i metala pa su skuplje od potpunih, a mogu biti raličito izvedene i  kombinirane sa fiksnim protezama (krunicama i mostovima). Svima je zajedničko da se vade iz usta.
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
	   title: "Proteze",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Proteze ordinacije dr. Nedjeljko Amanović"

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
.proteze{
	padding: 10vh;
	height: 100%;
	background: rgba(lighten($primary-color,5),0.9);
	.opisTerapijeKarijesa{
		color: #fff;

	}
	.menuProteze{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'protezeImg naslovProteze'
	 		'potpuneProteze djelomicneProteze';
		grid-template-columns: repeat(2, 1fr);
	
	.protezeImg{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		.protezaImg{
			border-radius: 50%;
      			border: solid 3px $secondary-color;
			}
		}
	
	.naslovProteze{
		 background: lighten($primary-color, 5);
    		 padding: 0.2rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.potpuneProteze{
		 background: lighten($primary-color, 5);
    		 padding: 0.2rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.djelomicneProteze{
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
 .proteze{
	padding: 2vh;
	font-size: 1rem;
	height: 100%;
	background: rgba(lighten($primary-color,5),0.9);
	.opisTerapijeKarijesa{
		color: #fff;

	}
	.menuProteze{
		display: grid;
		grid-gap: 5px;
		grid-template-areas:
	   		'protezeImg'
			'naslovProteze'
	 		'potpuneProteze'
			'djelomicneProteze';
		grid-template-columns: repeat(1, 1fr);
	
	 
	.naslovProteze{
		 background: lighten($primary-color, 5);
    		 padding: 0.2rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.potpuneProteze{
		 background: lighten($primary-color, 5);
    		 padding: 0.2rem;
    		 border-bottom: $secondary-color 5px solid;
		 margin-bottom:0.5rem;
		 color: #fff;
		}
	.djelomicneProteze{
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



