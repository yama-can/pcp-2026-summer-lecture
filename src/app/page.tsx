"use client"; // ブラウザ側で動かすならこれを付ける
import { useState } from "react";

export default function Home() {

  const [omikuji, setOmikuji] = useState<string | null>(null);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <h1>
          おみくじアプリ
        </h1>

        <p>
          {
            omikuji === null ?
              "おみくじを引いてください" :
              "あなたの運勢は " + omikuji
          }
        </p>

        <button
          onClick={() => fetch("/api/omikuji").then(res => res.json()).then(data => setOmikuji(data.omikuji))}
        >
          おみくじを引く
        </button>

      </main>
    </div>
  );
}
