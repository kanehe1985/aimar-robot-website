<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { label: '首页', href: '#home' },
  { label: '核心优势', href: '#features' },
  { label: '应用场景', href: '#scenarios' },
  { label: '成功案例', href: '#cases' },
  { label: '价格方案', href: '#pricing' },
  { label: '联系我们', href: '#contact' },
]

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
}
</script>

<template>
  <header 
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="{
      'bg-white/90 backdrop-blur-md shadow-sm': scrolled,
      'bg-transparent': !scrolled
    }"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">A</span>
          </div>
          <span class="text-xl font-bold text-dark">艾马机器人</span>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.label"
            :href="item.href"
            class="text-gray-dark hover:text-primary transition-colors duration-300 font-medium"
          >
            {{ item.label }}
          </a>
          <a href="#contact" class="btn-primary text-sm">
            立即咨询
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden text-dark"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        class="md:hidden transition-all duration-300 overflow-hidden"
        :style="{ height: isMenuOpen ? `${navItems.length * 56 + 80}px` : '0px' }"
      >
        <div class="pt-4 pb-6 space-y-4">
          <a 
            v-for="item in navItems" 
            :key="item.label"
            :href="item.href"
            class="block py-3 text-gray-dark hover:text-primary transition-colors duration-300 font-medium"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </a>
          <a href="#contact" class="btn-primary block text-center text-sm mt-4">
            立即咨询
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
