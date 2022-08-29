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
    <el-form-item label="邮箱">
      {{ ruleForm.email }}
    </el-form-item>
    <el-form-item label="名字">
      {{ ruleForm.name }}
    </el-form-item>
    <el-form-item label="原密码" prop="oldPassword">
      <el-input v-model="ruleForm.oldPassword" style="width: 50%" />
    </el-form-item>
    <el-form-item label="新密码" prop="newPsw">
      <el-input v-model="ruleForm.newPsw" style="width: 50%" />
    </el-form-item>
    <el-form-item label="确认密码" prop="newPsw2">
      <el-input v-model="ruleForm.newPsw2" style="width: 50%" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef, $event)">修改密码</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { getInfo, rules, updateUserPsw } from './user'

export default {
  setup() {
    const ruleFormRef = ref({})
    const ruleForm = ref({})
    const submitForm = async (formEl, event) => {
      if (!formEl) return
      await formEl.validate((valid, fields) => {
        if (valid) {
          updatePsw()
        } else {
          console.log('error submit!', fields)
        }
      })
      if (event) {
        // eslint-disable-next-line no-unused-expressions
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true)
      }
    }
    const updatePsw = async () => {
      if (ruleForm.value.newPsw !== ruleForm.value.newPsw2) {
        ElMessage({ message: '新密码和验证密码不一样', type: 'error' })
      }
      const rs = await updateUserPsw(ruleForm.value)
      if (rs.result) {
        ElMessage({ message: rs.msg, type: 'success' })
      } else {
        ElMessage({ message: rs.msg, type: 'error' })
      }
    }
    onMounted(async () => {
      const info = await getInfo()
      // eslint-disable-next-line no-const-assign
      ruleForm.value = { ...info }
    })
    return { rules, ruleForm, submitForm, ruleFormRef }
  },
}
</script>
