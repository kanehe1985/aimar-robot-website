<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { label: '首页', href: '#home' },
  { label: '产品中心', href: '#products' },
  { label: '行业应用', href: '#scenarios' },
  { label: '成功案例', href: '#cases' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="{
      'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/50': scrolled,
      'bg-transparent': !scrolled
    }"
  >
    <div class="container mx-auto px-4 py-5">
      <div class="flex items-center justify-between">
        <a href="#home" class="flex items-center space-x-4">
          <div class="w-12 h-12 bg-primary rounded-md flex items-center justify-center shadow-md">
            <span class="text-white font-bold text-2xl">A</span>
          </div>
          <span class="text-2xl font-bold text-gray-900 tracking-tight">艾马机器人</span>
        </a>

        <!-- Desktop Navigation - 统一间距，严格对齐 -->
        <nav class="hidden lg:flex items-center">
          <div class="flex items-center space-x-16 mr-12">
            <a 
              v-for="item in navItems" 
              :key="item.label"
              :href="item.href"
              class="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-base px-2"
            >
              {{ item.label }}
            </a>
          </div>
          <a href="#contact" class="btn-accent text-sm px-8 py-2.5 shadow-md hover:shadow-lg transition-all">
            免费方案咨询
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          class="lg:hidden text-gray-900 p-2"
          @click="isMenuOpen = !isMenuOpen"
          :aria-expanded="isMenuOpen"
          aria-label="菜单"
        >
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="lg:hidden bg-white/95 backdrop-blur-md rounded-xl mt-2 shadow-lg border border-gray-100">
          <div class="py-4 px-2 space-y-1">
            <a 
              v-for="item in navItems" 
              :key="item.label"
              :href="item.href"
              class="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300 font-medium"
              @click="closeMenu"
            >
              {{ item.label }}
            </a>
            <div class="pt-2 px-4">
              <a href="#contact" class="btn-accent block text-center text-sm" @click="closeMenu">
                免费方案咨询
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>
