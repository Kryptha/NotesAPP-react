import { useEffect, useState } from 'react';
import NotesList from './components/NotesList'
import axios from 'axios';

//TODO This only for testing purpose
const API_URL = 'http://localhost:3000'

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/v1/notes`).then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <div className="w-screen container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
