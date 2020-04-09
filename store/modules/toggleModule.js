const toggleModule = {

	state: {
		menuFlag: false,
		uslugeFlag: false,
		radoviFlag: false,
		kontaktFlag: false,
		stateBefore: "none" 

	},
	getters: {
		
		getMenuFlag: (state) => state.menuFlag,
		getUslugeFlag: (state) => state.uslugeFlag,
		getRadoviFlag: (state) => state.radoviFlag,
		getKontaktFlag: (state) => state.kontaktFlag

	},
	actions: {
		
		setMenuFlag({commit}){

			if(this.stateBefore=="usluge"&&this.menuFlag==true){
				this.uslugeFlag=true;
				commit('setUsluge', true);
			}else if(this.uslugeFlag==true&&this.menuFlag==false){
				this.uslugeFlag = false;
				commit('setUsluge', false)
				}

			if(this.stateBefore=="radovi"&&this.menuFlag==true){
				this.radoviFlag=true;
				commit('setRadovi', true);
			}else if(this.radoviFlag==true&&this.menuFlag==false){
				this.radoviFlag = false;
				commit('setRadovi', false)
				}
			
			if(this.stateBefore=="kontakt"&&this.menuFlag==true){
				this.kontaktFlag=true;
				commit('setKontakt', true);
			}else if(this.kontaktFlag==true&&this.menuFlag==false){
				this.kontaktFlag = false;
				commit('setKontakt', false)
				}

			this.menuFlag=!this.menuFlag;
			commit('setMenu', this.menuFlag)

		},
		setUslugeFlag({commit}, value){
			this.stateBefore = "usluge";
			this.uslugeFlag = value;
		 	commit('setUsluge',value);
		},
		setRadoviFlag({commit}, value){
			this.stateBefore = "radovi";
			this.radoviFlag = value;
		 	commit('setRadovi', value);
		},
		setKontaktFlag({commit}, value){
			this.stateBefore = "kontakt";
			this.kontaktFlag = value;
		 	commit('setKontakt', value);
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
