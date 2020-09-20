<template>
  <div id="detail" :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="isLogin">
      <section class="user-info">
        <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar" />
        <h3>{{ title }}</h3>
        <p>
          <router-link :to="`/user/${user.id}`">{{ user.username }}</router-link>
          发布于{{ friendlyDate(createdAt) }}
        </p>
      </section>
      <section class="article" v-html="markdown"></section>
      <div id="show">
        <goTop></goTop>
      </div>
    </template>
    <template v-if="!isLogin">请先登录...</template>
  </div>
</template>

<script src="./template.js"></script>

<style lang="less" src="./template.less"></style>
