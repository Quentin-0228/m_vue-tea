<template>
	<ul class="icons">
		<li v-for='(item,index) in iconsList' :key='index'>
			<img :src="item.imgUrl" alt="">
			<span>{{item.title}}</span>
		</li>
	</ul>
</template>

<script>
export default{
	props:{
		iconsList:Array
	}
}
</script>

<style scoped>
.icons{
	display: flex;
	justify-content: space-around;
	padding:0.4rem 0;
}
.icons li{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.icons img{
	width: 1.013333rem;
	height: 1.013333rem;
}
.icons span{
	padding:0.16rem 0;
	font-size:0.426666rem;
}
</style>
