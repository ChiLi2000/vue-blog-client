<template>
  <div id="edit">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" @input="overTitleLength"></el-input>
    <p class="msg">{{ titleLength }} / 20</p>
    <h3>内容简介</h3>
    <el-input
      type="textarea"
      v-model="description"
      :autosize="{ minRows: 2, maxRows: 6 }"
      @input="overDescriptionLength"
    ></el-input>
    <p class="msg">{{ description.length }} / 300</p>
    <h3>文章内容</h3>
    <el-input
      type="textarea"
      v-model="content"
      :autosize="{ minRows: 4, maxRows: 30 }"
      rows="20"
      @input="overContentLength"
    ></el-input>
    <p class="msg">{{ content.length }} / 5000</p>

    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onCreate">确定</el-button>
    <div id="show">
      <goTop />
    </div>
  </div>
</template>

<script src="./template.js"></script>

<style src="../Edit/template.less" lang="less"></style>
