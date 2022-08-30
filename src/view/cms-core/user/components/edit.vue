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
    <el-form-item label="UserID" prop="id" v-if="ruleForm.id !== '0'">
      {{ ruleForm.id }}
    </el-form-item>
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
      <el-input v-model="ruleForm.phone" style="width: 50%" />
    </el-form-item>
    <el-form-item label="角色" prop="roleIds">
      <el-checkbox-group v-model="ruleForm.roleIds" @change="handleCheckedChange">
        <el-checkbox v-for="item in roles" :key="item.id" :label="item.id">{{ item.name }} </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input v-model="ruleForm.remark" style="width: 50%" />
    </el-form-item>
    <el-form-item label="修改密码" v-if="ruleForm.id !== '0'">
      <div>
        <el-switch v-model="changePsw" />
      </div>
      <div v-if="changePsw" class="edit-psw">
        <el-input v-model="ruleForm.psw" style="width: 20vw" />
        <el-button type="primary" @click="pswSubmitForm($event)">修改密码</el-button>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef, $event)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef, $event)">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref, getCurrentInstance, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { rules, optionsStatus, getRoles } from '../user'

export default {
  props: {
    item: {},
  },
  setup(props) {
    console.log('[INFO] setup:', props.item)
    const ruleFormRef = ref({})
    const roles = ref({})
    const ruleForm = reactive({
      ...props.item,
    })
    const changePsw = ref(false)
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
    const pswSubmitForm = async event => {
      console.log('psw:', ruleForm.psw)
      if (ruleForm.psw === '') {
        ElMessage({ message: '[密码不为空]', type: 'error' })
        return
      }
      callBack('form-submit-psw', ruleForm, event)
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
    const handleCheckedChange = value => {
      console.log('handleCheckedChange 1:', value)
    }
    const resetForm = (formEl, event) => {
      callBack('form-cancel', ruleForm, event)
    }
    onMounted(async () => {
      const db = await getRoles({})
      roles.value = db.list
      console.log('powerTree.value:', roles.value)
    })
    return {
      pswSubmitForm,
      changePsw,
      roles,
      handleCheckedChange,
      optionsStatus,
      resetForm,
      submitForm,
      rules,
      ruleForm,
      ruleFormRef,
    }
  },
}
</script>

<style>
.decs {
  font-size: 12px;
  line-height: 16px;
}

.edit-psw {
  float: left;
}

.edit-psw input {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
