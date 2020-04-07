<template>
<div class="usluge">
  <nav class="menuUsluge" v-bind:class="{'show': getUslugeFlag}">
      <div class="menuUsluge-branding" v-bind:class="{'show': getUslugeFlag}">
        <div class="portrait"></div>
      </div>
      <ul class="menuUsluge-nav" v-bind:class="{'show': getUslugeFlag}">
        <li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/prevencija" class="nav-linkUsluge">
            Prevencija
          </nuxt-link>
        </li>
        <li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/terapijaKarijesa" class="nav-linkUsluge">
            Terapija karijesa
          </nuxt-link>
        </li>
        <li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/terapijaIspunom" class="nav-linkUsluge">
           Terapija ispunom
          </nuxt-link>
        </li>
        <li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/proteze" class="nav-linkUsluge">
            Proteze
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/kruniceMostovi" class="nav-linkUsluge">
            Krunice, mostovi
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/ljecenjeZuba" class="nav-linkUsluge">
            Lječenje zuba
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/izbjeljivanje" class="nav-linkUsluge">
            Izbjeljivanje
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/rentgen" class="nav-linkUsluge">
            Rentgen
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/zubniNakit" class="nav-linkUsluge">
            Zubni nakit
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/implantati" class="nav-linkUsluge">
            Implantati
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getUslugeFlag}">
          <nuxt-link to="/udlage" class="nav-linkUsluge">
            Udlage
          </nuxt-link>
        </li>
      </ul>
    </nav>
</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

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
   },
methods:{
	changeUsluge(){
		this.setUslugeFlag(false);
	},
	...mapActions(['setUslugeFlag'])
}

}

</script>

<style lang="scss">
$primary-color: #038cfc;
$secondary-color: #eece1a; 

@mixin easeOut {
  transition: all 0.5s ease-out;
}

.usluge {
  height: 100%;
  margin: 0;
  padding: 0rem;
  heagiht: 100%;
}
 
.menuUsluge {
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 0.9;
  visibility: hidden;
  &.show {
    visibility: visible;
  }

  &-branding,
  &-nav {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    float: right;
    width: 50%;
    height: 100vh;
    overflow: hidden;
  }

  &-nav {
    margin: 0;
    padding: 0;
    background: darken($primary-color, 5);
    list-style: none;
    transform: translate3d(0, -100%, 0);
    @include easeOut;

    &.show {
      // Slide in from top
      transform: translate3d(0, 0, 0);
    }
  }

  // Branding Side
  &-branding {
    background: $primary-color;
    transform: translate3d(0, 100%, 0);
    @include easeOut;

    &.show {
      // Slide in from bottom
      transform: translate3d(0, 0, 0);
    }

    .portrait {
      width: 250px;
      height: 115px;
      background: url('~assets/logo.jpg');
      border-radius: 50%;
      border: solid 3px $secondary-color;
    }
  }

  .nav-itemUsluge {
    transform: translate3d(-600px, 0, 0);
    @include easeOut;

    &.show {
      // Slide in from left
      transform: translate3d(0, 0, 0);
    }

   
  }

  .nav-linkUsluge {
    display: inline-block;
    position: relative;
    font-size: 20px;
    text-transform: uppercase;
    padding: 0.5rem 0;
    font-weight: 300;
    color: #fff;
    text-decoration: none;
    @include easeOut;

    &:hover {
      color: $secondary-color;
      transform: scale(1.25);
    }
  }
}

// Delay each nav item slide by 0.1s
@for $x from 1 through 11 {
  .nav-itemUsluge:nth-child(#{$x}) {
    transition-delay: $x * 0.1s;
  }
}

 
//Smartphones
@media screen and (max-width: 500px){

 
 
 
}
// Tablets & Small Laptops
@media screen and (max-width: 768px){

.usluge{
	line-height: 0.8;

}


ul.menuUsluge-nav,
  div.menuUsluge-branding {
    float: none;
    width: 100%;
    min-height: 0;

    &.show {
      transform: translate3d(0, 0, 0);
    }
  }

  .menuUsluge-nav {
    height: 75vh;
    transform: translate3d(-100%, 0, 0);
    font-size: 24px;
  }

  .menuUsluge-branding {
    height: 25vh;
    transform: translate3d(100%, 0, 0);

    .portrait {
      background: url('~assets/logo_small.jpg');
      width: 200px;
      height: 91px;
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


