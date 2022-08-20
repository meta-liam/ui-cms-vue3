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
    <el-form-item label="名称" prop="symbol">
      <el-input v-model="ruleForm.symbol" style="width: 50%" />
    </el-form-item>
    <el-form-item label="类型" prop="type">
      <el-input v-model="ruleForm.type" style="width: 20%" />
      <span class="decs">(深 sz,上海 sh)</span>
    </el-form-item>
    <el-form-item label="启动状态" prop="status">
      <el-select v-model="ruleForm.status" class="m-2" placeholder="Select">
        <el-option v-for="item in optionsStatus" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item label="备注" prop="info">
      <el-input v-model="ruleForm.info" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef, $event)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef, $event)">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref, getCurrentInstance } from 'vue'
import { rules, optionsStatus } from '../symbol'
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
