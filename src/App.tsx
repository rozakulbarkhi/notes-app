import { useState } from "react";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Input from "./components/Input";

type Note = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
}[];

const App = () => {
  const data = getInitialData();
  const [notes, setNotes] = useState<Note>(data);

  return (
    <div className="container mx-auto flex flex-col justify-between items-center min-h-screen">
      <Navbar />
      <div className="flex gap-12 h-[80vh] w-full">
        <Input setNotes={setNotes} />
        <NoteList notes={notes} setNotes={setNotes} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
