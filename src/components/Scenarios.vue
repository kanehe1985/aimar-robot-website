<script setup lang="ts">
const scenarios = [
  {
    icon: '💬',
    title: '客户服务自动化',
    description: '智能客服自动处理常见问题，提升响应速度，工单管理自动分类和分配工单，优化处理流程。',
    features: ['7x24小时在线响应', '智能工单分配', '客户情绪分析', '服务质量监控']
  },
  {
    icon: '🤝',
    title: '内部协作优化',
    description: '自动记录和整理会议内容，自动生成和整理文档，智能分配和跟踪任务，提升团队协作效率。',
    features: ['会议自动纪要', '文档智能生成', '任务智能调度', '知识自动沉淀']
  },
  {
    icon: '⚙️',
    title: '业务流程自动化',
    description: '自动处理和分析业务数据，自动生成各种业务报告，识别和优化业务流程，提升运营效率。',
    features: ['数据自动分析', '报告自动生成', '流程智能优化', '异常自动预警']
  },
  {
    icon: '💻',
    title: '技术支持自动化',
    description: '自动审查代码质量，自动识别和解决常见问题，自动生成和更新技术文档，提升研发效率。',
    features: ['代码自动审查', '故障自动排查', '文档自动更新', '技术问答助手']
  }
]
</script>

<template>
  <section id="scenarios" class="py-24 bg-gray-light/30">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          应用场景
        </div>
        <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">
          适用于多种企业场景
        </h2>
        <p class="text-gray-dark text-lg">
          覆盖企业运营全流程，为不同部门提供定制化的AI解决方案，全面提升企业运营效率
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div 
          v-for="(scenario, index) in scenarios" 
          :key="index"
          class="card fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="flex gap-6">
            <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <span class="text-3xl">{{ scenario.icon }}</span>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-dark mb-3">{{ scenario.title }}</h3>
              <p class="text-gray-dark mb-4">{{ scenario.description }}</p>
              <div class="grid grid-cols-2 gap-2">
                <div 
                  v-for="(feature, fIndex) in scenario.features" 
                  :key="fIndex"
                  class="flex items-center gap-2 text-sm text-gray-dark"
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
