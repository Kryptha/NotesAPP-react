import { IconButton } from "@material-tailwind/react";

const Note = ({id, title, body, date}) => {
  return(
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <div class='text-sm text-gray-500 pb-2'>{date}</div>
        <p class="text-gray-700 text-base"> {body} </p>
      </div>
      <div class='flex justify-end p-2'>
        <IconButton>
          <i className="fas fa-heart" />
        </IconButton>
      </div>
    </div>
  );
};

export default Note;