import { useState } from "react";
import toast from "react-hot-toast";

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
};

const Input = ({ setNotes }: Props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "title" && value.length > 50) return;
    if (name === "title") setTitle(value);
    if (name === "body") setBody(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const createdAt = new Date().toLocaleString();

    if (!title || !body) return;

    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt,
      archived: false,
    };

    setNotes((prev) => [...prev, newNote]);

    toast.success("Note created successfully!", {
      style: {
        fontSize: "12px",
      },
    });

    setTitle("");
    setBody("");
  };

  return (
    <div className="flex flex-col space-y-4 my-4 w-1/3">
      <h1 className="text-xl font-bold tracking-wider">Create Note</h1>
      <form
        className="space-y-4 border border-slate-600 rounded-md p-2 shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-1 text-sm font-medium tracking-wide">
          <label htmlFor="title" className="capitalize">
            title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            className="border border-slate-600 rounded-md px-2 py-1"
          />
          {/* text limit */}
          <p className="text-[10px] text-slate-600 text-end">
            max 50 characters, remaining:{" "}
            {50 - title.length > 0 ? (
              50 - title.length
            ) : (
              <span className="text-red-600">0</span>
            )}
          </p>
        </div>
        <div className="flex flex-col space-y-1 text-sm font-medium tracking-wide">
          <label htmlFor="body" className="capitalize">
            body
          </label>
          <textarea
            name="body"
            id="body"
            rows={5}
            value={body}
            onChange={handleChange}
            className="border border-slate-600 rounded-md px-2 py-1 resize-none"
          />
        </div>
        <button
          disabled={title.length === 0 || body.length === 0}
          className="text-sm w-full bg-blue-600 hover:bg-blue-700 rounded-md px-2 py-1 text-white capitalize disabled:bg-slate-400 disabled:cursor-not-allowed"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Input;
