import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList'

const App = () => {
  const [notes, setNote] = useState([
    {
      id: nanoid(),
      title: 'The Coldest Sunset',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!',
      date: '10 December, 2022',
    },
    {
      id: nanoid(),
      title: 'Welcome to my house',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!',
      date: '10 December, 2022',
    },
    {
      id: nanoid(),
      title: 'Australian Rats',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!',
      date: '14 December, 2022',
    },
    {
      id: nanoid(),
      title: 'Japan Sunset',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!',
      date: '30 December, 2022',
    }
  ]);

  return (
    <div className="w-screen container">
      <NotesList notes={notes}/>
    </div>
  );
};

export default App;
