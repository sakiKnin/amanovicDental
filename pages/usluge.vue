<template>
<div class="usluge">
  <nav class="menuUsluge" v-bind:class="{'show': getUslugeFlag}">
      <div class="menu-brandingUsluge" v-bind:class="{'show': getUslugeFlag}">
        <div class="portrait"></div>
      </div>
      <ul class="menu-navUsluge" v-bind:class="{'show': getUslugeFlag}">
        <li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/prevencija" class="nav-link">
            Prevencija
          </nuxt-link>
        </li>
        <li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/terapijaKarijesa" class="nav-link">
            Terapija karijesa
          </nuxt-link>
        </li>
        <li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/terapijaIspunom" class="nav-link">
           Terapija ispunom
          </nuxt-link>
        </li>
        <li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/proteze" class="nav-link">
            Proteze
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/kruniceMostovi" class="nav-link">
            Krunice, mostovi
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/ljecenjeZuba" class="nav-link">
            Lječenje zuba
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/izbjeljivanje" class="nav-link">
            Izbjeljivanje
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/rentgen" class="nav-link">
            Rentgen
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/zubniNakit" class="nav-link">
            Zubni nakit
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/implantati" class="nav-link">
            Implantati
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/udlage" class="nav-link">
            Udlage
          </nuxt-link>
        </li>
      </ul>
    </nav>
</div>
</template>

<script>

import { mapGetters } from 'vuex';

export default{

computed: mapGetters(['getUslugeFlag']),

   head(){
	return {
	   title: "Usluge ordinacije",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Usluge ordinacije dr.Amanovic"

		}
	     ]
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

.usluge{

	background: $primary-color;

}

 
//Smartphones
@media screen and (max-width: 500px){

img{
height:150px;
width:100px;
}

.usluge{

	margin:0;

}
 
 
}
// Tablets & Small Laptops
@media screen and (min-width:501px) and (max-width: 768px){
 img{
	height:200px;
	width:150px;
	}
 .usluge{

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


