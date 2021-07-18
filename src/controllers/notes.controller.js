const addNote = (req, res) => {
    //addNote api logic here
};

const updateNote = (req, res) => {
    //updateNotesList api logic here
};

const deleteNote = (req, res) => {
    //deleteNotes api logic here
};

const getNotesList = (req, res) => {
    //getNotesList api logic here
};

const searchNotes = (req, res) => {
    //searchNotes api logic here
};

const addNotesLabel = (req, res) => {
    //const addNotesLabel api logic here
};

const NotesController = {
    addNote,
    getNotesList,
    updateNote,
    deleteNote,
    searchNotes,
    addLabel
};

module.exports = NotesController;