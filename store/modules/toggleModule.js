const toggleModule = {

	state: {
		menuFlag: false,
		uslugeFlag: false,
		radoviFlag: false,
		kontaktFlag: false

	},
	getters: {
		
		getMenuFlag: (state) => state.menuFlag,
		getUslugeFlag: (state) => state.uslugeFlag,
		getRadoviFlag: (state) => state.radoviFlag,
		getKontaktFlag: (state) => state.kontaktFlag

	},
	actions: {
		
		setMenuFlag({commit}){
			console.log(this.uslugeFlag);
			if((this.radoviFlag==false||this.radoviFlag==undefined)&&(this.kontaktFlag==false||this.kontaktFlag==undefined)&&this.menuFlag==true){

					this.uslugeFlag = true;
					commit('setUsluge',true);

				}
			if((this.kontaktFlag==false||this.kontaktFlag==undefined)&&this.menuFlag==true){

					this.radoviFlag = true;
					commit('setRadovi',true);

				}
		
			if(this.uslugeFlag==true&&this.menuFlag==false){
				this.uslugeFlag = false;
				commit('setUsluge', false);
			}
			if(this.radoviFlag==true&&this.menuFlag==false){
				this.radoviFlag = false;
				commit('setRadovi', false);

				}
			this.menuFlag=!this.menuFlag;
			commit('setMenu', this.menuFlag)

		},
		setUslugeFlag({commit}, value){
			console.log("ds",value);
			this.uslugeFlag = value;
		 	commit('setUsluge',value)

		},
		setRadoviFlag({commit}, value){
			console.log("value radovi:",value);
			this.radoviFlag = value;
		 	commit('setRadovi', value)

		},
		setKontaktFlag({commit}, value){
			this.kontaktFlag = value;
		 	commit('setKontakt',value)

		}

	},
	mutations: {
		setMenu: (state, menuFlag) => (state.menuFlag = menuFlag),
		setUsluge: (state, uslugeFlag) => (state.uslugeFlag = uslugeFlag),
		setRadovi: (state, radoviFlag) => (state.radoviFlag = radoviFlag),
		setKontakt: (state, kontaktFlag) => (state.kontaktFlag = kontaktFlag)
}

}

export default toggleModule
