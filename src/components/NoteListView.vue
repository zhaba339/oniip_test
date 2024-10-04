<template>
  <div class="container">
    <NoteForm @note-added="fetchNotes" />
    <h2 class="title">Лист заметок</h2>
    <ul class="note-list">
      <li v-for="note in notes" :key="note.id" class="note-item">
        <!-- Здесь отображаем заголовок и контент заметки -->
        <div class="note-content">
          <h3 class="note-title">{{ note.title }}</h3>
          <p class="note-text">{{ note.content }}</p>
        </div>
        <button @click="deleteNote(note.id)" class="delete-button">Удалить</button>
        <router-link to="/more_detail"><button class="more-button">Подробнее</button></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import NoteForm from './NoteForm.vue'
import NoteDetailView from "./NoteDetailView.vue";

export default {
  name: 'NoteListView',
  components: {
    NoteForm,
    NoteDetailView,
  },
  setup() {
    const notes = ref([])

    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/notes/')
        notes.value = response.data
      } catch (error) {
        console.error('Ошибка при получении заметок:', error)
      }
    }

    const deleteNote = async (noteId) => {
      try {
        await axios.delete(`http://localhost:8000/notes/${noteId}`)
        fetchNotes() // Обновите список заметок после удаления
      } catch (error) {
        console.error('Ошибка при удалении заметки:', error)
      }
    }

    onMounted(fetchNotes)

    return {
      notes,
      fetchNotes,
      deleteNote
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2em;
  margin: 20px 0;
  color: #333;
}

.note-list {
  list-style: none;
  padding: 0;
}

.note-item {
  padding: 15px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.note-title {
  font-size: 1.5em;
  margin-bottom: 5px;
  color: #007bff;
}

.note-text {
  font-size: 1.2em;
  color: #555;
}

.delete-button {
  margin-top: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c82333;
}

.more-button {
  margin-top: 10px;
  margin-left: 5px;
  background-color: #23c839;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.more-button:hover {
  background-color: #0e8b29;
}
</style>
