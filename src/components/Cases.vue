<script setup lang="ts">
const cases = [
  {
    company: '软件开发团队',
    logo: '💻',
    problem: '代码审查和文档管理效率低，开发周期长，代码质量参差不齐',
    solution: '部署艾马机器人，实现代码自动审查和文档生成',
    results: [
      '代码质量提升 30%',
      '开发周期缩短 20%',
      '文档管理时间减少 50%'
    ]
  },
  {
    company: '电商客服中心',
    logo: '🛒',
    problem: '客户响应速度慢，人工成本高，客户满意度低',
    solution: '部署艾马机器人，实现智能客服和工单自动化',
    results: [
      '响应时间从 24 小时降低到 5 分钟',
      '客户满意度提升 40%',
      '人工成本降低 60%'
    ]
  },
  {
    company: '金融数据分析部门',
    logo: '📊',
    problem: '数据处理和报告生成效率低，错误率高，人力投入大',
    solution: '部署艾马机器人，实现数据自动处理和报告生成',
    results: [
      '报告生成时间从 3 天降低到 1 小时',
      '数据分析效率提升 80%',
      '错误率降低 90%'
    ]
  },
  {
    company: '制造业生产部门',
    logo: '🏭',
    problem: '生产流程监控难，设备故障预警不及时，产能利用率低',
    solution: '部署艾马机器人，实现生产流程智能监控和预测性维护',
    results: [
      '设备故障率降低 45%',
      '产能利用率提升 25%',
      '维护成本降低 30%'
    ]
  }
]
</script>

<template>
  <section id="cases" class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          成功案例
        </div>
        <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">
          他们已经通过艾马实现了增长
        </h2>
        <p class="text-gray-dark text-lg">
          超过500家企业正在使用艾马机器人提升运营效率，实现数字化转型
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div 
          v-for="(caseItem, index) in cases" 
          :key="index"
          class="card fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl">
              {{ caseItem.logo }}
            </div>
            <div>
              <h3 class="text-xl font-bold text-dark">{{ caseItem.company }}</h3>
            </div>
          </div>
          
          <div class="space-y-4">
            <div>
              <div class="text-sm font-medium text-gray-dark mb-1">面临的问题</div>
              <p class="text-dark">{{ caseItem.problem }}</p>
            </div>
            
            <div>
              <div class="text-sm font-medium text-gray-dark mb-1">解决方案</div>
              <p class="text-dark">{{ caseItem.solution }}</p>
            </div>
            
            <div>
              <div class="text-sm font-medium text-gray-dark mb-2">取得的成果</div>
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
