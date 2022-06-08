<template>
  <div id="app">
    <mainHeader></mainHeader>
    <!-- <header class="relative container mx-auto bg-custcolor-secondary">
      flex container
      <div class="flex justify-between items-center">
        logo
        <div>
          <img src="https://picsum.photos/80/60" alt="" />
        </div>
        menu
        <div class="space-x-2 hidden md:flex">
          <a
            href=""
            class="hover:text-blue-300 relative after:content-[''] after:h-[100%] after:w-[4px] after:bg-blue-400 after:block after:absolute after:top-0 after:left-[-15px]"
            >price</a
          >
          <a href="">price</a>
          <a href="">price</a>
          <a href="">price</a>
        </div>
        button
        <button
          class="p-3 px-6 pt-2 text-white bg-custcolor-primary-blue rounded-full hover:bg-blue-900 hidden md:block"
        >
          按鈕
        </button>
      </div>
    </header> -->
    <!-- section -->
    <!-- <section id="hero">
      container flex
      <div class="container mx-auto bg-blue-50 flex justify-center items-center space-x-4 space-y-[300px] flex-col md:flex-row">
        <img src="https://picsum.photos/400/300" alt="">
        <div class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae et mollitia eos, delectus eaque veritatis minima id? Rem, inventore!</div>
      </div>
    </section> -->
    <!-- https://picsum.photos/400/600 -->
    <router-view />
  </div>
</template>

<script>
import mainHeader from '@/components/mainHeader.vue'
export default {
  components: {
    mainHeader
  }
}
</script>
<style lang="scss"></style>
