import { 
    USER_LOGIN,
    INIT_USER,
    LOGIN_OUT
} from './mutations-types.js'

export default{
	state:{
		loginStatus:false,//登录状态
		token:null,	//token
		userInfo:{}//用户信息：用户的头像|用户昵称
	},
	getters:{
		
	},
	mutations:{
		//设置
		[USER_LOGIN](state,user){
			state.loginStatus = true;
			state.token = user.token;
			state.userInfo = user;
			//持久化存储==》本地存储
			localStorage.setItem('teaUserInfo',JSON.stringify(user));
		},
		//读取
		[INIT_USER]( state ){
			let userInfo = JSON.parse( localStorage.getItem('teaUserInfo') );
			if( userInfo ){
				state.loginStatus = true;
				state.token = userInfo.token;
				state.userInfo = userInfo;
			}
		},
		//退出登录
		[LOGIN_OUT]( state ){
			state.loginStatus = false;
			state.token = null;
			state.userInfo = {};
			localStorage.removeItem('teaUserInfo');
		}
	},
	actions:{
		
	}
	
}