<template>
  <div class="tree-item">
    <li>{{ showIco(item.showChild) }}</li>
    <li>{{ item.name }}[{{ item.tag }}]</li>
    <li class="edit">
      <a v-show="item.level < 4" @click="callBack('add', item, $event)"> 添加子分类 </a>
      <a @click="callBack('edit', item, $event)">修改</a>
      <a @click="callBack('delete', item, $event)">删除</a>
    </li>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  name: 'Tree',
  props: {
    item: {},
  },

  setup(props) {
    const { proxy } = getCurrentInstance()
    const callBack = (ty, item, event) => {
      // console.log('son:', ty, item);
      if (ty === 'delete') {
        // eslint-disable-next-line no-restricted-globals, no-alert
        const rs = confirm('您确定要删除吗?')
        if (!rs) {
          console.log('cancel delete')
          return
        }
      }
      proxy.$emit('handle', ty, item)
      if (event) {
        // eslint-disable-next-line no-unused-expressions
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true)
      }
    }
    const showIco = v => {
      if (props.item?.children && props.item.children.length > 0) {
        if (v && v === true) {
          return '-'
        }
        return '+'
      }
      return '-'
    }
    return { ...props, callBack, showIco }
  },
}
</script>
<style>
.tree-item {
  width: 90%;
  min-height: 34px;
  margin: 4px 0;
  overflow: hidden;
  clear: both;
  font-size: 14px;
  line-height: 34px;
  border-bottom: 1px solid #e8e8e8;
  /* background: #dcdedf; */
}

.tree-item::selection {
  color: #fff;
  background: #121212;
}

.tree-item li {
  display: inline;
  float: left;
  list-style: none;
}

.tree-item li:nth-child(1) {
  width: 24px;
  font-size: larger;
  font-weight: bolder;
  text-align: center;
}

.tree-item li:nth-child(2) {
  width: 40%;
}

.tree-item li:nth-child(3) {
  float: right;
  width: 40%;
  text-align: right;
}

.tree-item .edit a {
  padding: 2px 12px;
  color: rgb(0 0 0 / 85%);
}

.tree-item .edit a:hover {
  color: rgb(246 102 12);
}
</style>
