type Props = {
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
  notes: {
    id: number;
    title: string;
    body: string;
    createdAt: string;
    archived: boolean;
  }[];
};

const Navbar = ({ setNotes, notes }: Props) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    value !== ""
      ? setNotes((prev) =>
          prev.filter((note) =>
            note?.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
          )
        )
      : setNotes(notes);
  };

  return (
    <div className="my-4 flex w-full justify-between items-center">
      <h1 className="text-3xl font-bold tracking-wider underline">Notes App</h1>
      <div>
        <input
          type="text"
          placeholder="Search note..."
          className="text-sm border border-slate-600 shadow rounded px-2 py-1 placeholder:text-xs"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Navbar;
