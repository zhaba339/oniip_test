<template>
  <div class="note-detail-view">
    <h3 class="note-title">{{ note.title }}</h3>
    <p class="note-text">{{ note.content }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import NoteForm from "./NoteForm.vue";

export default {
  name: 'NoteDetailView',
  props: {
    note: {
      type: Object,
      required: true
    }
  }
}
</script>


<style scoped>
.note-detail {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2em;
  color: #333;
}

p {
  font-size: 1.2em;
  color: #555;
}
</style>