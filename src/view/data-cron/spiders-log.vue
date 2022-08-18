<template>
  <div class="liam_container">
    <div class="title">
      <div class="search_box">
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
      <el-table-column fixed prop="id" label="ID" width="80" />
      <el-table-column prop="type" label="类型" width="150" />
      <el-table-column prop="created" label="开始时间" width="180" />
      <el-table-column prop="updated" label="结束时间" width="180" />
      <el-table-column prop="status" label="状态" width="100" />
      <el-table-column prop="taskId" label="TaskID" width="150" />
      <el-table-column prop="platform" label="平台" width="150" />
    </el-table>

    <el-pagination
      v-model:currentPage="page.current"
      v-model:page-size="page.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :small="small"
      :disabled="disabled"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

import LinSearch from '@/component/base/search/lin-search'
import LinDatePicker from '@/component/base/date-picker/lin-date-picker'
import { getItems } from './spiders'

export default {
  components: {
    LinSearch,
    LinDatePicker,
  },
  setup() {
    const items = ref([])
    const total = ref(1)
    const p = {
      pageSize: 10,
      current: 1,
      name: '',
    }
    const page = ref(p)
    const tags = ref([
      { name: '时间', value: '["2022-06-01","2022-06-25"]', label: '2022-06-01 到 2022-06-25', type: 'info' },
      { name: 'TaskID', value: '123456', label: '123456', type: 'success' },
      { name: '类型', value: '1236', label: '1236', type: 'info' },
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
          arr.splice(i, 1)
        }
      }
      tags.value = arr
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
</style>
