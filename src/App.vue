<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Scenarios from './components/Scenarios.vue'
import Cases from './components/Cases.vue'
import Pricing from './components/Pricing.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import { useScrollReveal } from './composables/useScrollReveal'

// 启用滚动渐入动画
useScrollReveal()
</script>

<template>
  <div class="min-h-screen bg-white">
    <ScrollProgress />
    <Navbar />
    <Hero />
    <Features />
    <Pricing />
    <Scenarios />
    <Cases />
    <About />
    <Contact />
    <Footer />
  </div>
</template>
