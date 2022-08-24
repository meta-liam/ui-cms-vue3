<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="140px"
    class="demo-ruleForm"
    size="default"
    status-icon
  >
    <el-form-item label="邮件" prop="email">
      <el-input v-model="ruleForm.email" style="width: 50%" disabled v-if="ruleForm.id !== '0'" />
      <el-input v-model="ruleForm.email" style="width: 50%" v-if="ruleForm.id === '0'" />
    </el-form-item>
    <el-form-item label="密码" prop="password" v-if="ruleForm.id === '0'">
      <el-input v-model="ruleForm.password" style="width: 50%" />
    </el-form-item>
    <el-form-item label="名字" prop="name">
      <el-input v-model="ruleForm.name" style="width: 50%" />
    </el-form-item>
    <el-form-item label="昵称" prop="nickname">
      <el-input v-model="ruleForm.nickname" style="width: 50%" />
    </el-form-item>
    <el-form-item label="状态" prop="status">
      <el-select v-model="ruleForm.status" class="m-2" placeholder="Select">
        <el-option v-for="item in optionsStatus" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item label="电话" prop="phone">
      <el-input v-model="ruleForm.phone" style="width: 20%" />
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input v-model="ruleForm.remark" style="width: 20%" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef, $event)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef, $event)">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref, getCurrentInstance } from 'vue'
import { rules, optionsStatus } from '../user'
// import type { FormInstance, FormRules } from 'element-plus'

export default {
  props: {
    item: {},
  },
  setup(props) {
    console.log('[INFO] setup:', props.item)
    const ruleFormRef = ref({})
    const ruleForm = reactive({
      ...props.item,
    })
    // const reste = { ...dataItem }
    const { proxy } = getCurrentInstance()
    const callBack = (ty, item, event) => {
      // console.log('son:', ty, item);
      proxy.$emit('handle', ty, item)
      if (event) {
        // eslint-disable-next-line no-unused-expressions
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true)
      }
    }
    const submitForm = async (formEl, event) => {
      console.log('ruleForm:', ruleForm)
      if (!formEl) return
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
          callBack('form-submit', ruleForm, event)
        } else {
          console.log('error submit!', fields)
        }
      })
    }
    const resetForm = (formEl, event) => {
      callBack('form-cancel', ruleForm, event)
    }
    return { optionsStatus, resetForm, submitForm, rules, ruleForm, ruleFormRef }
  },
}
</script>

<style>
.decs {
  font-size: 12px;
  line-height: 16px;
}
</style>
