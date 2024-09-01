<template>
  <div class="note-form">
    <h3>Добавить заметку</h3>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Название:</label>
        <input type="text" id="title" v-model="title" required />
      </div>
      <div class="form-group">
        <label for="content">Описание:</label>
        <textarea id="content" v-model="content" required></textarea>
      </div>
      <button type="submit" class="submit-button">Добавить</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  name: 'NoteForm',
  setup(props, { emit }) {
    const title = ref('')
    const content = ref('')

    const submitForm = async () => {
      try {
        const newNote = { title: title.value, content: content.value }
        await axios.post('http://localhost:8000/notes/', newNote)
        title.value = ''
        content.value = ''
        emit('note-added')
      } catch (error) {
        console.error('Error adding note:', error)
      }
    }

    return {
      title,
      content,
      submitForm
    }
  }
}
</script>

<style scoped>
.note-form {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-bottom: 15px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
}

textarea {
  height: 100px;
}

.submit-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #218838;
}
</style>
