import { useState } from "react";

export default function Home() {
  const [story, setStory] = useState([]);
  return (
    <main className="p-5">
      <nav>
        <h1 className="text-blue-500 text-lg">Instagram Story Feature Demo</h1>
      </nav>
      <section id="story-container">this will be the actual component</section>
    </main>
  );
}
