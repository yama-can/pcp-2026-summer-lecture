/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"; // ブラウザ側で動かすならこれを付ける
import { useState } from "react";

export default function Home() {

  // ======================================
  // ここで State を作る
  // ======================================

  // ======================================

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <h1>
          おみくじアプリ
        </h1>

        {/* ======================================
          ここに結果表示を作る
        ====================================== */}

        {/* ====================================== */}

        <button
          onClick={() => {

            // ======================================
            // ここでおみくじを引くロジックを作る
            // ======================================

            // ======================================

          }}
        >
          おみくじを引く
        </button>

      </main>
    </div>
  );
}
