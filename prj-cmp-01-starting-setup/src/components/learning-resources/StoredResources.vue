<template>
  <ul>
    <learning-resources
      v-for="res in storedResources"
      :key="res.id"
      :title="res.id"
      :description="res.description"
      :link="res.link"
    ></learning-resources>
  </ul>
</template>

<script>
export default {
  props:['resources']
}
</script>
