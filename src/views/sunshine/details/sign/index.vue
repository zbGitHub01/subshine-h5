<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Dialog } from 'vant';
import http from '@/utils/http';
import { Toast } from 'vant';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
const VanDialog = Dialog.Component;

  const state = reactive({
    form: {
      name: '',
      phone: '',
      code: '',
      idCard: '',
      workAddress: '',
      registerLocation: '',
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

  const router = useRouter();
  const show = ref(false);
  const codeTime = ref(59);
  const phoneValidator = ref(false);
  const isCodeTime = ref(false);

  // 提交成功后的确认按钮回调
  const handleConfirm = () => {
    router.push({name: 'Activity'});
  }

  // 发送验证码
  const sendCode = async() => {
    if(phoneValidator.value) {
      const params = {
        phone: state.form.phone
      }
      isCodeTime.value = true;
      const res = await http.get("/api/activitiesApplicant/sendCode",params);
      // 验证码倒计时
      let interval = setInterval(() => {
        if(codeTime.value > 0){
          codeTime.value -- ;
        } else {
          codeTime.value = 59;
          isCodeTime.value = false;
          clearInterval(interval);
        }
      }, 1000);
    }
  }
  // 提交表单
  const onSubmit = async values => {
    const { id: activitiesId } = JSON.parse(sessionStorage.getItem('currentActivity'));
    const data = {
      ...values,
      activitiesId,
    }
    const res = await http.post("/api/activitiesApplicant/add",data);
    if(res.code!==200) {
      Toast.fail(msg);
    } else {
      show.value = true;
    } 

  };
   // 手机号格式校验 校验函数返回 true 表示校验通过，false 表示不通过
   const validator = val => {
    phoneValidator.value = /^1[3456789]\d{9}$/.test(val);
    return phoneValidator.value;
   };

  // 当前是否是文本域
  const isTextarea = value => value === 'remark';
</script>

<template>
  <div class="main-cnt">
    <div class="content">
      <header>申请报名</header>
      <section>
        <van-form ref="form" @submit="onSubmit" >
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
                item.value==='phone'?{validator, message: '手机号码格式错误！'}:
                item.value==='idCard'?{pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '身份证格式错误！'}:''
              ]"
            >
              <template #button>
                <van-button :disabled="isCodeTime" v-if="item.value==='code'" size="small" @click="sendCode">
                  {{!isCodeTime?'发送验证码':codeTime}}
                </van-button>
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
      @confirm="handleConfirm"
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
  margin-bottom: 25px;
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