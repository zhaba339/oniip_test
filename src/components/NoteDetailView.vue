<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  name: 'NoteDetailView',
  props: ['note_id'],  // Принимаем note_id как пропс
  setup(props) {
    const note = ref({})

    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/notes/${props.note_id}`)
        note.value = response.data
      } catch (error) {
        console.error('Ошибка при получении заметки:', error)
      }
    }

    onMounted(fetchNote)

    return {
      note
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