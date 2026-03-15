<script setup lang="ts">
</script>

<template>
  <!-- 简化背景，去掉渐变装饰，保持稳重简洁 -->
  <section id="home" class="pt-44 pb-28 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-md text-sm font-medium mb-6">
            专注工业自动化解决方案
          </div>
          <h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-gray-900 mb-6">
            艾马机器人<br>
            <span class="text-primary">让制造更智能 · 让生产更高效</span>
          </h1>
          <p class="text-gray-700 text-lg mb-8 max-w-xl">
            10年行业经验，为宁波本地制造企业提供非标自动化定制、智能工作站、产线改造、机器视觉检测一站式服务，降本增效，提升核心竞争力。
          </p>
          <!-- 统一间距 -->
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="btn-accent">
              免费获取方案
            </a>
            <a href="#products" class="btn-secondary">
              查看产品
            </a>
          </div>
          <!-- 严格对齐，文字居中，统一间距 -->
          <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div class="text-gray-900 font-bold text-2xl mb-1">10+</div>
              <div class="text-gray-600 text-sm">年行业经验</div>
            </div>
            <div>
              <div class="text-gray-900 font-bold text-2xl mb-1">2小时</div>
              <div class="text-gray-600 text-sm">上门响应</div>
            </div>
            <div>
              <div class="text-gray-900 font-bold text-2xl mb-1">30天</div>
              <div class="text-gray-600 text-sm">快速交付</div>
            </div>
            <div>
              <div class="text-gray-900 font-bold text-2xl mb-1">20%</div>
              <div class="text-gray-600 text-sm">成本优势</div>
            </div>
          </div>
        </div>
        <!-- 简化装饰，去掉多余的模糊背景和缩放动画 -->
        <div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1581092794758-06a3f16f2791?w=800&h=600&fit=crop" alt="工业机器人自动化产线" class="w-full h-64 sm:h-80 object-cover" loading="eager" fetchpriority="high">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div>
                  <div class="text-white text-2xl font-bold mb-2">交钥匙工程</div>
                  <div class="text-white/90 text-sm">从方案设计到落地投产，全流程服务</div>
                </div>
              </div>
            </div>
            <!-- 统一间距，去掉缩放动画 -->
            <div class="grid grid-cols-2 gap-3 p-4">
              <div class="bg-gray-50 rounded-md p-3 text-center transition-colors duration-200 hover:bg-primary/5">
                <div class="text-primary font-bold text-2xl mb-1">30+</div>
                <div class="text-sm text-gray-600">宁波本地客户</div>
              </div>
              <div class="bg-gray-50 rounded-md p-3 text-center transition-colors duration-200 hover:bg-primary/5">
                <div class="text-primary font-bold text-2xl mb-1">99.5%</div>
                <div class="text-sm text-gray-600">设备运行率</div>
              </div>
              <div class="bg-gray-50 rounded-md p-3 text-center transition-colors duration-200 hover:bg-primary/5">
                <div class="text-primary font-bold text-2xl mb-1">70%</div>
                <div class="text-sm text-gray-600">效率提升</div>
              </div>
              <div class="bg-gray-50 rounded-md p-3 text-center transition-colors duration-200 hover:bg-primary/5">
                <div class="text-primary font-bold text-2xl mb-1">5年+</div>
                <div class="text-sm text-gray-600">平均寿命</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
