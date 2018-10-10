<template>
  <div class="temp">
    <p>{{ $t('help.p1') }}</p>
    <p>{{ $t('help.p2') }}</p>
    <p>{{ $t('help.p3') }}</p>
  </div>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style scoped>

p {
  margin: 10px;
  text-align: left;
}

</style>
