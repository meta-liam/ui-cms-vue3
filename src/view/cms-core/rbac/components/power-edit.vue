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
    <el-form-item label="名称" prop="name">
      <el-input v-model="ruleForm.name" style="width: 50%" />
    </el-form-item>
    <el-form-item label="父级名称" prop="fname">
      <el-input v-model="ruleForm.fname" style="width: 50%" disabled />
    </el-form-item>
    <el-form-item label="状态" prop="status">
      <el-select v-model="ruleForm.status" class="m-2" placeholder="Select">
        <el-option v-for="item in optionsStatus" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item label="标签" prop="tag">
      <el-input v-model="ruleForm.tag" style="width: 50%" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef, $event)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef, $event)">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref, getCurrentInstance } from 'vue'
import { rules, optionsStatus } from '../power'

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
