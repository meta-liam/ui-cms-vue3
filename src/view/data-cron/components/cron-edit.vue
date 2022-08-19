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
    <el-form-item label="任务名称" prop="name">
      <el-input v-model="ruleForm.name" style="width: 50%" />
    </el-form-item>
    <el-form-item label="调度时间" prop="spec">
      <el-input v-model="ruleForm.spec" style="width: 20%" />
      <span class="decs">(格式: 秒 分 时 天 月 周 ,如：0 30 21 * * * 每天晚上21:30:00运行一次)</span>
    </el-form-item>
    <el-form-item label="启动状态" prop="status">
      <el-select v-model="ruleForm.status" class="m-2" placeholder="Select">
        <el-option v-for="item in optionsStatus" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item label="通知状态" prop="isNotify">
      <el-select v-model="ruleForm.isNotify" class="m-2" placeholder="Select">
        <el-option v-for="item in optionsStatus" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item label="通知配置" prop="notifyConfig">
      <el-input v-model="ruleForm.notifyConfig" type="textarea" />
      <span class="decs">
        如：[{"type":"feishu","data":{"isSuccess":1,"text":"测试例子","link":"https://www.baidu.com/","webHookUrl":"https://open.feishu.cn/open-apis/bot/v2/hook/a07205e2-2660-427e-8b14-*****"}}]
      </span>
    </el-form-item>
    <el-form-item label="Worker类型" prop="workerType">
      <el-select v-model="ruleForm.workerType" class="m-2" placeholder="Select">
        <el-option v-for="item in optionsWorker" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item label="WorkerHttp配置" prop="config">
      <el-input v-model="ruleForm.config" type="textarea" />
      <span class="decs">
        如：{"type":"http","url":"http://localhost/post","method":"POST","header":{"Content-type":"application/json","Authorization":"1234"}}
      </span>
    </el-form-item>
    <el-form-item label="Shell命令｜HttpBody" prop="command">
      <el-input v-model="ruleForm.command" type="textarea" />
      <span class="decs">
        shell如：curl -H "Content-type: application/json" -X GET "http://localhost/get" ;
        <br />
        Body如：{"start": "2022-05-01", "stop":"2022-05-09" }
      </span>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef, $event)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef, $event)">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref, getCurrentInstance } from 'vue'
import { rules, optionsWorker, optionsStatus } from '../cron'
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

    return { optionsWorker, optionsStatus, resetForm, submitForm, rules, ruleForm, ruleFormRef }
  },
}
</script>

<style>
.decs {
  font-size: 12px;
  line-height: 16px;
}
</style>
