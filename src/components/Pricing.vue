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

      <!-- 统一间距，严格对齐，简化设计，去掉过多动画 -->
      <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        <div 
          v-for="(plan, index) in pricingPlans" 
          :key="index"
          class="rounded-lg transition-all duration-200 relative group reveal"
          :class="[
            plan.highlight 
              ? 'bg-primary text-white border-primary shadow-lg' 
              : 'bg-white border border-gray-200 shadow-md hover:shadow-lg',
          ]"
        >
          <div 
            v-if="plan.highlight"
            class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded text-sm font-semibold shadow-md"
          >
            推荐选择
          </div>
          
          <div class="p-6">
            <div class="text-center mb-5">
              <h3 class="text-xl font-bold mb-2">{{ plan.name }}</h3>
              <p :class="plan.highlight ? 'text-white/80' : 'text-gray-600'">{{ plan.description }}</p>
            </div>
            
            <div class="text-center mb-6">
              <span class="text-3xl font-bold">{{ plan.price }}</span>
              <span :class="plan.highlight ? 'text-white/70' : 'text-gray-500'">{{ plan.period }}</span>
            </div>
            
            <ul class="mb-6">
              <li 
                v-for="(feature, fIndex) in plan.features" 
                :key="fIndex"
                class="flex items-center gap-3 py-1.5"
              >
                <svg 
                  class="w-5 h-5 flex-shrink-0" 
                  :class="[plan.highlight ? 'text-white/90' : 'text-primary']"
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
              class="block w-full text-center rounded-lg font-medium py-3 transition-all duration-200"
              :class="{
                'bg-primary text-white hover:bg-primary-dark hover:shadow-md': !plan.highlight,
                'bg-white text-primary hover:bg-gray-50 hover:shadow-md': plan.highlight
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
