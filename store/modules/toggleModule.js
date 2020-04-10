const toggleModule = {

	state: {
		menuFlag: false,
		naslovnaFlag: false,
		uslugeFlag: false,
		radoviFlag: false,
		kontaktFlag: false,
		stateBefore: "none" 

	},
	getters: {
		
		getMenuFlag: (state) => state.menuFlag,
		getNaslovnaFlag: (state) => state.naslovnaFlag,
		getUslugeFlag: (state) => state.uslugeFlag,
		getRadoviFlag: (state) => state.radoviFlag,
		getKontaktFlag: (state) => state.kontaktFlag

	},
	actions: {
		
		setMenuFlag({commit}){

			if(this.stateBefore=="naslovna"&&this.menuFlag==true){
				this.naslovnaFlag=true;
				commit('setNaslovna', true);
			}else if(this.naslovnaFlag==true&&this.menuFlag==false){
				this.naslovnaFlag = false;
				commit('setNaslovna', false)
				}

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
		setNaslovnaFlag({commit}, value){
			this.stateBefore = "naslovna";
			this.naslovnaFlag = value;
			this.uslugeFlag = false;
			this.radoviFlag = false;
			this.kontaktFlag = false;
		 	commit('setNaslovna',value);
			commit('setUsluge', false);
			commit('setRadovi', false);
			commit('setKontakt', false);
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
		setNaslovna: (state, naslovnaFlag) => (state.naslovnaFlag = naslovnaFlag),
		setUsluge: (state, uslugeFlag) => (state.uslugeFlag = uslugeFlag),
		setRadovi: (state, radoviFlag) => (state.radoviFlag = radoviFlag),
		setKontakt: (state, kontaktFlag) => (state.kontaktFlag = kontaktFlag)
}

}

export default toggleModule
