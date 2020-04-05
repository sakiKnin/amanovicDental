<template>
  <div class="header">
   
    <div class="menu-btn" v-bind:class="{'close': getMenuFlag}" @click="toggleMenu()">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu" v-bind:class="{'show': getMenuFlag}">
      <div class="menu-branding" v-bind:class="{'show': getMenuFlag}">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav" v-bind:class="{'show': getMenuFlag}">
        <li class="nav-item" v-bind:class="{'show': getMenuFlag}" @click="toggleMenu()">
          <nuxt-link to="/" class="nav-link">
            Naslovna
          </nuxt-link>
        </li>
        <li class="nav-item" v-bind:class="{'show': getMenuFlag}"  @click="toggleMenu();openUsluge()">
          <nuxt-link to="/usluge" class="nav-link">
            Usluge
          </nuxt-link>
        </li>
        <li class="nav-item" v-bind:class="{'show': getMenuFlag}">
          <nuxt-link to="/radovi" class="nav-link">
            Radovi
          </nuxt-link>
        </li>
        <li class="nav-item" v-bind:class="{'show': getMenuFlag}">
          <nuxt-link to="/kontakti" class="nav-link">
            Kontakt
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default{
	name: 'appHeader',

	computed: mapGetters(['getUslugeFlag', 'getMenuFlag']),

	data(){
		return{
		   showFlag: false
			}
		},
	methods:{
		toggleMenu(){
			this.setMenuFlag();
		},
		openUsluge(){
			this.setUslugeFlag(true);
		},
		...mapActions(['setUslugeFlag', 'setMenuFlag'])
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

.header{
	position: fixed;
	z-index: 2;
	width: 100%
}

.menu-btn {
  position: absolute;
  z-index: 3;
  right: 35px;
  top: 35px;
  cursor: pointer;
  @include easeOut;

  .btn-line {
    width: 28px;
    height: 3px;
    margin: 0 0 5px 0;
    background: #fff;
    @include easeOut;
  }

  // Rotate Into X With Menu Lines
  &.close {
    transform: rotate(180deg);

    .btn-line {
      // Line 1 - Rotate
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      // Line 2 - Hide
      &:nth-child(2) {
        opacity: 0;
      }

      // Line 3 - Rotate
      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }
}

// Menu Overlay
.menu {
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
    float: left;
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

  .nav-item {
    transform: translate3d(600px, 0, 0);
    @include easeOut;

    &.show {
      // Slide in from right
      transform: translate3d(0, 0, 0);
    }

   
  }

  .nav-link {
    display: inline-block;
    position: relative;
    font-size: 30px;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: 300;
    color: #fff;
    text-decoration: none;
    @include easeOut;

    &:hover {
      color: $secondary-color;
    }
  }
}

// Delay each nav item slide by 0.1s
@for $x from 1 through 4 {
  .nav-item:nth-child(#{$x}) {
    transition-delay: $x * 0.1s;
  }
}
// Tablets & Small Laptops
@media screen and (min-width:501px) and (max-width: 768px){
 

}
//Desktops & Laptops
@media screen and (min-width: 769px) and (max-width: 1170px){

 
}
//Widescreens
@media screen and (min-width: 1171px){

}

</style>


