<script setup lang="ts">
const pricingPlans = [
  {
    name: '标准工作站',
    price: '5万起',
    period: '',
    description: '标准化成熟产品，快速部署',
    features: [
      '螺丝锁付工作站',
      '视觉检测工作站',
      '搬运码垛工作站',
      '焊接装配工作站',
      '7天现场安装',
      '1年免费维保',
      '2小时上门响应'
    ],
    highlight: false,
    cta: '了解详情'
  },
  {
    name: '非标定制项目',
    price: '10万起',
    period: '',
    description: '按需定制，满足特殊生产需求',
    features: [
      '免费现场勘测',
      '3D仿真方案设计',
      '厂内预调试',
      '30天快速交付',
      '量化验收标准',
      '1年免费维保',
      '终身成本价升级'
    ],
    highlight: true,
    cta: '获取方案'
  },
  {
    name: '整厂自动化改造',
    price: '定制',
    period: '',
    description: '整厂产线规划，交钥匙工程',
    features: [
      '整厂自动化规划设计',
      'MES系统对接',
      '数字孪生可视化',
      '分阶段实施',
      '项目经理全程跟进',
      '2年免费维保',
      '专属技术团队'
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
          项目报价
        </div>
        <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">
          透明的价格体系，拒绝隐形消费
        </h2>
        <p class="text-gray-dark text-lg">
          标准化产品明码实价，定制化项目按需报价，所有费用透明化，让您每一分钱都花在实处
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
          所有项目均签订正式合同 · 明确验收标准 · 免费上门培训 · 终身技术支持
        </p>
      </div>
    </div>
  </section>
</template>
