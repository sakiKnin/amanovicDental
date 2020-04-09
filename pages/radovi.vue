<template>
<div class="radovi">
  <nav class="menuRadovi" v-bind:class="{'show': getRadoviFlag}">
      <div class="menuRadovi-branding" v-bind:class="{'show': getRadoviFlag}">
        <div v-bind:class="classPicture"></div>
		<div class="append" v-if="classPicture.primjerA">Metal-keramička krunica - Slučaj slomljenog zuba, nadogradnja
korijena s metalkeramičkom krunicom</div>
		<div class="append" v-if="classPicture.primjerB">Metalkeramički most -  Potpuna rehabilitacija gornje čeljusti
metalkeramičkim mostom</div>
		<div class="append" v-if="classPicture.primjerC">Bezmetalna keramička krunica -  Promijenjen položaj zuba jednom
bezmetalnom staklokeramičkom krunicom</div>
		<div class="append" v-if="classPicture.primjerD">Bezmetalna keramička krunica - Dvije e-max bezmetalne krunice za zub
koji je promijenio boju i zamjena stare metalkeramičke krunice na
susjednom zubu</div>
		<div class="append" v-if="classPicture.primjerE">Bezmetalni cirkonski most - Prednji most od bezmetalne cirkonkeramike
i krunice od istog materijala na ostalim zubima</div>
		<div class="append" v-if="classPicture.primjerF">Estetske keramičke ljuskice - Estetske keramičke ljuskice na prednjim
zubima koje ispravljaju boju, oblik i položaj zubi uz minimalno oštećenje zuba</div>
		<div class="append" v-if="classPicture.primjerG">Keramička krunica na implantatu - Bezmetalna estetska krunica na implantatu</div>
      </div>
      <ul class="menuRadovi-nav" v-bind:class="{'show': getRadoviFlag}">
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <div class="nav-linkRadovi" @click="openPrimjerA()">
            Metalkeramička krunica
          </div>
        </li>
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
         <div class="nav-linkRadovi" @click="openPrimjerB()">
            Metalkeramički most
         </div>
        </li>
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <div class="nav-linkRadovi" @click="openPrimjerC()">
           Bezmetalna keramika
           </div>
        </li>
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <div class="nav-linkRadovi" @click="openPrimjerD()">
            Bezmetalna keramika 
          </div>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <div class="nav-linkRadovi" @click="openPrimjerE()">
            Bezmetalni cirkon
          </div>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <div class="nav-linkRadovi" @click="openPrimjerF()">
            Keramičke ljuskice
          </div>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
           <div class="nav-linkRadovi" @click="openPrimjerG()">
            Implantat
          </div>
        </li>
      </ul>
    </nav>
</div>
</template>

<script>

import { mapGetters } from 'vuex';

export default{

data(){
	return{
		classPicture:{
			portrait: true,
			primjerA: false,
			primjerB: false,
			primjerC: false,
			primjerD: false,
			primjerE: false,
			primjerF: false,
			primjerG: false
		}
	}
},

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
   },
methods:{

	openPrimjerA(){
		this.classPicture.portrait = false;
		this.classPicture.primjerA = true;
		this.classPicture.primjerB = false;
		this.classPicture.primjerC = false;
		this.classPicture.primjerD = false;
		this.classPicture.primjerE = false;
		this.classPicture.primjerF = false;
		this.classPicture.primjerG = false;
		},
	openPrimjerB(){
		this.classPicture.portrait = false;
		this.classPicture.primjerA = false;
		this.classPicture.primjerB = true;
		this.classPicture.primjerC = false;
		this.classPicture.primjerD = false;
		this.classPicture.primjerE = false;
		this.classPicture.primjerF = false;
		this.classPicture.primjerG = false;
		},
	openPrimjerC(){
		this.classPicture.portrait = false;
		this.classPicture.primjerA = false;
		this.classPicture.primjerB = false;
		this.classPicture.primjerC = true;
		this.classPicture.primjerD = false;
		this.classPicture.primjerE = false;
		this.classPicture.primjerF = false;
		this.classPicture.primjerG = false;
		},
	openPrimjerD(){
		this.classPicture.portrait = false;
		this.classPicture.primjerA = false;
		this.classPicture.primjerB = false;
		this.classPicture.primjerC = false;
		this.classPicture.primjerD = true;
		this.classPicture.primjerE = false;
		this.classPicture.primjerF = false;
		this.classPicture.primjerG = false;
		},
	openPrimjerE(){
		this.classPicture.portrait = false;
		this.classPicture.primjerA = false;
		this.classPicture.primjerB = false;
		this.classPicture.primjerC = false;
		this.classPicture.primjerD = false;
		this.classPicture.primjerE = true;
		this.classPicture.primjerF = false;
		this.classPicture.primjerG = false;
		},
	openPrimjerF(){
		this.classPicture.portrait = false;
		this.classPicture.primjerA = false;
		this.classPicture.primjerB = false;
		this.classPicture.primjerC = false;
		this.classPicture.primjerD = false;
		this.classPicture.primjerE = false;
		this.classPicture.primjerF = true;
		this.classPicture.primjerG = false;

		},
	openPrimjerG(){
		this.classPicture.portrait = false;
		this.classPicture.primjerA = false;
		this.classPicture.primjerB = false;
		this.classPicture.primjerC = false;
		this.classPicture.primjerD = false;
		this.classPicture.primjerE = false;
		this.classPicture.primjerF = false;
		this.classPicture.primjerG = true;
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

.radovi {
  height: 100%;
  margin: 0;
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
    .append{
		color: $secondary-color;
		text-align: center;
	}
    .primjerA{
	width: 500px;
        height: 500px;
	background: url('~assets/radovi/primjerA.jpg');
	background-size: cover;
	border-radius: 50%;
        border: solid 3px $secondary-color;
		}
    .primjerB{
	width: 500px;
        height: 500px;
	background: url('~assets/radovi/primjerB.jpg');
	background-size: cover;
	border-radius: 50%;
        border: solid 3px $secondary-color;
		}
    .primjerC{
	width: 500px;
        height: 500px;
	background: url('~assets/radovi/primjerC.jpg');
	background-size: cover;
	border-radius: 50%;
        border: solid 3px $secondary-color;
		}
     .primjerD{
	width: 500px;
        height: 500px;
	background: url('~assets/radovi/primjerD.jpg');
	background-size: cover;
	border-radius: 50%;
        border: solid 3px $secondary-color;
		}
      .primjerE{
	 width: 500px;
         height: 500px;
	 background: url('~assets/radovi/primjerE.jpg');
	 background-size: cover;
	 border-radius: 50%;
         border: solid 3px $secondary-color;
		}
      .primjerF{
	 width: 500px;
         height: 500px;
	 background: url('~assets/radovi/primjerF.jpg');
	 background-size: cover;
	 border-radius: 50%;
         border: solid 3px $secondary-color;
		}
	.primjerG{
	 width: 500px;
         height: 500px;
	 background: url('~assets/radovi/primjerG.jpg');
	 background-size: cover;
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
    font-size: 25px;
    text-transform: uppercase;
    padding: 0.5rem 0;
    font-weight: 300;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    @include easeOut;
   
    &:hover {
      color: $secondary-color;
      transform: scale(1.25);
    }
  }
}

// Delay each nav item slide by 0.1s
@for $x from 1 through 7 {
  .nav-itemRadovi:nth-child(#{$x}) {
    transition-delay: $x * 0.1s;
  }
}

 
//Smartphones
@media screen and (max-width: 500px){

 
 
 
}
// Tablets & Small Laptops
@media screen and (max-width: 768px){
 .radovi{
	line-height: 0.4;
	font-size: 1rem;
}


ul.menuRadovi-nav,
  div.menuRadovi-branding {
    float: none;
    width: 100%;
    min-height: 0;

    &.show {
      transform: translate3d(0, 0, 0);
    }
  }

  .menuRadovi-nav {
    height: 50vh;
    transform: translate3d(-100%, 0, 0);
    font-size: 0.4rem;
  }

  .menuRadovi-branding {
    height: 50vh;
    transform: translate3d(100%, 0, 0);

    .portrait {
      background: url('~assets/logo_small.jpg');
      width: 200px;
      height: 91px;
    }
     .append{
	line-height: 1;
	}
    .primjerA{
	width: 200px;
        height: 200px;
		}
    .primjerB{
	width: 200px;
        height: 200px;
		}
    .primjerC{
	width: 200px;
        height: 200px;
		}
     .primjerD{
	width: 200px;
        height: 200px;
		}
      .primjerE{
	 width: 200px;
         height: 200px;
		}
      .primjerF{
	 width: 200px;
         height: 200px;
		}
	.primjerG{
	 width: 200px;
         height: 200px;
		}
	.primjerH{
	 width: 200px;
         height: 200px;
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


