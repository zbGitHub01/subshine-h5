<script setup>
import { reactive, toRefs, onUnmounted, onMounted, nextTick } from 'vue';
import { sunshineStore } from '@/store/module/sunshine.js';
import { useRouter, useRoute } from 'vue-router';

  const store = sunshineStore();
  const router = useRouter();
  const route = useRoute();
  const state = reactive({
    currentAct: {}
  })

  // sessionStorage中取当前活动信息
  const getCurrentActivity = () => {
     state.currentAct = {...JSON.parse(sessionStorage.getItem('currentActivity'))};
  };

  // 根据盒子宽度按比例设置api图片的宽高
  const computedImgAttribute = () => {
    var imgWidth = document.getElementsByClassName('content-body')[0].offsetWidth;
    var imgArr = document.getElementsByTagName('img');
    nextTick(()=>{
      var imgList = Array.prototype.slice.call(imgArr);
      for(var element in imgList) {
        const curImgWidth = imgList[element].width;
        const curImgHeight = imgList[element].height;
        const percentage = curImgWidth / imgWidth;
        imgList[element].style.width = imgWidth + 'px';
        imgList[element].style.height = curImgHeight / percentage + 'px';
      }
    })
  }

  onMounted(() => {
    computedImgAttribute();
  })

  // 报名
  const handleSign = () => {
    router.push({name: 'Signup'});
  }

  // 债务查询跳转
  const gotoQueryDebt = () => {
    window.location.href = 'https://h5.51gouxiao.com/?code=051NSh2w3DEbvZ2H210w3gCldp3NSh2X&state=#/pages/debtSearch/debtSearch?isSunProject=true'
  }

  getCurrentActivity();


</script>

<template>
  <div class="main" :style="`background:${state.currentAct.colorString}`">
    <header :style="`background:url(${state.currentAct.picture}) no-repeat center;background-size: 100% 100%;`"></header>
    <section>
      <div class="content-fir">
        <div>
          <span>欠款金额</span><span>****</span>
          <br/>
          <span>可延期还款日期</span><span>****-**-**</span>
        </div>
        <div>
          <van-button class="fir-btn" round @click="gotoQueryDebt">债务查询结果</van-button>
          <van-button class="sec-btn" round @click="handleSign" >我要报名</van-button>
        </div>
      </div>
      <div>
        <div class="content-body" v-html="state.currentAct.html"></div>
      </div>
      <div class="footer-font">本活动最终解释权归浙江东岸科技有限公司所有</div>
    </section>
  </div>
</template>
<style scoped lang='scss'>
.main {
  padding-bottom: 80px;
  width: 750px;
  // height: 2677px;
  overflow: hidden;
  header {
    width: 100%;
    height: 426px;
    // background: url('@/assets/sunshine/banner_newHeader.png') no-repeat center;
    // background-size: 100% 100%;
    overflow: hidden;

    .banner {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
    }
    // & div:nth-child(1) {
    //   margin: 0 auto;
    //   margin-top: 51px;
    //   width: 394px;
    //   height: 102px;
    //   background: url('@/assets/sunshine/activity_font2.png') no-repeat center;
    //   background-size: 100% 100%;
    // }
    // & div:nth-child(2) {
    //   display: flex;
    //   width: 100%;
    //   height: 133px;
    //   span {
    //     display: inline-block;
    //   }
    //   & span:first-child {
    //     margin-left: 35px;
    //     width: 486px;
    //     height: 133px;
    //     background: url('../../../../assets/sunshine/activity_font.png') no-repeat center;
    //     background-size: 100% 100%;
    //     & + span {
    //       margin-top: 53px;
    //       height: 62px;
    //       font-size: 62px;
    //       font-family: PangMenZhengDao;
    //       color: #FFFFFF;
    //       line-height: 71px;
    //       text-shadow: 0px 6px 8px rgba(0,0,0,0.5);
    //     }
    //   }
    // }
    // & div:last-child {
    //   margin: 0 auto;
    //   margin-top: 14px;
    //   width: 540px;
    //   height: 46px;
    //   background: #FFA651;
    //   line-height: 46px;
    //   border-radius: 1px 1px 23px;
    //   div {
    //     display: flex;
    //     display: -webkit-flex;
    //     justify-content: space-between;
    //     width: 443px;
    //     height: 100%;
    //     span {
    //       font-size: 26px;
    //       font-family: PingFangSC-Regular, PingFang SC;
    //       font-weight: 400;
    //       color: #FFFFFF;
    //       letter-spacing: 15px;
    //   }
    //   }
    // }
  }
  section {
    margin:  0 auto;
    width: 690px;
    overflow: hidden;
    .content-fir {
      width: 100%;
      height: 354px;
      background: #FFFFFF;
      border-radius: 10px;
      & div:first-child {
        display: flex;
        padding: 36px 0;
        width: 100%;
        height: 160px;
	      flex-wrap: wrap;  // 多行显示
        justify-content: center;
        align-items: center;
	      align-content: center;
        span {
          display: inline-block;
          width: calc(690px * 0.457);
          height: calc(160px * 0.45);
          background: #FFFFFF;
          border: 1px solid #666;
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          text-align: center;
          line-height: calc(160px * 0.45);
          &:not(:nth-last-of-type(-n+2)) {
            border-bottom: 0px;
          }
        }
      }
      & div:last-child {
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        margin: 0 auto;
        width: calc(690px * 0.457 * 2);
      }
      
      & + div {
        margin-top: 30px;
        padding-top: 1px;
        width: 100%;
        background: #FFFFFF;
        border-radius: 10px;
      }
    }
  }
}
.content-body {
  padding-bottom: 40px;
  width: 626px;
  margin: 0 auto;
  margin-top: 40px;
  img {
    width: 626px;
  }
}
.footer-font {
  margin: 0 auto;
  margin-top: 30px;
  width: 504px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #064F41;
  line-height: 33px;
}
:deep(.fir-btn) {
  width: 300px;
  height: 80px;
  background: rgba(0,157,141,0.08);
  border-radius: 40px;
  border: 2px solid #009D8D;
  .van-button__text {
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #009D8D;
  }
}
:deep(.sec-btn) {
  width: 300px;
  height: 80px;
  border: none;
  background: linear-gradient(270deg, #00BF92 0%, #009D8D 100%);
  box-shadow: 0px 8px 20px 0px rgba(0,137,122,0.4);
  border-radius: 40px;
  .van-button__text {
    font-size: 28px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }
}
</style>