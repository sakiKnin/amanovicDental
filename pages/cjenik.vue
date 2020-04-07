<template>  
<div class="cjenik">
<div class="table">
<table>
<tr><th>
<span class="text-secondary">Naziv</span>
</th> <th>
<span class="text-secondary">HRK</span>
</th> <th>
<span class="text-secondary">EUR</span>
</th></tr> <tr><td>
LOKALNA ANESTEZIJA ( Local anesthesia )
</td> <td align="right">
60
</td> <td align="right">
8
</td></tr> <tr><td>
VAĐENJE  ZUBA (Tooth extraction)
</td> <td align="right">
130
</td> <td align="right">
17
</td></tr> <tr><td>
KOMPLICIRANO VAĐENJE (Complex extraction)
</td> <td align="right">
170
</td> <td align="right">
23
</td></tr> <tr><td>
SKIDANJE KAMENCA (Cleaning and polishing) 
</td> <td align="right">
150
</td> <td align="right">
20
</td></tr> <tr><td>
JEDNOPLOŠNI ISPUN ( 1 surface filling)   
</td> <td align="right">
220
</td> <td align="right">
30
</td></tr> <tr><td>
DVOPLOŠNI ISPUN ( 2 surface filling)   
</td> <td align="right">
270
</td> <td align="right">
36
</td></tr> <tr><td>
TROPLOŠNI ISPUN (3 surface filling)     
</td> <td align="right">
310
</td> <td align="right">
42
</td></tr> <tr><td>
LIJEČENJE KORIJENA ZUBA (root canal treatment)       
</td> <td align="right">
300
</td> <td align="right">
40
</td></tr> <tr><td>
IZBJELJIVANJE LIJEČENOG ZUBA (bleaching 1 tooth)        
</td> <td align="right">
160
</td> <td align="right">
22
</td></tr> <tr><td>
IZBJELJIVANJE ZUBA  - PO LUKU (bleaching arch) )        
</td> <td align="right">
600
</td> <td align="right">
81
</td></tr> <tr><td>
ZUBNI NAKIT – SKYCE (jewlery)          
</td> <td align="right">
200
</td> <td align="right">
27
</td></tr> <tr><td>
DJELOMIČNA METALNA PROTEZA (partial alloy denture)            
</td> <td align="right">
3240
</td> <td align="right">
437
</td></tr> <tr><td>
DJELOMIČNA AKRILATNA PROTEZA (partial acrylate denture)            
</td> <td align="right">
2900
</td> <td align="right">
391
</td></tr> <tr><td>
TOTALNA AKRILATNA PROTEZA (full acrylate denture)             
</td> <td align="right">
2940
</td> <td align="right">
398
</td></tr> <tr><td>
POPRAVAK PROTEZE (denture repair)                 
</td> <td align="right">
250
</td> <td align="right">
34
</td></tr> <tr><td>
METAL-KERAMIČKA KRUNICA (metal-ceramic crown)                 
</td> <td align="right">
990
</td> <td align="right">
134
</td></tr> <tr><td>
BEZMETALNA KERAMIČKA KRUNICA (full ceramic crown)                  
</td> <td align="right">
1600
</td> <td align="right">
216
</td></tr> <tr><td>
MOST METAL-KER. PO ČLANU (ceramic bridge per unit)                  
</td> <td align="right">
990
</td> <td align="right">
134
</td></tr> <tr><td>
NADOGRADNJA NA KORIJEN ZUBA (root buildup)                    
</td> <td align="right">
570
</td> <td align="right">
77
</td></tr> <tr><td>
PREGLED (examination/consultation)                    
</td> <td align="right">
60
</td> <td align="right">
8
</td></tr> <tr><td>
RENTGEN ZUBA (x-ray)                  
</td> <td align="right">
65
</td> <td align="right">
9
</td></tr>
</table> 
<div class="cjenikOpis">
	<span class="text-secondary">When more then 1 service is done in our practice discounts up to 20 % regularly apply for cash payments.</span>
</div> 
<div class="cjenikOpis">
	<span class="text-secondary">Kad se radi više usluga u našoj ordinaciji u pravilu obračunavamo popuste i do 20 % za plaćanje gotovinom.</span>
</div>
</div>

<div class="button" @click="back()"><div class="buttonName">back</div></div>
<div class="footer">Copyright &copy; 2020</div>
</div> 

</template>

<script>

import { mapGetters } from 'vuex';

export default{

computed: mapGetters(['getKontaktFlag']),

   head(){
	return {
	   title: "Cjenik radova ordinacije",
	   meta:[
		{
		  hid: "description",
		  name: "description",
		  content: "Cjenik ordinacije dr. Nedjeljko Amanović"

		}
	     ]
	}
   },
methods:{
	back(){
		this.$router.push('/kontakt');
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
	color:$secondary-color;

}

.cjenik{
	padding: 10vh;
	background:rgba(lighten($primary-color,5), 0.9);
	color: #fff;
	.table{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
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
.cjenik{
	padding: 10vh;
	background:rgba(lighten($primary-color,5), 0.9);
	color: #fff;
	font-size: 0.6rem;
	.table{
		display: flex;
    		flex-flow: column wrap;
    		align-items: center;
    		justify-content: center;
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



