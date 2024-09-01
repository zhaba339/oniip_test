import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([]);

  const addNote = (note) => {
    notes.value.push(note);
  };

  const getNoteById = (id) => {
    return notes.value.find(note => note.id === id);
  };

  return {
    notes,
    addNote,
    getNoteById,
  };
});