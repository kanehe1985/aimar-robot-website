<script setup lang="ts">
const cases = [
  {
    company: '宁波某汽车零部件厂',
    logo: '🚗',
    problem: '人工螺丝锁付效率低，一致性差，不良率高，人工成本高',
    solution: '定制6工位自动螺丝锁付工作站，视觉定位+扭矩监控',
    results: [
      '人工从8人减至1人',
      '效率提升400%',
      '良品率达99.7%'
    ]
  },
  {
    company: '宁波某电子科技公司',
    logo: '📱',
    problem: '人工视觉检测分拣效率低，误检率高，检测速度跟不上产线',
    solution: '开发AI视觉检测分拣系统，120件/分钟检测速度',
    results: [
      '检测速度达120件/分钟',
      '误检率<0.1%',
      '年节省人工成本60万'
    ]
  },
  {
    company: '宁波某食品有限公司',
    logo: '🍜',
    problem: '成品装箱码垛人工劳动强度大，招工难，效率低',
    solution: '定制自动装箱+码垛系统，24小时不间断运行',
    results: [
      '全流程无人化运行',
      '产能提升2倍',
      '2年收回投资成本'
    ]
  },
  {
    company: '宁波某五金加工厂',
    logo: '🔩',
    problem: '焊接工位环境恶劣，人工焊接质量不稳定，效率低',
    solution: '六轴机器人焊接工作站，双工位协同作业',
    results: [
      '焊接效率提升3倍',
      '焊接一致性100%',
      '解决招工难问题'
    ]
  }
]
</script>

<template>
  <section id="cases" class="bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-20 reveal">
        <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          成功案例
        </div>
        <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-gray-900 mb-6">
          宁波本地客户案例
        </h2>
        <p class="text-gray-600 text-lg">
          已为30+宁波本地制造企业提供自动化改造服务，熟悉本地企业需求，服务响应更快
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 md:gap-10 mb-16">
        <div 
          v-for="(caseItem, index) in cases" 
          :key="index"
          class="card reveal"
          :class="`reveal-delay-${index % 2 + 1}`"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl">
              {{ caseItem.logo }}
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900">{{ caseItem.company }}</h3>
            </div>
          </div>
          
          <div class="space-y-5">
            <div>
              <div class="text-sm font-medium text-gray-500 mb-2">面临的问题</div>
              <p class="text-gray-800">{{ caseItem.problem }}</p>
            </div>
            
            <div>
              <div class="text-sm font-medium text-gray-500 mb-2">解决方案</div>
              <p class="text-gray-800">{{ caseItem.solution }}</p>
            </div>
            
            <div>
              <div class="text-sm font-medium text-gray-500 mb-3">取得的成果</div>
              <div class="space-y-2">
                <div 
                  v-for="(result, rIndex) in caseItem.results" 
                  :key="rIndex"
                  class="flex items-center gap-2 text-dark"
                >
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <svg class="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {{ result }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <a href="#contact" class="btn-secondary inline-flex items-center gap-2">
          查看更多案例
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
