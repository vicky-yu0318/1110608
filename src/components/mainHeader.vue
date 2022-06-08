<template>
  <header class="p-4 shadow-lg font-sans">
    <div class="w-[85%] mx-auto flex justify-between">
      <!-- logo+links -->
      <div class="flex items-center">
          <a href="" class="logo mr-3">
            <img src="https://picsum.photos/80/60">
            <h1 class="sr-only">hello</h1>
          </a>
        <nav class="navbar space-x-3">
          <a href="">link</a>
          <a href="">link</a>
        </nav>
      </div>
      <!-- menu 登入按鈕＋模式 -->
      <div class="flex">
        <div class="button-group flex items-center space-x-2">
          <button class="border-blue-400 border-2 rounded text-blue-400 py-1 px-7 hover:shadow-inner">登入</button>
          <button class="border-blue-400 bg-blue-400  border-2 rounded text-white py-1 px-7">登入</button>
        </div>
        <!-- self-center不會跟著拉長 -->
        <div class="mode-group relative flex items-center self-center space-x-4 bg-slate-300
        px-4
        ">
        <!-- after:content-[''] after:block after:absolute after:h-[3px] after:w-[100%] -->
          <i class="fa-solid fa-bell text-blue-500 self-center"></i>
          <i class="fa-solid fa-bell text-blue-500 self-center"></i>
          <i class="fa-solid fa-bell text-blue-500 self-center"></i>
        </div>
        <div class="lang-group flex">
          <button class="rounded border-3 border-red-400 px-3 border py-1  self-center">繁體中文</button>
        </div>
      </div>
    </div>
  </header>
</template>
<style>
  .mode-group::after {
  }
</style>
