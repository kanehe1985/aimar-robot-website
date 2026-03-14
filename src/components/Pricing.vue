<script setup lang="ts">
const pricingPlans = [
  {
    name: '基础版',
    price: '999',
    period: '/月',
    description: '适合小型团队和初创企业',
    features: [
      '最多10个用户账号',
      '基础自动化工作流',
      '3个常用AI模型',
      '10GB存储空间',
      '标准技术支持',
      '基础API调用额度'
    ],
    highlight: false,
    cta: '免费试用14天'
  },
  {
    name: '专业版',
    price: '2999',
    period: '/月',
    description: '适合中型企业和成长型团队',
    features: [
      '最多50个用户账号',
      '高级自动化工作流',
      '10个主流AI模型',
      '100GB存储空间',
      '优先技术支持',
      '高级API调用额度',
      '自定义功能开发',
      '数据看板和分析'
    ],
    highlight: true,
    cta: '立即购买'
  },
  {
    name: '企业版',
    price: '定制',
    period: '',
    description: '适合大型企业和定制化需求',
    features: [
      '无限用户账号',
      '全功能工作流引擎',
      '全部AI模型支持',
      '无限存储空间',
      '专属客户经理',
      '本地部署支持',
      '深度定制开发',
      'SLA服务保障',
      '安全审计和合规'
    ],
    highlight: false,
    cta: '联系我们'
  }
]
</script>

<template>
  <section id="pricing" class="py-24 bg-gray-light/30">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          价格方案
        </div>
        <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">
          灵活的定价方案，适合不同规模的企业
        </h2>
        <p class="text-gray-dark text-lg">
          按需选择，灵活扩展，支持定制化部署，满足您的业务发展需求
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div 
          v-for="(plan, index) in pricingPlans" 
          :key="index"
          class="rounded-2xl transition-all duration-300 relative"
          :class="{
            'bg-white shadow-card hover:shadow-hover hover:-translate-y-2': !plan.highlight,
            'bg-primary text-white shadow-xl hover:shadow-2xl hover:-translate-y-4': plan.highlight
          }"
        >
          <div 
            v-if="plan.highlight"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium"
          >
            最受欢迎
          </div>
          
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-2">{{ plan.name }}</h3>
            <p class="mb-6 opacity-80">{{ plan.description }}</p>
            
            <div class="mb-8">
              <span class="text-4xl font-bold">{{ plan.price }}</span>
              <span class="text-lg opacity-80">{{ plan.period }}</span>
            </div>
            
            <ul class="space-y-4 mb-8">
              <li 
                v-for="(feature, fIndex) in plan.features" 
                :key="fIndex"
                class="flex items-center gap-3"
              >
                <svg 
                  class="w-5 h-5 flex-shrink-0" 
                  :class="{ 'text-primary': !plan.highlight, 'text-white': plan.highlight }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="opacity-90">{{ feature }}</span>
              </li>
            </ul>
            
            <a 
              href="#contact"
              class="block w-full text-center rounded-lg font-medium py-3 transition-all duration-300"
              :class="{
                'bg-primary text-white hover:bg-primary/90': !plan.highlight,
                'bg-white text-primary hover:bg-gray-100': plan.highlight
              }"
            >
              {{ plan.cta }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-gray-dark">
          所有方案均提供 7 天无理由退款保证 · 支持按月/按年付费 · 年付享 8 折优惠
        </p>
      </div>
    </div>
  </section>
</template>
