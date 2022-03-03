<template>
    <div class='path-index container'>
        <Header>
            <span v-if='pathStatus'>添加地址</span>
            <span v-else>编辑地址</span>
        </Header>
        <section>
            <van-address-edit
              v-if='pathStatus'
              :area-list="areaList"
              show-set-default
              @save="onAdd"
            />
            
            <van-address-edit
              v-else
              :address-info='AddressInfo'
              :area-list="areaList"
              show-delete
              show-set-default
              show-search-result
              @save="onUpdate"
              @delete="onDelete"
            />
          
        </section>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import { Toast } from 'vant';
import Header from '@/components/path/Header.vue'
import Tabbar from '@/components/common/Tabbar.vue'
import http from '@/common/api/request.js'
export default{
    data() {
        return {
            pathStatus:false,
            AddressInfo:{},
            areaList:{
                province_list: {
                  110000: '北京市',
                  120000: '天津市',
                },
                city_list: {
                  110100: '北京市',
                  120100: '天津市',
                },
                county_list: {
                  110101: '东城区',
                  110102: '西城区',
                  120101: '塘沽区',
                },
            }
        };
    },
    components:{
        Header,
        Tabbar
    },
    mounted(){
        let key = JSON.parse(this.$route.params.key);
        //是通过添加进来的
        if( key == 'add' ){
            this.pathStatus = true;
        }else{//编辑进来的
            this.AddressInfo = key;
            this.AddressInfo.isDefault = this.AddressInfo.isDefault == 1 ? true : false;
        }
        
    },
    methods: {
        //点击保存触发 ==> 增加
        onAdd( content ) {
            content.isDefault = content.isDefault==true ? 1 : 0;
            http.$axios({
            	url:'/api/addAddress',
                method:"post",
                headers:{
                    token:true
                },
                data:{
                    ...content
                }
            }).then(res=>{
                if( !res.success ) return;
                Toast(res.msg);
                this.$router.push('/path');
            })
        },
        //点击保存触发 ==> 修改
        onUpdate( content ){
            content.isDefault = content.isDefault==true ? 1 : 0;
            http.$axios({
            	url:'/api/updateAddress',
                method:"post",
                headers:{
                    token:true
                },
                data:{
                    ...content
                }
            }).then(res=>{
                if( !res.success ) return;
                Toast(res.msg);
                this.$router.push('/path');
            })
        },
        //删除
        onDelete(content) {
            
            http.$axios({
            	url:'/api/deleteAddress',
                method:"post",
                headers:{
                    token:true
                },
                data:{
                    id:content.id
                }
            }).then(res=>{
                if( !res.success ) return;
                Toast(res.msg);
                this.$router.push('/path');
            })
        },
    },
}
</script>

<style lang='scss' scoped>
section{
    background-color: #F7F7F7;
    .van-address-edit{
        padding: 0;
    }
    ::v-deep .van-address-edit__buttons{
        display: flex;
        justify-content: center;
        align-items:center;
        flex-wrap: wrap;
    }
    ::v-deep .van-button--danger{
        width: 8rem;
        height: 1.066666rem;
        background-color: #b0352f;
    }
    ::v-deep .van-button--default{
        width: 8rem;
        height: 1.066666rem;
    }
}
::v-deep .tabbar{
    border-top:2px solid #ccc;
}
</style>
