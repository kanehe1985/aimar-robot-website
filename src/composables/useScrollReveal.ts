import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal')
    
    reveals.forEach(element => {
      const windowHeight = window.innerHeight
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active')
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', revealElements)
    // 初始检查一次
    revealElements()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', revealElements)
  })
}
