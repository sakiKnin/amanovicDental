<template>
<div class="radovi">
  <nav class="menuRadovi" v-bind:class="{'show': getRadoviFlag}">
      <div class="menuRadovi-branding" v-bind:class="{'show': getRadoviFlag}">
        <div class="portrait"></div>
      </div>
      <ul class="menuRadovi-nav" v-bind:class="{'show': getRadoviFlag}">
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <nuxt-link to="/primjerA" class="nav-linkRadovi">
            Potpuna keramika
          </nuxt-link>
        </li>
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <nuxt-link to="/primjerB" class="nav-linkRadovi">
            Metalkeramički most
          </nuxt-link>
        </li>
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <nuxt-link to="/primjerC" class="nav-linkRadovi">
           Metalkeramički most
          </nuxt-link>
        </li>
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <nuxt-link to="/primjerD" class="nav-linkRadovi">
            Metalkeramička krunica 
          </nuxt-link>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <nuxt-link to="/primjerE" class="nav-linkRadovi">
            Potpuna keramička krunica
          </nuxt-link>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <nuxt-link to="/primjerF" class="nav-linkRadovi">
            Keramička krunica
          </nuxt-link>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <nuxt-link to="/primjerG" class="nav-linkRadovi">
            Potpuna keramika
          </nuxt-link>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <nuxt-link to="/primjerH" class="nav-linkRadovi">
            Izbjeljivanje
          </nuxt-link>
        </li>
	<li class="nav-itemUsluge" v-bind:class="{'show': getRadoviFlag}">
          <nuxt-link to="/primjerI" class="nav-linkRadovi">
            Zubni nakit
          </nuxt-link>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <nuxt-link to="/primjerJ" class="nav-linkRadovi">
            Implantati
          </nuxt-link>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <nuxt-link to="/primjerK" class="nav-linkRadovi">
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

computed: mapGetters(['getRadoviFlag']),

   head(){
	return {
	   title: "Radovi ordinacije",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Radovi ordinacije dr.Amanovic"

		}
	     ]
	}
   }


}

</script>

<style lang="scss">
$primary-color: #038cfc;
$secondary-color: #eece1a; 
$home-image: url(~assets/background.jpg);
$background-opacity: 0.9;

@mixin easeOut {
  transition: all 0.5s ease-out;
}

.menuRadovi {
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

  .nav-itemRadovi {
    transform: translate3d(-600px, 0, 0);
    @include easeOut;

    &.show {
      // Slide in from left
      transform: translate3d(0, 0, 0);
    }

   
  }

  .nav-linkRadovi {
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
  .nav-itemRadovi:nth-child(#{$x}) {
    transition-delay: $x * 0.1s;
  }
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


