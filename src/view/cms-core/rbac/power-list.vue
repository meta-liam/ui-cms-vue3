<template>
  <div class="liam_container">
    <div>
      <el-button @click="callBack('add1', {})">添加一级分类</el-button>
    </div>
    <div class="sku-class">
      <ul class="sku-tess1">
        <li v-for="item1 in items" :key="item1.id">
          <power-tree :item="item1" @handle="callBack" @click="changeShowUI(item1)" />
          <div v-if="item1?.children && item1.children.length > 0" class="sku-tess2">
            <ul v-if="item1.showChild">
              <li v-for="item2 in item1.children" :key="item2.id">
                <power-tree :item="item2" @handle="callBack" @click="changeShowUI(item2)" />
                <div v-if="item2.children && item2.children.length > 0" class="sku-tess3">
                  <ul v-if="item2.showChild">
                    <li v-for="item3 in item2.children" :key="item3.id">
                      <power-tree :item="item3" @handle="callBack" @click="changeShowUI(item3)" />
                      <div v-if="item3.children && item3.children.length > 0" class="sku-tess4">
                        <ul v-if="item3.showChild">
                          <li v-for="item4 in item3.children" :key="item4.id">
                            <power-tree :item="item4" @handle="callBack" />
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="drawer" class="sku-class-edit">
      <power-edit title="Multi-level drawer" :item="editIfo" @handle="callBack" />
    </div>
  </div>
</template>
<script>
import { ElMessage } from 'element-plus'
import { defineComponent, onMounted, ref } from 'vue'
import { addOrEditItem, deleteItem, findItemById, getAllList, getTreeList, setAddNew, setEditData } from './power'
import powerEdit from './components/power-edit'
import powerTree from './components/power-tree'

export default defineComponent({
  components: {
    powerTree,
    powerEdit,
  },

  setup() {
    const items = ref([])
    const editIfo = ref({})
    const drawer = ref(false)
    let allList = []
    // items.value = mockDB;
    editIfo.value = { title: '--' }
    const callBack = async (ty, db) => {
      // console.log('farther:', ty, db);
      switch (ty) {
        case 'form-cancel':
          drawer.value = false
          return
        case 'form-submit':
          // eslint-disable-next-line no-case-declarations
          const rs = await addOrEditItem(db)
          if (rs) {
            ElMessage({ message: `[${db.name}操作成功]`, type: 'success' })
            items.value = await getTreeList()
            allList = await getAllList()
          } else {
            ElMessage({ message: `[${db.name}操作失败]`, type: 'error' })
          }
          drawer.value = false
          break
        case 'add1':
          editIfo.value = setAddNew({ id: '0', name: '--', level: 0 })
          drawer.value = true
          break
        case 'add':
          drawer.value = true
          // eslint-disable-next-line no-case-declarations
          const fItem1 = findItemById(db.id, allList)
          editIfo.value = setAddNew(fItem1)
          break
        case 'edit':
          drawer.value = true
          // eslint-disable-next-line no-case-declarations
          const fItem = findItemById(db.fid, allList)
          editIfo.value = setEditData(db, fItem)
          break
        case 'delete':
          // eslint-disable-next-line no-case-declarations
          const rs2 = deleteItem(db.id)
          if (rs2) {
            ElMessage({ message: `[${db.name}删除成功]`, type: 'success' })
            items.value = await getTreeList()
          } else {
            ElMessage({ message: `[${db.name}删除失败]`, type: 'error' })
          }
          break
        default:
          break
      }
    }
    const changeShowUI = item => {
      const show = !!item?.showChild
      item.showChild = !show
    }

    onMounted(async () => {
      items.value = await getTreeList()
      allList = await getAllList()
    })

    return {
      items,
      callBack,
      changeShowUI,
      drawer,
      editIfo,
    }
  },
})
</script>
<style>
.liam_container {
  width: 96%;
  padding: 2%;
}

.sku-class {
  width: 100%;
  /* padding: 12px 24px; */
  background: #fff;
  border-radius: 2px;
  clear: both;
  overflow: hidden;
}

.sku-class-edit {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 65%;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
  border-top: 1px solid #e8e8e8;
  border-radius: 0 0 4px 4px;
}

.sku-class li {
  width: 100%;
  list-style-type: none;
}

.sku-class ul {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.sku-tess1 {
  width: 100%;
  clear: both;
}

.sku-tess2 {
  width: 100%;
  padding-left: 10px;
  clear: both;
}

.sku-tess3 {
  width: 100%;
  padding-left: 20px;
  clear: both;
}

.sku-tess4 {
  width: 100%;
  padding-left: 30px;
  clear: both;
}
</style>
