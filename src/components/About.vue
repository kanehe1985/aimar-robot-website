<script setup lang="ts">
const advantages = [
  { number: '10+', text: '年行业经验' },
  { number: '30+', text: '宁波本地客户' },
  { number: '99%', text: '客户满意度' },
  { number: '2小时', text: '上门响应' }
]
</script>

<template>
  <section id="about" class="bg-gray-light/30">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-16 md:gap-20 items-center reveal">
        <div class="order-2 md:order-1">
          <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            关于我们
          </div>
          <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-6">
            专注工业自动化领域 <br>
            <span class="text-primary">10年技术沉淀</span>
          </h2>
          <p class="text-gray-dark text-lg mb-6">
            艾马机器人（宁波）有限公司是一家专注于工业自动化领域的高新技术企业，核心团队拥有10年以上自动化行业经验，为制造企业提供从方案设计、生产制造、安装调试到售后维保的全流程服务。
          </p>
          <p class="text-gray-dark text-lg mb-8">
            我们坚持「技术为本、服务至上」的理念，已为30+宁波本地企业提供自动化改造服务，帮助客户降低人力成本、提升生产效率、稳定产品质量，实现数字化转型。
          </p>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="(item, index) in advantages" :key="index" class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">{{ item.number }}</div>
              <p class="text-gray-dark text-sm">{{ item.text }}</p>
            </div>
          </div>
        </div>
        
        <div class="order-1 md:order-2">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1581092794758-06a3f16f2791?w=800&h=600&fit=crop" alt="工厂自动化产线" class="w-full h-96 object-cover rounded-2xl shadow-xl" loading="lazy">
            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div class="font-bold text-dark">质量承诺</div>
                  <div class="text-sm text-gray-dark">所有项目量化验收</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
