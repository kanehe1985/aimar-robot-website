<script setup lang="ts">
</script>

<template>
  <section id="home" class="pt-32 pb-24 bg-gradient-to-b from-gray-light/50 to-white">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="fade-in">
          <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            企业级智能工作助理平台
          </div>
          <h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-dark mb-6">
            让AI赋能<br>
            <span class="text-primary">企业数字化转型</span>
          </h1>
          <p class="text-gray-dark text-lg mb-8 max-w-xl">
            艾马机器人专为企业级应用场景设计，通过自动化工作流程、智能调度和多模型集成，帮助团队提升工作效率、降低运营成本、实现业务增长。
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="btn-primary">
              免费演示
            </a>
            <a href="#features" class="btn-secondary">
              了解更多
            </a>
          </div>
          <div class="mt-12 flex items-center space-x-8">
            <div class="flex -space-x-3">
              <div class="w-10 h-10 rounded-full bg-gray-medium border-2 border-white"></div>
              <div class="w-10 h-10 rounded-full bg-secondary border-2 border-white"></div>
              <div class="w-10 h-10 rounded-full bg-primary border-2 border-white"></div>
            </div>
            <div>
              <div class="text-dark font-bold text-2xl">500+</div>
              <div class="text-gray-dark text-sm">企业客户的选择</div>
            </div>
            <div class="h-12 w-px bg-gray-medium/30"></div>
            <div>
              <div class="text-dark font-bold text-2xl">98%</div>
              <div class="text-gray-dark text-sm">客户满意度</div>
            </div>
          </div>
        </div>
        <div class="relative fade-in" style="animation-delay: 0.2s">
          <div class="relative z-10 bg-white rounded-2xl shadow-hover p-6">
            <div class="bg-gray-light rounded-xl p-4 mb-4">
              <div class="flex items-center space-x-3 mb-3">
                <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold">A</span>
                </div>
                <div>
                  <div class="font-medium text-dark">艾马助理</div>
                  <div class="text-xs text-gray-dark">在线</div>
                </div>
              </div>
              <div class="bg-white rounded-lg p-3 mb-3 shadow-sm">
                <p class="text-sm text-dark">您好，我是您的智能工作助理，请问有什么可以帮助您的？</p>
              </div>
              <div class="bg-primary/10 rounded-lg p-3 ml-auto max-w-[80%] shadow-sm">
                <p class="text-sm text-dark">帮我分析一下这个季度的销售数据，并生成报告</p>
              </div>
              <div class="bg-white rounded-lg p-3 mt-3 shadow-sm">
                <p class="text-sm text-dark">✅ 已完成数据分析，报告已生成并发送到您的邮箱。主要发现：<br>• 本季度销售额增长 35%<br>• 华东区域贡献最大，占比 42%<br>• 建议重点拓展华南市场</p>
              </div>
            </div>
            <div class="h-12 bg-gray-light rounded-lg flex items-center px-4">
              <input type="text" placeholder="输入您的问题..." class="bg-transparent w-full text-sm outline-none" disabled>
              <button class="bg-primary text-white rounded-lg px-4 py-1.5 text-sm">发送</button>
            </div>
          </div>
          <div class="absolute top-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>
