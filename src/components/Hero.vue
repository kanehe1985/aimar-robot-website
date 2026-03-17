<script setup lang="ts">
</script>

<template>
  <!-- 现代工业风首屏：深蓝色背景+白色文字，更强科技感 -->
  <section id="home" class="relative pt-32 pb-32 bg-primary overflow-hidden">
    <!-- 几何装饰点缀 -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-primary-dark/10 -skew-x-12 transform-gpu"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary-dark/20 -skew-x-12 transform-gpu"></div>
    
    <div class="container relative mx-auto px-4">
      <div class="grid lg:grid-cols-5 gap-16 items-center">
        <div class="lg:col-span-3 text-white">
          <div class="inline-block bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium mb-6">
            艾马机器人 (宁波) 有限公司
          </div>
          <h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-8">
            让制造<br>
            <span class="text-accent">更智能 · 更高效</span>
          </h1>
          <p class="text-white/90 text-xl mb-10 max-w-xl leading-relaxed">
            10年工业自动化经验，为宁波本地制造企业提供<br/>
            <strong class="text-accent">非标定制 · 智能工作站 · 产线改造 · 视觉检测</strong><br/>
            一站式交钥匙解决方案，降本增效，提升核心竞争力。
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="btn-accent text-lg px-10 py-4 rounded-xl">
              免费获取方案
            </a>
            <a href="#scenarios" class="border-2 border-white text-white px-10 py-4 rounded-xl font-medium transition-all duration-200 hover:bg-white/10 hover:shadow-lg">
              浏览解决方案
            </a>
          </div>
          
          <!-- 数据卡片 -->
          <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-accent font-black text-4xl mb-2">10+</div>
              <div class="text-white/70 text-sm">年行业经验</div>
            </div>
            <div class="text-center">
              <div class="text-accent font-black text-4xl mb-2">2h</div>
              <div class="text-white/70 text-sm">快速响应</div>
            </div>
            <div class="text-center">
              <div class="text-accent font-black text-4xl mb-2">30天</div>
              <div class="text-white/70 text-sm">交付投产</div>
            </div>
            <div class="text-center">
              <div class="text-accent font-black text-4xl mb-2">20%</div>
              <div class="text-white/70 text-sm">成本降低</div>
            </div>
          </div>
        </div>
        
        <!-- 主图卡片 -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1581091266863-a2da8df87f8ce?auto=format&fit=crop&w=800&h=600" alt="现代工业机器人自动化手臂" class="w-full h-80 object-cover" loading="eager" fetchpriority="high">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <div>
                  <div class="text-white text-2xl font-bold mb-2">交钥匙工程</div>
                  <div class="text-white/90 text-sm">从方案设计到落地投产，全流程一站式服务</div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 p-6 bg-white">
              <div class="bg-gray-50 rounded-xl p-4 text-center transition-colors duration-200 hover:bg-primary/5">
                <div class="text-primary font-bold text-3xl mb-1">30+</div>
                <div class="text-sm text-gray-600">宁波本地客户</div>
              </div>
              <div class="bg-gray-50 rounded-xl p-4 text-center transition-colors duration-200 hover:bg-primary/5">
                <div class="text-primary font-bold text-3xl mb-1">99.5%</div>
                <div class="text-sm text-gray-600">设备运行率</div>
              </div>
              <div class="bg-gray-50 rounded-xl p-4 text-center transition-colors duration-200 hover:bg-primary/5">
                <div class="text-primary font-bold text-3xl mb-1">70%</div>
                <div class="text-sm text-gray-600">效率提升</div>
              </div>
              <div class="bg-gray-50 rounded-xl p-4 text-center transition-colors duration-200 hover:bg-primary/5">
                <div class="text-primary font-bold text-3xl mb-1">5年+</div>
                <div class="text-sm text-gray-600">平均寿命</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
