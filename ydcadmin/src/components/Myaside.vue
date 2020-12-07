<template>  
  <div class="aside">
    <el-col :span="12" id="aaa">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">添加商品</template>
          <el-menu-item index="1-1">添加商品类型</el-menu-item>
          <el-menu-item index="1-2">添加商品内容</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">修改商品</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">修改商品类型</template>
          <el-menu-item index="1-4-1">修改商品内容</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">折线图</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </div>
</template>

<script>
  export default {
  };
</script>

<style>
.aside #aaa{
  width: 100%;
}
</style>