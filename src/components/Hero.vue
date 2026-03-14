<script setup lang="ts">
</script>

<template>
  <section id="home" class="pt-44 pb-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
    <div class="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-40 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="fade-in">
          <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            专注工业自动化解决方案
          </div>
          <h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-dark mb-6">
            艾马机器人<br>
            <span class="text-primary">让制造更智能 · 让生产更高效</span>
          </h1>
          <p class="text-gray-dark text-lg mb-8 max-w-xl">
            10年行业经验，为宁波本地制造企业提供非标自动化定制、智能工作站、产线改造、机器视觉检测一站式服务，降本增效，提升核心竞争力。
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="btn-accent">
              免费获取方案
            </a>
            <a href="#products" class="btn-secondary">
              查看产品
            </a>
          </div>
          <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-dark font-bold text-2xl">10+</div>
              <div class="text-gray-dark text-sm">年行业经验</div>
            </div>
            <div class="text-center">
              <div class="text-dark font-bold text-2xl">2小时</div>
              <div class="text-gray-dark text-sm">上门响应</div>
            </div>
            <div class="text-center">
              <div class="text-dark font-bold text-2xl">30天</div>
              <div class="text-gray-dark text-sm">快速交付</div>
            </div>
            <div class="text-center">
              <div class="text-dark font-bold text-2xl">20%</div>
              <div class="text-gray-dark text-sm">成本优势</div>
            </div>
          </div>
        </div>
        <div class="relative fade-in" style="animation-delay: 0.2s">
          <div class="relative z-10 bg-white rounded-2xl shadow-xl p-2 group">
            <div class="relative overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1581092794758-06a3f16f2791?w=800&h=600&fit=crop" alt="工业机器人自动化产线" class="w-full h-64 sm:h-80 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" loading="eager" fetchpriority="high">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div>
                  <div class="text-white text-2xl font-bold mb-2">交钥匙工程</div>
                  <div class="text-white/90 text-sm">从方案设计到落地投产，全流程服务</div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 p-4">
              <div class="bg-gray-50 rounded-lg p-3 text-center transition-all duration-300 hover:bg-primary/5 hover:scale-105">
                <div class="text-primary font-bold text-2xl mb-1">30+</div>
                <div class="text-sm text-gray-600">宁波本地客户</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 text-center transition-all duration-300 hover:bg-primary/5 hover:scale-105">
                <div class="text-primary font-bold text-2xl mb-1">99.5%</div>
                <div class="text-sm text-gray-600">设备运行率</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 text-center transition-all duration-300 hover:bg-primary/5 hover:scale-105">
                <div class="text-primary font-bold text-2xl mb-1">70%</div>
                <div class="text-sm text-gray-600">效率提升</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-3 text-center transition-all duration-300 hover:bg-primary/5 hover:scale-105">
                <div class="text-primary font-bold text-2xl mb-1">5年+</div>
                <div class="text-sm text-gray-600">平均寿命</div>
              </div>
            </div>
          </div>
          <div class="absolute top-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>
