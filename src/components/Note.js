import { IconButton } from "@material-tailwind/react";
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
//TODO This only for testing purpose
const API_URL = 'http://localhost:3000'

const Note = ({id, title, body, date}) => {

  const handleDelete = (event) => {
    event.preventDefault();
    
    axios.delete(`${API_URL}/api/v1/notes/${id}`)
    .then(() => {
      //TODO This only for testing purpose
      window.location.reload(false);
    });
  }

  return(
    <div class="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <div class='text-sm text-gray-500 pb-2'>{date}</div>
        <p class="text-gray-700 text-base"> {body} </p>
      </div>
      <div class='flex justify-end p-2 justi'>
        <IconButton className='rounded-full' color='red' onClick={handleDelete}>
          <MdDeleteForever size='1.6em'/>
        </IconButton>
      </div>
    </div>
  );
};

export default Note;