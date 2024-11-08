<script setup>
  import { VPTheme } from "@vue/theme";
  const { Layout } = VPTheme;
</script>

<template>
  <Layout>
    <template #navbar-title>
      <img src="../../src/assets/data-mining.png" class="image" />
    </template>
  </Layout>
</template>

<style lang="scss" scoped>
  .image {
    width: 48px;
    height: 48px;
  }

  .navbar-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
</style>
