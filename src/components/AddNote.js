import { Input, Textarea } from "@material-tailwind/react";
import { MdAdd } from "react-icons/md";
import { IconButton } from "@material-tailwind/react";
import { useState } from "react";

const AddNote = () => {
  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value); 
  };

  return(
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          <Input variant="standard" label="Type a title" color="indigo"/>
        </div>
        <div>
          <Textarea 
            variant="outlined" 
            label="Type a note" 
            color="indigo"
            onChange={handleChange}
            />
        </div>
    </div>
      <div class='flex justify-end p-2'>
        <IconButton className='rounded-full' color='indigo'>
          <MdAdd size='1.8em'/>
        </IconButton>
      </div>
    </div>
  );
};

export default AddNote;