<template>
    <v-progress-circular
    id="circular"
    v-if="loadingIndicator"
      :size="100"
      :width="9"
      :color="AppSetting.AppMainColor"
      indeterminate
    ></v-progress-circular>
</template>

<script>
export default {

    created:{
        loading(){
            return this.$store.getters.loading
        }
    }
}
</script>

<style>

</style>