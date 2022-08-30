<template>
  <div>
    <el-tree
      :data="powerTree"
      show-checkbox
      check-strictly="true"
      node-key="id"
      :default-expanded-keys="['1']"
      :default-checked-keys="ruleForm.powerIds"
      :props="defaultProps"
      @check="handleCheckedChange"
    />
  </div>
</template>

<script>
import { reactive, ref, getCurrentInstance, onMounted } from 'vue'
import { getPowerTreeList } from '../role'

export default {
  props: {
    item: {},
  },
  setup(props) {
    console.log('[INFO] check box setup:', props.item)
    const ruleForm = reactive({
      ...props.item,
    })
    const defaultProps = {
      children: 'children',
      label: 'name',
    }
    const powerTree = ref({})
    const { proxy } = getCurrentInstance()
    const callBack = (ty, item, event) => {
      // console.log('son:', ty, item);
      proxy.$emit('handle', ty, item)
      if (event) {
        // eslint-disable-next-line no-unused-expressions
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true)
      }
    }
    const handleCheckedChange = (value, v2) => {
      // console.log('handleCheckedChange 1:', value)
      // console.log('handleCheckedChange 2:', v2)
      const ids = [...v2.checkedKeys, ...v2.halfCheckedKeys]
      // console.log('handleCheckedChange ids:', ids)
      callBack('handleCheckedChange', ids)
    }

    onMounted(async () => {
      powerTree.value = await getPowerTreeList({})
      console.log('powerTree.value:', powerTree.value)
    })
    return { handleCheckedChange, callBack, ruleForm, powerTree, defaultProps }
  },
}
</script>
