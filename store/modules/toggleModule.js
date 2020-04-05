const toggleModule = {

	state: {
		menuFlag: false,
		uslugeFlag: false

	},
	getters: {
		
		getMenuFlag: (state) => state.menuFlag,
		getUslugeFlag: (state) => state.uslugeFlag

	},
	actions: {
		
		setMenuFlag({commit}){
			console.log(this.uslugeFlag);
			if(this.uslugeFlag==false||this.uslugeFlag==undefined&&this.menuFlag==true){

					this.uslugeFlag = true;
					commit('setUsluge',true);

				}
		
			if(this.uslugeFlag==true&&this.menuFlag==false){
				this.uslugeFlag=false;
				commit('setUsluge', false);
			}
			this.menuFlag=!this.menuFlag;
			commit('setMenu', this.menuFlag)

		},
		 
		setUslugeFlag({commit}, value){
			this.uslugeFlag=value;
		 	commit('setUsluge',value)

		}

	},
	mutations: {
		setMenu: (state, menuFlag) => (state.menuFlag = menuFlag),
		setUsluge: (state, uslugeFlag) => (state.uslugeFlag = uslugeFlag) 

}

}

export default toggleModule
