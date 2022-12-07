import Note from "./Note";
import AddNote from './AddNote'

const NotesList = ({ notes }) => {
  return(
    <div class='w-screen flex justify-center mt-5'>
      <div class='grid grid-cols-3 gap-4'>
        <AddNote/>
        { notes.map((note)=> 
          <Note  
            id={note.id} 
            title={note.title}
            body={note.body}
            date={note.created_at}
          />
        )}
      </div>
    </div>
  );
};

export default NotesList;