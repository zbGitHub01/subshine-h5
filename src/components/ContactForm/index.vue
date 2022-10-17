<template lang="pug">
.contact-form
  .title 联系我们
  .desc 留下您的信息，我们的工作人员会及时与您取得联系
  van-form.form(@submit="onSubmit")
    van-field(v-model="formData.name" autocomplete="off" placeholder="名字")
    van-field(v-model="formData.post" autocomplete="off" placeholder="职位")
    van-field(v-model="formData.phone" autocomplete="off" placeholder="电话")
    van-field(v-model="formData.email" autocomplete="off" placeholder="邮箱")
    van-field(v-model="formData.company" autocomplete="off" placeholder="公司名称")
    van-field(v-model="formData.remark" autocomplete="off" :row="4" type="textarea" placeholder="您需要了解和解决的问题")
    van-button(type="primary" block native-type="submit") 提交
</template>

<script setup>
import { reactive } from 'vue'
import 'vant/es/notify/style'
import 'vant/es/toast/style';
import { Notify } from 'vant'
import { Toast } from 'vant'
import http from '@/utils/http'

const formData = reactive({
  name: '',
  post: '',
  phone: '',
  email: '',
  company: '',
  remark: ''
})
const defaultFormData = JSON.parse(JSON.stringify(formData))
const onSubmit = async () => {
  const { name, post, phone, email, company, remark } = formData
  if (!name || !post || !phone || !email || !company || !remark) {
   Notify({ type: 'danger', message: '您有信息未填写' })
   return
  }
  Toast.loading('加载中...')
  const { code } = await http.post('/api/contactUs/add', formData)
  Toast.clear()
  if (code === 200) {
    Toast.success('提交成功!')
    Object.assign(formData, defaultFormData)
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  padding: 80px 50px;
  background-color: #191B27;
  .title {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: white;
  }
  .desc {
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    opacity: 0.8;
    margin-top: 30px;
    text-align: center;
  }
}
.form {
  margin-top: 60px;
  :deep(.van-cell) {
    background-color: rgba(255, 255, 255, 0.06);
  }
  :deep(.van-field__control) {
    color: white;
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
    &::-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }
  :deep(.van-cell) {
    margin-bottom: 26px;
    &:after {
      content: none;
    }
  }
}
</style>
