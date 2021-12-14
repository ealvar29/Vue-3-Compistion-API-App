<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ snippet }} </p>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
export default {
    name: 'SinglePost',
    props: ['post'],
    setup(props){
        onMounted(() => console.log('component mounted'))
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
    }
}
</script>

<style>

</style>