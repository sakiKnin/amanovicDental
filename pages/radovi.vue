<template>
<div class="radovi">
  <nav class="menuRadovi" v-bind:class="{'show': getRadoviFlag}">
      <div class="menuRadovi-branding" v-bind:class="{'show': getRadoviFlag}">
        <div v-bind:class="classPicture"></div> 
      </div>
      <ul class="menuRadovi-nav" v-bind:class="{'show': getRadoviFlag}">
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <div class="nav-linkRadovi" @click="openPrimjerA()">
            Potpuna keramika
          </div>
        </li>
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
         <div class="nav-linkRadovi" @click="openPrimjerB()">
            Metalkeramički most
         </div>
        </li>
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <div class="nav-linkRadovi" @click="openPrimjerC()">
           Metalkeramički most
           </div>
        </li>
        <li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <div class="nav-linkRadovi" @click="openPrimjerD()">
            Metalkeramička krunica 
          </div>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <div class="nav-linkRadovi" @click="openPrimjerE()">
            Potpuna keramička krunica
          </div>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
          <div class="nav-linkRadovi" @click="openPrimjerF()">
            Keramička krunica
          </div>
        </li>
	<li class="nav-itemRadovi" v-bind:class="{'show': getRadoviFlag}">
           <div class="nav-linkRadovi" @click="openPrimjerG()">
            Potpuna keramika
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
		console.log("otvori primjer A");
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
		console.log("otvori primjer B");
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
		console.log("otvori primjer C");
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
		console.log("otvori primjer D");
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
		console.log("otvori primjer E");
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
		console.log("otvori primjer F");
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
		console.log("otvori primjer F");
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
$home-image: url(~assets/background.jpg);
$background-opacity: 0.9;

@mixin easeOut {
  transition: all 0.5s ease-out;
}

.radovi {
  background: $home-image;
  background-attachment: fixed;
  background-size: cover;
  //background: $primary-color;
  
  color: #fff;
  height: 100%;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
  
  
  heagiht: 100%;
  overflow: hidden;
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
    .primjerA{
	width: 500px;
        height: 500px;
	background: url('~assets/radovi/primjerA.jpg');
	background-size: cover;
	 //treba dodati text..
	 

		}
    .primjerB{
	width: 500px;
        height: 500px;
	background: url('~assets/radovi/primjerB.jpg');
	background-size: cover;
	 //treba dodati text..
	 

		}
    .primjerC{
	width: 500px;
        height: 500px;
	background: url('~assets/radovi/primjerC.jpg');
	background-size: cover;
	 //treba dodati text..
	 

		}
     .primjerD{
	width: 500px;
        height: 500px;
	background: url('~assets/radovi/primjerD.jpg');
	background-size: cover;
	 //treba dodati text..
	 

		}
      .primjerE{
	 width: 500px;
         height: 500px;
	 background: url('~assets/radovi/primjerE.jpg');
	 background-size: cover;
	 //treba dodati text..
	 

		}
      .primjerF{
	 width: 500px;
         height: 500px;
	 background: url('~assets/radovi/primjerF.jpg');
	 background-size: cover;
	 //treba dodati text..
	 

		}
	.primjerG{
	 width: 500px;
         height: 500px;
	 background: url('~assets/radovi/primjerG.jpg');
	 background-size: cover;
	 //treba dodati text..
	 

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
@for $x from 1 through 18 {
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


