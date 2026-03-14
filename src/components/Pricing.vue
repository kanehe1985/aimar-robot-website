<script setup lang="ts">
const pricingPlans = [
  {
    name: '智能工作站系列',
    price: '5万起',
    period: '',
    description: '标准化成熟产品，开箱即用',
    features: [
      '螺丝锁付工作站',
      '视觉检测工作站',
      '搬运码垛工作站',
      '焊接装配工作站',
      '7天快速安装部署',
      '1年免费上门维保',
      '24小时技术支持'
    ],
    highlight: false,
    cta: '查看详情'
  },
  {
    name: '非标定制设备',
    price: '10万起',
    period: '',
    description: '按需定制，解决特殊工序难题',
    features: [
      '免费现场勘测评估',
      '3D仿真方案设计',
      '厂内预调试验收',
      '30天快速交付上线',
      '量化验收标准',
      '1年免费维保',
      '终身技术升级服务'
    ],
    highlight: true,
    cta: '定制方案'
  },
  {
    name: '整厂自动化改造',
    price: '定制',
    period: '',
    description: '交钥匙工程，一站式服务',
    features: [
      '整厂产线规划设计',
      'MES系统对接集成',
      '数字孪生可视化',
      '分阶段实施不影响生产',
      '专属项目经理跟进',
      '2年免费维保',
      '7*24小时应急响应'
    ],
    highlight: false,
    cta: '咨询专家'
  }
]
</script>

<template>
  <section id="products" class="bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-20 reveal">
        <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          产品中心
        </div>
        <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-gray-900 mb-6">
          标准化产品 + 定制化解决方案
        </h2>
        <p class="text-gray-600 text-lg">
          成熟的标准化工作站产品，可根据客户需求快速定制，满足不同行业、不同场景的自动化需求
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto mb-12">
        <div 
          v-for="(plan, index) in pricingPlans" 
          :key="index"
          class="rounded-2xl transition-all duration-500 relative group reveal"
          :class="[
            plan.highlight 
              ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-2xl hover:shadow-2xl hover:-translate-y-4' 
              : 'bg-white shadow-card hover:shadow-xl hover:-translate-y-3',
            `reveal-delay-${index + 1}`
          ]"
        >
          <div 
            v-if="plan.highlight"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-lg"
          >
            推荐选择
          </div>
          
          <div class="p-8">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold">{{ plan.name }}</h3>
              <div v-if="!plan.highlight" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <p :class="['mb-6', plan.highlight ? 'text-white/80' : 'text-gray-600']">{{ plan.description }}</p>
            
            <div class="mb-8">
              <span class="text-4xl font-bold">{{ plan.price }}</span>
              <span :class="['text-lg', plan.highlight ? 'text-white/70' : 'text-gray-500']">{{ plan.period }}</span>
            </div>
            
            <ul class="space-y-3.5 mb-8">
              <li 
                v-for="(feature, fIndex) in plan.features" 
                :key="fIndex"
                class="flex items-center gap-3 transition-all duration-300 group-hover:translate-x-1"
              >
                <svg 
                  class="w-5 h-5 flex-shrink-0" 
                  :class="[
                    plan.highlight ? 'text-white/90' : 'text-primary',
                    'transition-transform duration-300 group-hover:scale-110'
                  ]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span :class="plan.highlight ? 'text-white/90' : 'text-gray-700'">{{ feature }}</span>
              </li>
            </ul>
            
            <a 
              href="#contact"
              class="block w-full text-center rounded-lg font-medium py-3.5 transition-all duration-300"
              :class="{
                'bg-primary text-white hover:bg-primary-dark hover:shadow-lg': !plan.highlight,
                'bg-white text-primary hover:bg-gray-50 hover:shadow-lg': plan.highlight
              }"
            >
              {{ plan.cta }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-gray-dark">
          所有项目均签订正式合同 · 明确验收标准 · 免费上门培训 · 终身技术支持
        </p>
      </div>
    </div>
  </section>
</template>
