<script setup lang="ts">
</script>

<template>
  <section id="home" class="pt-32 pb-24 bg-gradient-to-b from-gray-light/50 to-white">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="fade-in">
          <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            宁波本地自动化解决方案服务商
          </div>
          <h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-dark mb-6">
            艾马机器人<br>
            <span class="text-primary">让工厂自动化少走弯路</span>
          </h1>
          <p class="text-gray-dark text-lg mb-8 max-w-xl">
            10年自动化行业经验，专注非标定制、智能工作站、产线改造、视觉检测，2小时上门响应，30天快速落地，终身成本价维保。
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="btn-primary">
              免费演示
            </a>
            <a href="#features" class="btn-secondary">
              了解更多
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
          <div class="relative z-10 bg-white rounded-2xl shadow-hover p-6">
            <img src="https://images.unsplash.com/photo-1581094283778-e811240a94c8?w=600&h=400&fit=crop" alt="自动化产线" class="w-full h-64 object-cover rounded-xl mb-4">
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-gray-light rounded-lg p-3 text-center">
                <div class="text-primary font-bold text-xl">30+</div>
                <div class="text-sm text-gray-dark">宁波本地客户</div>
              </div>
              <div class="bg-gray-light rounded-lg p-3 text-center">
                <div class="text-primary font-bold text-xl">99.5%</div>
                <div class="text-sm text-gray-dark">设备运行率</div>
              </div>
              <div class="bg-gray-light rounded-lg p-3 text-center">
                <div class="text-primary font-bold text-xl">70%</div>
                <div class="text-sm text-gray-dark">效率提升</div>
              </div>
              <div class="bg-gray-light rounded-lg p-3 text-center">
                <div class="text-primary font-bold text-xl">5年+</div>
                <div class="text-sm text-gray-dark">平均寿命</div>
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
