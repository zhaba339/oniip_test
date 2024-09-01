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
    path: '/notes/:note_id',
    name: 'note-detail',
    component: NoteDetailView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
