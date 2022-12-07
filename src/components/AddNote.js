import { Input, Textarea } from "@material-tailwind/react";
import { MdAdd } from "react-icons/md";
import { IconButton } from "@material-tailwind/react";
import { useState } from "react";
import axios from 'axios';

const API_URL = 'http://localhost:3000'

function AddNote () {
  const [noteText, setNoteText] = useState('');

  const handleChangeText = (event) => {
    setNoteText(event.target.value); 
  };

  const [noteTitle, setNoteTitle] = useState('');

  const handleChangeTitle = (event) => {
    setNoteTitle(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post(`${API_URL}/api/v1/notes`, {
      title: noteTitle,
      body: noteText
    })
    .then(() => {
      window.location.reload(false);
    });
  }

  return(
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <form onSubmit={handleSubmit}>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <Input 
              variant="standard" 
              label="Type a title" 
              color="indigo"
              onChange={handleChangeTitle}
              required='true'
              />
          </div>
          <div>
            <Textarea 
              variant="outlined" 
              label="Type a note" 
              color="indigo"
              onChange={handleChangeText}
              required='true'
              />
          </div>
        </div>
        <div class='flex justify-end p-2'>
          <IconButton type='submit'className='rounded-full' color='indigo'>
            <MdAdd size='1.8em'/>
          </IconButton>
        </div>
      </form>
    </div>
  );
};

export default AddNote;