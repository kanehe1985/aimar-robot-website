<script setup lang="ts">
const features = [
  {
    icon: '⚡',
    title: '提升效率',
    description: '自动化处理重复性任务，释放员工时间专注于高价值工作，智能调度根据任务类型自动匹配最佳AI模型。'
  },
  {
    icon: '💰',
    title: '降低成本',
    description: '开源免费无许可费用，企业可自由部署和定制，本地部署支持保护数据隐私，避免云端存储成本。'
  },
  {
    icon: '🚀',
    title: '增强能力',
    description: '支持多种AI模型，满足不同任务需求，插件化架构支持快速开发和集成新功能，企业级安全保障。'
  },
  {
    icon: '🔒',
    title: '安全可靠',
    description: '支持本地部署，数据完全自主掌控，符合法规要求，企业级权限管理和数据加密机制。'
  },
  {
    icon: '🔌',
    title: '灵活集成',
    description: '强大的API和插件系统，无缝对接企业现有系统，支持定制开发满足个性化需求。'
  },
  {
    icon: '📊',
    title: '智能分析',
    description: '自动处理和分析业务数据，提供数据洞察和决策建议，自动生成各类业务报告。'
  }
]
</script>

<template>
  <section id="features" class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          核心优势
        </div>
        <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">
          为什么选择艾马机器人
        </h2>
        <p class="text-gray-dark text-lg">
          我们提供完整的企业级智能工作助理解决方案，帮助企业快速实现数字化转型，提升核心竞争力
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="card fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <span class="text-2xl">{{ feature.icon }}</span>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">{{ feature.title }}</h3>
          <p class="text-gray-dark">{{ feature.description }}</p>
        </div>
      </div>

      <div class="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
        <div class="grid md:grid-cols-3 gap-8 items-center">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">70%</div>
            <p class="text-gray-dark">平均运营成本降低</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">3倍</div>
            <p class="text-gray-dark">工作效率提升</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">99.9%</div>
            <p class="text-gray-dark">系统可用性</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
