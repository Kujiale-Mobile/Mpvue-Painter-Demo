<template>
    <div>
        <button @click="save">保存</button>
    </div>
</template>

<script>
export default {
  methods: {
    save () {
      console.log('on save click')
    }
  }
}
</script>