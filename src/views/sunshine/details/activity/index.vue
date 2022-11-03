<script setup>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
    const state = reactive({})
    onBeforeMount(() => {})
    onMounted(() => {})
</script>

<template>
  <div class="main">
    <header>
      <div></div>
      <div>
        <span></span>
        <span>(北京)</span>
      </div>
      <div>
        <div>
          <span>邀你一起</span><span>助力北京公益</span>
        </div>
      </div>
    </header>
    <section>
      <div class="content-fir">
        <div>
          <span>欠款金额</span><span>222</span>
          <br/>
          <span>可延期还款日期</span><span>222</span>
        </div>
        <div>
          <van-button class="fir-btn" round >债务查询结果</van-button>
          <van-button class="sec-btn" round >我要报名</van-button>
        </div>
      </div>
      <div>
        顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶
        顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶
        顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶
      </div>
    </section>
  </div>
</template>
<style scoped lang='scss'>
.main {
  width: 750px;
  height: 2677px;
  background: linear-gradient(180deg, #00B190 0%, #008E83 100%);
  overflow: hidden;
  header {
    width: 100%;
    height: 535px;
    background: url('@/assets/sunshine/banner_head.png') no-repeat center;
    background-size: 100% 100%;
    overflow: hidden;
    & div:nth-child(1) {
      margin: 0 auto;
      margin-top: 51px;
      width: 394px;
      height: 102px;
      background: url('@/assets/sunshine/activity_font2.png') no-repeat center;
      background-size: 100% 100%;
    }
    & div:nth-child(2) {
      display: flex;
      width: 100%;
      height: 133px;
      span {
        display: inline-block;
      }
      & span:first-child {
        margin-left: 35px;
        width: 486px;
        height: 133px;
        background: url('../../../../assets/sunshine/activity_font.png') no-repeat center;
        background-size: 100% 100%;
        & + span {
          margin-top: 53px;
          height: 62px;
          font-size: 62px;
          font-family: PangMenZhengDao;
          color: #FFFFFF;
          line-height: 71px;
          text-shadow: 0px 6px 8px rgba(0,0,0,0.5);
        }
      }
    }
    & div:last-child {
      margin: 0 auto;
      margin-top: 14px;
      width: 540px;
      height: 46px;
      background: #FFA651;
      line-height: 46px;
      border-radius: 1px 1px 23px;
      div {
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        width: 443px;
        height: 100%;
        span {
          font-size: 26px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          letter-spacing: 15px;
      }
      }
    }
  }
  section {
    position: relative;
    top: -108px;
    width: 690px;
    margin:  0 auto;
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
        width: 100%;
        background: #FFFFFF;
        border-radius: 10px;
      }
    }
  }
}
::v-deep .fir-btn {
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
::v-deep .sec-btn {
  width: 300px;
  height: 80px;
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