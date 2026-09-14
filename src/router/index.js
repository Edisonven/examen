import CalificacionesView from '@/views/CalificacionesView.vue'
import FormularioView from '@/views/FormularioView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "calificaciones",
      component: CalificacionesView
    },
    {
      path: "/formulario-registro",
      name: "formulario",
      component: FormularioView
    }
  ],
})

export default router
