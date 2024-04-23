<script setup lang="ts"></script>

<template>
  <div class="greetings">
    <el-button type="primary">element-button</el-button>

    <pro-button>默认按钮</pro-button>
    <pro-button type="danger">危险按钮</pro-button>
    <br />
    <br />
    <pro-input value="abcdefghigklmnopqrstuvwxyz"></pro-input>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
