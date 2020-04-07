<template>  
 
<div class="implantati">

<div class="menuImplantati">
<div class="implantatiImg">
<img src="~assets/usluge/implantat1.jpg" class="implantatImg"/>
<img src="~assets/usluge/implantat2.jpg" class="implantatImg"/>
</div>
<div class="naslovImplantati">
<p class="opisImplantati">
Proteze u širem smislu predstavljaju umjetne nadomjeske prirodnim dijelovima tijela.
</p>
<p class="opisImplantati">
<span class="text-secondary">MDI - Mini Dental Implant je sistem tvrtke IMTEC - 3M (USA)</span> baziran na mini implantatima promjera 1,8 do 2,4 mm koji su zahvaljujući malom promjeru višestruko ugodniji za pacijenta prilikom ugradnje, a zahvaljujući pojednostavljenoj proceduri i višestruko jeftiniji od implantata standardnog promjera.
</p>
<p class="opisImplantati">
Prilikom ugradnje standardnih implantata procedura uključuje odvajanje mekog tkiva usne šupljine (zubnog mesa) od kosti te bušenje kosti do promjera 3-6mm a zatim uvijanje implantata i šivanje rane. Posljedica je neugodan i dugotrajan zahvat, sa postoperativnom boli i oteklinom mekih tkiva (i duže od tjedan dana) te dug period zarastanja (3-6 mjeseci) prije protetske opskrbe implantata ( ugradnje zuba).
</p>
<p class="opisImplantati">
Zbog malog promjera implantata kod ugradnje <span class="text-secondary">mini MDI implantata</span> nema opsežnog bušenja kosti i odizanja mekog tkiva usta od kosti, već se implantat uvija direktno kroz mali otvor u zubnom mesu, bez odizanja tkiva i opsežnog bušenja kosti. Zahvat se izvodi u lokalnoj anesteziji, te je bezbolan, kratkotrajan i prihvatljiviji za pacijenta. Pacijent odlazi isti dan sa privremenim, potpuno estetski prihvatljivim radom, te kroz nekoliko tjedana završava sa konačnim radom.
</p>
<p class="opisImplantati">
<span class="text-secondary">Mini implantati</span> su iznimno prihvatljivo rješenje za stabilizaciju potpunih proteza, posebno donjih. Pacijenti koji nose potpune donje proteze jako dobro razumiju probleme koje uzrokuje nedovoljna stabilizacija donjih proteza. Zbog toga je veliki postotak pacijenata koji ne nose donje proteze ili su prisiljeni eksperimentirati sa raznim "ljepilima" što dovodi do frustracija. Mini implantati jednostavno u jednom danu rješavaju njihov problem te izlaze iz ordinacije sa nepomičnom donjom protezom koja čvrsto stoji na mjestu.
</p>
<p class="opisImplantati">
Također u odabranim indikacijama mini implantati mogu nositi i pojedinačne krunice - metalkeramičke ili cirkonske, te se lako i povoljno rješava nedostatak pojedinih zuba.
</p>
<p class="opisImplantati">
Sve ostale implantate standardnog promjera i veće radove radimo u suradnji s vrhunskim implantološkim timom njemačke tvrtke <span class="text-secondary">Bredent</span> i s certifikatom za ugradnju implantata
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
	   title: "Implantati",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Implantati ordinacije dr. Nedjeljko Amanović"

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
.implantati{
	padding: 10vh;
	background: rgba(lighten($primary-color,5),0.9);
	.opisTerapijeKarijesa{
		color: #fff;

	}
	.menuImplantati{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'implantatiImg naslovImplantati';
		grid-template-columns: repeat(2, 1fr);
	
	.implantatiImg{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		.implantatImg{
			border-radius: 50%;
      			border: solid 3px $secondary-color;
		}
		}
	
	.naslovImplantati{
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
.implantati{
	padding: 2vh;
	font-size: 0.6rem;
	background: rgba(lighten($primary-color,5),0.9);
	.opisTerapijeKarijesa{
		color: #fff;

	}
	.menuImplantati{
		display: grid;
		grid-gap: 5px;
		grid-template-areas:
	   		'implantatiImg'
			'naslovImplantati';
		grid-template-columns: repeat(1, 1fr);
	
	.implantatiImg{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
		.implantatImg{
			border-radius: 50%;
      			border: solid 3px $secondary-color;
			width: 200px;
			height: 200px;
		}
		}
	
	.naslovImplantati{
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



