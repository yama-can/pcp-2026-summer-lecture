"use client"; // ブラウザ側で動かすならこれを付ける
import { useState } from "react";

export default function Home() {

	const [omikuji, setOmikuji] = useState<string | null>(null);
	const [omikujiID, setOmikujiID] = useState<string | null>(null);

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
							"あなたの運勢は " + omikuji + " です (ID: " + omikujiID + ")"
					}
				</p>

				<button
					onClick={() => fetch("/api/omikuji").then(res => res.json()).then(data => {
						setOmikuji(data.omikuji);
						setOmikujiID(data.omikujiID);
					})}
				>
					おみくじを引く
				</button>

				<form action={async (formData: FormData) => {
					const user_id = formData.get("user_id");	// form に入力されたデータを取得する処理
					const rival_id = formData.get("rival_id");
					if (!user_id || !rival_id) {
						alert("おみくじが引かれていないか、rival_id が設定されていません。");
						return;
					}

					// API からデータを取る処理
					const { userOmikuji, rivalOmikuji, result }
						= await fetch(`/api/battle?user_id=${encodeURIComponent(user_id as string)}&rival_id=${encodeURIComponent(rival_id as string)}`)
							.then(data => data.json());

					// 表示処理
					alert(`${result}！！\nあなた：${userOmikuji}\nライバル：${rivalOmikuji}`);

				}}>

					<input type="hidden" name="user_id" value={omikujiID || ""} />
					<input type="text" placeholder="rival_id" name="rival_id" />

				</form>

			</main>
		</div>
	);
}