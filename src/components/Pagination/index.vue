<template>
  <div class="pagination">
    <button 
      :disabled="pageNow==1"
      @click="$emit('getPageNow',pageNow -1)"
      >上一页</button>

    <button 
    v-if="startNumAndEndNum.start > 1" 
    @click="$emit('getPageNow',1)"
    :click="{active:pageNow == 1}"
    >1</button>
    <button v-if="startNumAndEndNum.start > 2">•••</button>

    <button 
    v-for="(page,index) in startNumAndEndNum.end" 
    :key="index" 
    v-if="page >= startNumAndEndNum.start"
    @click="$emit('getPageNow',page)"
    :class="{active:pageNow == page}"
    >
    {{page}}
  </button>

    <button v-if="startNumAndEndNum.end < totalPage -1">•••</button>
    <button 
    v-if="startNumAndEndNum.end < totalPage"
    @click="$emit('getPageNow',totalPage)"
    :class="{active:pageNow==totalPage}"
    >{{totalPage}}</button>
    <button 
    v-if="startNumAndEndNum.end < totalPage"
    @click="$emit('getPageNow',pageNow +1)"
    >下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:['pageNow','total','pageSize','continues'],
  computed:{
    totalPage(){
      return Math.ceil(this.total / this.pageSize)
    },
    startNumAndEndNum() {
      const{pageNow,continues,totalPage} = this;
      // 初始化起始页、终止页
      let start = 0,end= 0;
      if(totalPage < continues){
        start = 1;
        end = totalPage;
      } else {
        start = pageNow - parseInt(continues/2);
        end = pageNow + parseInt(continues/2);
      }
        if(start < 1) {
          start = 1;
          end = continues;
        }
        if(end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage
        }
        return {start,end}
      }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>


