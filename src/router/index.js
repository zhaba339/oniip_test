import { createRouter, createWebHistory } from 'vue-router'
import NoteListView from '../components/NoteListView.vue'
import NoteDetailView from '../components/NoteDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'note-list',
    component: NoteListView
  },
  {
    path: '/more_detail',
    name: 'note-detail-view',
    component: NoteDetailView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
