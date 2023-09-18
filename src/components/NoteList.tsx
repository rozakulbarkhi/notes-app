import toast from "react-hot-toast";
import NoteItem from "./NoteItem";
import { useState } from "react";

type Props = {
  notes: {
    id: number;
    title: string;
    body: string;
    createdAt: string;
    archived: boolean;
  }[];
  setNotes: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        body: string;
        createdAt: string;
        archived: boolean;
      }[]
    >
  >;
};

const NoteList = ({ notes, setNotes }: Props) => {
  const [search, setSearch] = useState("");

  const handleDelete = (noteId: number) => {
    setNotes((prev) => prev.filter((note) => note?.id !== noteId));

    toast.error("Note deleted successfully!", {
      style: {
        fontSize: "12px",
      },
    });
  };

  return (
    <div className="flex-1">
      <div className="flex justify-end">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search notes by title..."
          className="border border-slate-600 rounded-md my-4 px-2 py-1 text-sm placeholder:text-xs"
        />
      </div>
      <div className="grid grid-cols-2 gap-6 overflow-auto h-[480px] overflow-y-scroll w-full">
        {notes?.length > 0 ? (
          notes
            ?.filter((note) =>
              note?.title.toLowerCase().includes(search.toLowerCase())
            )
            ?.map((note) => (
              <NoteItem
                key={note?.id}
                noteId={note?.id}
                handleDelete={handleDelete}
                {...note}
              />
            ))
        ) : (
          <div className="col-span-3 flex justify-center items-center">
            <h5 className="text-sm tracking-wider text-gray-900">
              No notes found!
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteList;
