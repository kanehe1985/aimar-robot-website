<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  company: '',
  phone: '',
  email: '',
  message: ''
})

const submitForm = () => {
  alert('感谢您的咨询，我们会尽快与您联系！')
  // 这里可以添加表单提交逻辑
  formData.value = {
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  }
}
</script>

<template>
  <section id="contact" class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <div class="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              联系我们
            </div>
            <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-6">
              开启您的AI转型之旅
            </h2>
            <p class="text-gray-dark text-lg mb-8">
              填写表单或直接联系我们，获取免费演示和定制化解决方案，我们的专家团队将在24小时内与您联系。
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-dark mb-1">公司地址</h3>
                  <p class="text-gray-dark">浙江省宁波市鄞州区创新园区A座1501室</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a15.055 15.055 0 005.558 5.558l1.129-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-dark mb-1">联系电话</h3>
                  <p class="text-gray-dark">400-888-9999</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-dark mb-1">电子邮箱</h3>
                  <p class="text-gray-dark">contact@aimar-robot.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-light rounded-2xl p-8">
            <form @submit.prevent="submitForm" class="space-y-4">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-dark mb-2">姓名 *</label>
                  <input 
                    v-model="formData.name"
                    type="text" 
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-medium/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="请输入您的姓名"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-dark mb-2">公司名称 *</label>
                  <input 
                    v-model="formData.company"
                    type="text" 
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-medium/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="请输入公司名称"
                  >
                </div>
              </div>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-dark mb-2">手机号码 *</label>
                  <input 
                    v-model="formData.phone"
                    type="tel" 
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-medium/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="请输入手机号码"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-dark mb-2">电子邮箱</label>
                  <input 
                    v-model="formData.email"
                    type="email" 
                    class="w-full px-4 py-3 rounded-lg border border-gray-medium/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="请输入电子邮箱"
                  >
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-dark mb-2">需求描述</label>
                <textarea 
                  v-model="formData.message"
                  rows="4" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-medium/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                  placeholder="请简要描述您的需求..."
                ></textarea>
              </div>
              <button type="submit" class="btn-primary w-full">
                提交咨询
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
