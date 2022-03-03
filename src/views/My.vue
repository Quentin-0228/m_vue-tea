<template>
	<div class='my container'>
		<header>
			
			<div class='user-info' v-if='loginStatus'>
				<img :src="userInfo.imgUrl" alt="">
				<span>{{userInfo.nickName}}</span>
			</div>
			<div v-else class='login' @click='goLogin'>登录/注册</div>
			
		</header>
		<section>
			<ul>
				<li @click='goPath'>地址管理</li>
				<li v-if='loginStatus' @click='loginOut'>退出登录</li>
			</ul>
		</section>
		<Tabbar></Tabbar> 
	</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import Tabbar from '@/components/common/Tabbar.vue'
export default {
  name: "My",
  components:{
  	Tabbar
  },
  computed:{
	...mapState({
		loginStatus:state=>state.user.loginStatus,
		userInfo:state=>state.user.userInfo
	})
  },
  methods:{
	  ...mapMutations(['loginOut']),
	  goLogin(){
		  this.$router.push('/login');
	  },
      //进入地址管理
      goPath(){
          this.$router.push('/path');
      }
  }
};
</script>
<style scoped lang='scss'>
header{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 4.266666rem;
	background-color: #B0352F;
	.login{
		padding:0.16rem 0.4rem;
		font-size:0.426666rem;
		color:#fff;
		background-color:#F6AB32;
		border-radius: 6px;
	}
	.user-info{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		img{
			width: 1.76rem;
			height:1.76rem;
			border-radius: 50%;
		}
		span{
			padding:0.533333rem 0;
			font-size:0.48rem;
			color:#fff;
		}
	}
}
section{
	flex:1;
	overflow: hidden;
	ul li{
		padding:0.4rem;
		font-size:0.426666rem;
	}
}
</style>
