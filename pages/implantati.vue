<template>  
 
<div class="implantati">
<p class="headImplantati">
U našoj praksi koristimo dvije vrste implantata kako bi zadovoljili sve potrebe naših pacijenata.
</p>
<div class="menuImplantati">
<div class="implantatiImg">
<img src="~assets/usluge/octagon.png" class="implantatImg"/>
</div>
<div class="naslovImplantati">
<p class="opisImplantati">
<span class="text-secondary">Implantati standardnog promjera </span>- dvodijelni implantati Octagon njemačke tvrtke Meisinger Dental Ratio su implantati koje najčešće preporučujemo našim pacijentima. Implantati su proizvedeni u Njemačkoj te dolaze s doživotnom garancijom na implantat i garancijom od 10 godina na protetsku strukturu koja se stavlja na implantat. S obzirom na mogućnosti koje nudi ovaj sustav je pogodan za skoro sve protetske radove u ustima uz pristupačnu cijenu a odličnu njemačku kvalitetu. Jako je važno da se ovi implantati ipak proizvode unutar europske unije te je lako doći do rezervnih dijelova čak i nakon više godina kada ste već zaboravili koji implantati su vam u ustima i kako se zovu vaš doktor će ih identificirati i naručiti nove protetske dijelove ako vam treba novi protetski rad u ustima i to sve u nekoliko dana.
</p>
</div>
<div class="implantatiImg">
<img src="~assets/usluge/implantat1.jpg" class="implantatImg"/>
<img src="~assets/usluge/implantat2.jpg" class="implantatImg"/>
</div>
<div class="naslovImplantati">
<p class="opisImplantati">
<span class="text-secondary">Mini implantati pogodni za situacije s jako tankom kosti u čeljusti.</span> Zbog malog promjera implantata kod ugradnje nema opsežnog bušenja kosti i odizanja mekog tkiva , već se implantat uvija direktno kroz mali otvor u zubnom mesu. Zahvat se izvodi u lokalnoj anesteziji, te je bezbolan, kratkotrajan i prihvatljiviji za pacijenta. Pacijent odlazi isti dan sa privremenim, potpuno estetski prihvatljivim radom, te kroz nekoliko tjedana završava sa konačnim radom. Mini implantati su iznimno prihvatljivo rješenje za stabilizaciju potpunih proteza, posebno donjih. Pacijenti koji nose potpune donje proteze jako dobro razumiju probleme koje uzrokuje nedovoljna stabilizacija donjih proteza. Zbog toga je veliki postotak pacijenata koji ne nose donje proteze ili su prisiljeni eksperimentirati sa raznim "ljepilima" što dovodi do frustracija. Mini implantati jednostavno u jednom danu rješavaju njihov problem te izlaze iz ordinacije sa nepomičnom donjom protezom koja čvrsto stoji na mjestu.
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
	.headImplantati{
		color: #fff;

		}
	.menuImplantati{
		display: grid;
		grid-gap: 10px;
		grid-template-areas:
	   		'implantatiImg naslovImplantati'
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
	font-size: 1rem;
	background: rgba(lighten($primary-color,5),0.9);
	.opisTerapijeKarijesa{
		color: #fff;

	}
	.headImplantati{
		margin-top: 10vh;
		}
	.menuImplantati{
		display: grid;
		grid-gap: 5px;
		grid-template-areas:
			'implantatiImg'
			'naslovImplantati';
		grid-template-columns: repeat(1, 1fr);
	
	.implantatiImg{
		padding: 0.2rem;
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



