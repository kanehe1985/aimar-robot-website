<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
const showScrollTop = ref(false)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = (scrollTop / docHeight) * 100
  showScrollTop.value = scrollTop > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- 滚动进度条 -->
  <div class="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[100]">
    <div 
      class="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>

  <!-- 返回顶部按钮 -->
  <button
    v-if="showScrollTop"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary-dark hover:scale-110 z-50"
    aria-label="返回顶部"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</template>
