import toast from "react-hot-toast";
import NoteItem from "./NoteItem";

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
  const handleDelete = (noteId: number) => {
    setNotes((prev) => prev.filter((note) => note?.id !== noteId));

    toast.error("Note deleted successfully!", {
      style: {
        fontSize: "12px",
      },
    });
  };

  return (
    <div className="grid grid-cols-3 gap-6 overflow-auto overflow-y-scroll h-[280px] w-full">
      {notes?.length > 0 ? (
        notes?.map((note) => (
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
  );
};

export default NoteList;
