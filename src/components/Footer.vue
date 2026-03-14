<script setup lang="ts">
const quickLinks = [
  { label: '首页', href: '#home' },
  { label: '核心优势', href: '#features' },
  { label: '应用场景', href: '#scenarios' },
  { label: '成功案例', href: '#cases' },
  { label: '价格方案', href: '#pricing' },
  { label: '联系我们', href: '#contact' },
]

const solutions = [
  { label: '客户服务自动化', href: '#' },
  { label: '内部协作优化', href: '#' },
  { label: '业务流程自动化', href: '#' },
  { label: '技术支持自动化', href: '#' },
  { label: '定制化解决方案', href: '#' },
]

const resources = [
  { label: '帮助中心', href: '#' },
  { label: '开发文档', href: '#' },
  { label: 'API文档', href: '#' },
  { label: '合作伙伴', href: '#' },
  { label: '隐私政策', href: '#' },
]
</script>

<template>
  <footer class="bg-dark text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <div class="flex items-center space-x-2 mb-6">
            <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span class="text-primary font-bold text-xl">A</span>
            </div>
            <span class="text-xl font-bold text-white">艾马机器人</span>
          </div>
          <p class="text-gray-medium mb-6">
            企业级智能工作助理平台，帮助企业提升效率、降低成本、实现数字化转型。
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors hover:bg-primary">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors hover:bg-primary">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors hover:bg-primary">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6">快速链接</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <a :href="link.href" class="text-gray-medium hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6">解决方案</h4>
          <ul class="space-y-3">
            <li v-for="link in solutions" :key="link.label">
              <a :href="link.href" class="text-gray-medium hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6">资源中心</h4>
          <ul class="space-y-3">
            <li v-for="link in resources" :key="link.label">
              <a :href="link.href" class="text-gray-medium hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-medium text-sm mb-4 md:mb-0">
            © 2024 艾马机器人(宁波)有限公司 版权所有 | 浙ICP备XXXXXX号
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-medium hover:text-white text-sm transition-colors">隐私政策</a>
            <a href="#" class="text-gray-medium hover:text-white text-sm transition-colors">服务条款</a>
            <a href="#" class="text-gray-medium hover:text-white text-sm transition-colors">法律声明</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
