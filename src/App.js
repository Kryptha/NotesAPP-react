import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList'
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/notes'

function getAPIData(){
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let mounted = true; 
    getAPIData().then((items) => {
      if(mounted){
        setNotes(items);
      }
    });
    return() => (mounted = false);
  }, []);

  return (
    <div className="w-screen container">
      <NotesList notes={notes}/>
    </div>
  );
};

export default App;
