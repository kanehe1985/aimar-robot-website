<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  company: '',
  phone: '',
  email: '',
  message: '',
})

const submitForm = () => {
  alert('感谢您的咨询，我们会尽快与您联系！')
  // 这里可以添加表单提交逻辑
  formData.value = {
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  }
}
</script>

<template>
  <section id="contact" class="py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden reveal">
          <div class="grid md:grid-cols-2">
            <!-- 左侧联系信息 -->
            <div class="bg-primary p-8 md:p-12 text-white">
              <div class="inline-block bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium mb-6">
                联系我们
              </div>
              <h2 class="text-[clamp(1.8rem,3vw,2.8rem)] font-bold mb-6">
                开启您的工厂<br>自动化升级之旅
              </h2>
              <p class="text-white/80 text-lg mb-10 leading-relaxed">
                填写表单或直接联系我们，获取免费现场勘测和定制化解决方案，我们的工程师将在<span class="font-semibold text-accent">2小时内</span>与您联系。
              </p>

              <div class="space-y-8 mb-12">
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243 4.243a8 8 0 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-medium text-white mb-1">公司地址</h3>
                    <p class="text-white/80">浙江省宁波市鄞州区创新园区A座1501室</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2H21 8M5 19h14a2 2 0 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-medium text-white mb-1">联系电话</h3>
                    <p class="text-white/80">400-888-9999</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 6a 2 2 0 016 6l12 6h-6-12 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-medium text-white mb-1">电子邮箱</h3>
                    <p class="text-white/80">contact@aimar-robot.com</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧表单 -->
            <div class="p-8 md:p-12">
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-3">姓名 *</label>
                    <input 
                      v-model="formData.name"
                      type="text" 
                      required
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-3">公司名称 *</label>
                    <input 
                      v-model="formData.company"
                      type="text" 
                      required
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-900"
                      placeholder="请输入公司名称"
                    />
                  </div>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-3">手机号码 *</label>
                    <input 
                      v-model="formData.phone"
                      type="tel" 
                      required
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-900"
                      placeholder="请输入手机号码"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-3">电子邮箱</label>
                    <input 
                      v-model="formData.email"
                      type="email" 
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-900"
                      placeholder="请输入电子邮箱"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-3">需求描述</label>
                  <textarea 
                    v-model="formData.message"
                    rows="5" 
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-gray-900"
                    placeholder="请简要描述您的需求..."
                  ></textarea>
                </div>
                <button type="submit" class="btn-primary w-full text-lg py-4 rounded-xl">
                  提交咨询
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
