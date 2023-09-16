import { showFormattedDate } from "../utils/index";
import { BsTrash } from "react-icons/bs";

type Props = {
  title: string;
  body: string;
  createdAt: string;
  handleDelete: (noteId: number) => void;
  noteId: number;
};

const NoteItem = ({ title, body, createdAt, handleDelete, noteId }: Props) => {
  return (
    <div className="flex justify-between p-6 border border-slate-600 text-slate-600 rounded-lg shadow-md hover:bg-slate-50 h-[240px]">
      <div>
        <h5 className="text-lg font-bold tracking-wider text-gray-900">
          {title}
        </h5>
        <span className="text-xs italic">{showFormattedDate(createdAt)}</span>
        <p className="text-sm my-4 tracking-wide">{body}</p>
      </div>
      <div>
        <BsTrash
          className="text-red-600 text-lg cursor-pointer"
          onClick={() => handleDelete(noteId)}
        />
      </div>
    </div>
  );
};

export default NoteItem;
