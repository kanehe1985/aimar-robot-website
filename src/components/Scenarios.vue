<script setup lang="ts">
const scenarios = [
  {
    title: '非标自动化定制',
    description: '根据客户实际生产需求，定制专用自动化设备，解决人工无法实现或效率低下的特殊工序。',
    features: ['3D仿真设计', '厂内预调试', '现场安装培训', '量化验收标准']
  },
  {
    title: '标准智能工作站',
    description: '标准化、模块化的成熟工作站产品，开箱即用，快速部署，覆盖常见生产工序需求。',
    features: ['螺丝锁付工作站', '视觉检测工作站', '搬运码垛工作站', '焊接装配工作站']
  },
  {
    title: '现有产线改造',
    description: '对传统人工产线进行自动化升级改造，最小改造成本，最大程度提升生产效率。',
    features: ['现场勘测评估', '最小化停产改造', '新旧系统对接', '产能提升明显']
  },
  {
    title: '机器视觉检测',
    description: '基于AI视觉的外观检测、尺寸测量、缺陷识别、读码追溯等系统，替代人工质检。',
    features: ['外观缺陷检测', '产品尺寸测量', 'OCR字符识别', '产品分类分拣']
  }
]
</script>

<template>
  <section id="scenarios" class="bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16 reveal">
        <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-md text-sm font-medium mb-6">
          应用场景
        </div>
        <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-gray-900 mb-6">
          行业应用
        </h2>
        <p class="text-gray-600 text-lg">
          覆盖汽车零部件、电子制造、五金加工、食品医药、新能源等多个行业，提供针对性的自动化解决方案
        </p>
      </div>

      <!-- 统一间距，去掉延迟动画，确保严格对齐 -->
      <div class="grid md:grid-cols-2 gap-6 mb-16">
        <div 
          v-for="(scenario, index) in scenarios" 
          :key="index"
          class="card reveal"
        >
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ scenario.title }}</h3>
            <p class="text-gray-600 mb-4">{{ scenario.description }}</p>
            <!-- 严格居中对齐，统一间距 -->
            <div class="grid grid-cols-2 gap-3">
              <div 
                v-for="(feature, fIndex) in scenario.features" 
                :key="fIndex"
                class="flex items-center justify-center gap-2 text-sm text-gray-600"
              >
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ feature }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <a href="#contact" class="btn-primary inline-flex items-center gap-2">
          了解更多场景解决方案
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
