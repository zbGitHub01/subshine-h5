<script setup>
import { reactive, toRefs, onBeforeMount, onMounted, ref, computed } from 'vue'
import { Dialog } from 'vant';
import 'vant/es/dialog/style';
const VanDialog = Dialog.Component;

  const state = reactive({
    form: {
      name: '',
      phone: '',
      code: '',
      idCard: '',
      workPlace: '',
      nativePlace: '',
      remark: '',
    },
    inputArr: [
      {
        label: '用户名',
        value: 'name',
      },
      {
        label: '手机',
        value: 'phone',
      },
      {
        label: '验证码',
        value: 'code',
      },
      {
        label: '身份证号',
        value: 'idCard',
      },
      {
        label: '工作地点',
        value: 'workPlace',
      },
      {
        label: '户籍所在地',
        value: 'nativePlace',
      },
    ]
  })
  const show = ref(false);

  onBeforeMount(() => {})
  onMounted(() => {})

  const onSubmit = values => {
    show.value = true;
  };
  // 当前是否是文本域
  const isTextarea = value => {
    return value === 'remark';  }
</script>

<template>
  <div class="main-cnt">
    <div class="content">
      <header>申请报名</header>
      <section>
        <van-form @submit="onSubmit">
          <van-cell-group 
            v-for="item,index in state.inputArr"
            :key="index" 
            inset >
            <van-field
              v-model="state.form[item.value]"
              :name="item.value"
              :label="item.label"
              :rules="[
                { required: true, message: `请填写${item.label}` },
                // item.value==='phone'?{pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}:
                // item.value==='idCard'?{pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '身份证格式错误！'}:''
              ]"
            >
              <template #button>
                <van-button v-if="item.value==='code'" size="small">发送验证码</van-button>
              </template>
            </van-field>
          </van-cell-group>
          <van-cell-group class="remark" inset>
            <van-field
              v-model="state.form.remark"
              name="remark"
              rows="4"
              autosize
              label="留言"
              type="textarea"
              maxlength="100"
            />
          </van-cell-group>
          <div class="sub">
            <van-button round block native-type="submit">
              确认提交
            </van-button>
          </div>
        </van-form>
      </section>
    </div>
    <VanDialog
      v-model:show="show" 
      title="标题"
      theme="round-button"
    >
      报名完成，等待人工审核
    </VanDialog>
  </div>
</template>
<style scoped lang='scss'>
.main-cnt {
  margin: 0 auto;
  width: 710px;
  min-height: 1225px;
  background: #FFA651;
  border-radius: 20px;
  overflow: hidden;
  .content {
    margin: 0 auto;
    margin-top: 11px;
    width: 690px;
    height: 1204px;
    background: #FFFFFF;
    border-radius: 20px;
    header {
      position: relative;
      top: -2px;
      width: 192px;
      margin: 0 auto;
      width: 444px;
      height: 80px;
      background: url('../../../../assets/sunshine/juxing.png') no-repeat center;
      background-size: 100% 100%;
      font-size: 48px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #FFFFFF;
      text-align: center;
    }
    section {
      height: 1040px;
      margin-top: 52px;
      overflow: auto;
    }
  }
}
:deep(.van-form) {
  width: 630px;
  margin: 0 auto;
  .van-cell-group {
    margin: 0;
  }
  .van-field__button .van-button {
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #0165FF;
  }
  .van-cell {
    margin: 12px 0;
    padding: 0;
    justify-content: space-between;
    .van-cell__title {
      width: auto;
      height: 44px;
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #16494B;
      line-height: 44px;
    }
    .van-cell__value {
      margin-right: 3px !important;
      flex: 0;
      width: 430px;
      .van-field__body {
        width: 430px;
        background: #FFFFFF;
        border-radius: 6px;
        border: 1px solid #979797;
      }
      input {
        height: 64px;
      }
    }
  }
  .remark {
    .van-cell {
      display: block;
      margin: 0;
      .van-field__body {
        margin-top: 15px;
        width: 628px;
        height: 268px;
        background: #FFFFFF;
        border-radius: 6px;
        border: 1px solid #9797
      }
    }
  }
.sub {
  .van-button {
    margin-top: 60px;
  }
  .van-button--round {
    border-radius: 6px;
  }
  .van-button--normal {
    font-size: 32px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #FFFFFF;
  }
  .van-button--default {
    background: #FFA651;
  }
  .van-button::before {
    width: 630px;
    height: 88px;
    background: #FFA651;
    border-radius: 6px;
  }
}
}
:deep(.van-dialog__header) {
  font-size: 36px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #009D8D;
}
:deep(.van-dialog__content) {
  height: 184px;
  font-size: 30px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  text-align: center;
  line-height: 184px;
}
:deep(.van-dialog__footer) {
  margin-bottom: 30px;
  button {
    width: 400px;
    height: 86px;
    background: linear-gradient(270deg, #00BF92 0%, #009D8D 100%);
    border-radius: 43px;
  }
}
</style>