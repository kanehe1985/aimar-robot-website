<script setup lang="ts">
const features = [
  {
    title: '资深技术团队',
    description: '10年以上自动化行业经验，工程师占比70%，精通非标定制、视觉检测、智能产线改造。'
  },
  {
    title: '本地快速响应',
    description: '宁波本地服务商，2小时内响应，48小时上门服务，售后无忧，不用等外地厂商排期。'
  },
  {
    title: '30天快速交付',
    description: '标准化产品+模块化定制，比行业平均交付速度快50%，30天即可上线投产。'
  },
  {
    title: '高性价比方案',
    description: '按需定制，拒绝过度设计，综合成本比同行低20%，终身提供成本价维保服务。'
  },
  {
    title: '量化验收标准',
    description: '所有项目都有明确的量化验收指标，厂内预调试，现场安装后即可达到设计标准。'
  },
  {
    title: '终身维保服务',
    description: '所有项目提供终身技术支持，定期巡检，24小时故障响应，设备升级成本价。'
  }
]
</script>

<template>
  <section id="features" class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16 reveal">
        <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium mb-6">
          核心优势
        </div>
        <h2 class="text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-gray-900 mb-6">
          为什么选择艾马机器人
        </h2>
        <p class="text-gray-600 text-lg">
          专注工业自动化领域，为宁波本地制造企业提供从方案设计、生产安装到售后维保的全流程服务，让工厂自动化改造少走弯路
        </p>
      </div>

      <!-- 现代卡片设计：圆角更大，阴影更柔和，图标点缀 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="bg-gray-50 border-0 rounded-2xl p-8 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 reveal"
        >
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>

      <!-- 数据亮点块 -->
      <div class="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-10 md:p-16 text-white">
        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div class="text-accent font-black text-5xl mb-3">40%</div>
            <p class="text-white/80 text-lg">平均人力成本降低</p>
          </div>
          <div>
            <div class="text-accent font-black text-5xl mb-3">2.5×</div>
            <p class="text-white/80 text-lg">生产效率提升</p>
          </div>
          <div>
            <div class="text-accent font-black text-5xl mb-3">99.7%</div>
            <p class="text-white/80 text-lg">稳定设备稼动率</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
