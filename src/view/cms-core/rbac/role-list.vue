<template>
  <div class="liam_container">
    <div class="title">
      <div class="search_box">
        <el-button type="primary" plain class="add" @click="callBack('add', {})">新加角色</el-button>
        <lin-search @query="onQueryChange" ref="searchKeywordDom" class="search" />
        <lin-date-picker @dateChange="handleDateChange" ref="searchDateDom" class="date"> </lin-date-picker>
      </div>
      <div class="tab_box">
        <el-tag v-for="tag in tags" :key="tag.name" class="mx-1" closable @close="closeTag(tag.name)" :type="tag.type">
          {{ tag.name + ':' + tag.label }}
        </el-tag>
      </div>
    </div>
    <el-table :data="items" style="width: 100%" height="75vh">
      <el-table-column fixed prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="名称" width="120" />
      <el-table-column prop="created" label="创建时间" width="180" />
      <el-table-column prop="updated" label="更新时间" width="180" />
      <el-table-column prop="status" label="状态" width="100" />
      <el-table-column fixed="right" label="Operations" width="180">
        <template #default="scope">
          <el-button size="small" @click="callBack('edit', scope.row)">Edit</el-button>
          <el-button size="small" type="danger" @click="callBack('delete', scope.row.id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-model:currentPage="page.current"
      v-model:page-size="page.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <el-drawer v-if="drawer" v-model="drawer" :title="editIfo.editTitle" :before-close="handleClose" size="92%">
    <item-edit :item="editIfo" @handle="callBack"></item-edit>
  </el-drawer>
</template>

<script>
import { ref, onMounted } from 'vue'

import LinSearch from '@/component/base/search/lin-search'
import LinDatePicker from '@/component/base/date-picker/lin-date-picker'
import { ElMessage } from 'element-plus'
import ItemEdit from './components/role-edit'
import { getItems, addOrEditItem, setAddNew, setEditData, deleteItem } from './role'

export default {
  components: {
    LinSearch,
    LinDatePicker,
    ItemEdit,
  },
  setup() {
    const items = ref([])
    const total = ref(1)
    const drawer = ref(false)
    const p = {
      pageSize: 10,
      current: 1,
      name: '',
      email: '',
      start: '',
      stop: '',
    }
    const page = ref(p)
    const editIfo = ref({ editTitle: '新加' })
    const tags = ref([
      { name: '名字', value: '123456', label: '123456', type: 'success' },
      { name: '状态', value: '1', label: '成功', type: 'warning' },
    ])
    const handleSizeChange = async val => {
      console.log(`${val} items per page`)
      page.value.current = 1
      page.value.pageSize = val
      await getData()
    }
    const handleCurrentChange = async val => {
      console.log(`current page: ${val}`)
      page.value.current = val
      await getData()
    }
    const handleDateChange = date => {
      console.log('search:', date)
    }
    const onQueryChange = query => {
      console.log('search:', query.trim())
    }
    const closeTag = v => {
      console.log('closeTag:', v)
      const arr = tags.value
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === v) {
          arr.splice(i, 1) // 删除某item
        }
      }
      tags.value = arr
    }
    const handleClose = () => {
      console.log('close')
      drawer.value = false
    }
    const callBack = async (ty, db) => {
      console.log('callBack farther:', ty, db)
      switch (ty) {
        case 'form-cancel':
          drawer.value = false
          break
        case 'form-submit':
          // eslint-disable-next-line no-case-declarations
          const rs1 = await addOrEditItem(db)
          console.log('form-submit:rs=', rs1)
          if (rs1) {
            ElMessage({ message: `[${db.name}操作成功]`, type: 'success' })
            await getData()
            drawer.value = false
          } else {
            ElMessage({ message: `[${db.name}操作成功]`, type: 'error' })
          }
          break
        case 'add':
          drawer.value = true
          editIfo.value = setAddNew({})
          console.log('[INFO] add:', editIfo.value)
          break
        case 'edit':
          drawer.value = true
          editIfo.value = setEditData(db)
          break
        case 'delete':
          // eslint-disable-next-line no-case-declarations, no-restricted-globals, no-alert
          const rs = confirm('您确定要删除吗?')
          if (!rs) {
            console.log('cancel delete')
            return
          }
          // eslint-disable-next-line no-case-declarations
          const rs2 = await deleteItem(db)
          if (rs2) {
            ElMessage({ message: '删除成功', type: 'success' })
            await getData()
          } else {
            ElMessage({ message: '删除失败', type: 'error' })
          }
          break
        default:
          break
      }
    }
    const getData = async () => {
      const db = await getItems(page.value)
      total.value = db.pagination.total
      items.value = db.list
    }
    onMounted(async () => {
      await getData()
    })
    return {
      items,
      total,
      page,
      tags,
      drawer,
      editIfo,
      callBack,
      handleClose,
      closeTag,
      handleSizeChange,
      handleCurrentChange,
      handleDateChange,
      onQueryChange,
    }
  },
}
</script>
<style>
.title {
  margin: 2px 4px;
}

.search_box {
  clear: both;
  height: 5vh;
  line-height: 5vh;
}

.tab_box {
  height: 4vh;
  /* border: 1px solid #aaa; */
}

.tab_box span {
  margin: 0 4px;
}

.date {
  width: 40%;
  float: right;
}

.search {
  width: 20%;
  float: left;
}
.add {
  float: left;
  margin: 4px 6px;
}
</style>
