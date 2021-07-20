<template>
  <div id="whoobe-page" class="overflow-y-hidden">
    <transition name="fade">
      <nuxt/>
    </transition>
    <common-scroll-top class="invisible md:visible"/>
    <!--<moka-jivo-chat v-if="prod"/>--->
    
  </div>
</template>

<script>
export default {
  middleware: 'load-initial-data',
  name: 'WhoobeLayout'
}
</script>
