/* eslint-disable @typescript-eslint/no-unused-vars */

import { omikujiHistory } from "@/lib/memory";
import { omikujiIndex } from "@/lib/omikuji";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {

	const userId = req.nextUrl.searchParams.get("user_id");
	const rivalId = req.nextUrl.searchParams.get("rival_id");

	if (!userId || !rivalId) {

		return NextResponse.json({ error: "user_id、rival_id がありません" }, { status: 400 });

	}

	// ======================================
	// omikujiHistory からユーザーのおみくじを取得するコードを書く
	// ======================================

	const userOmikuji = "";
	const rivalOmikuji = "";

	// ======================================

	if(!userOmikuji || !rivalOmikuji) {

		return NextResponse.json({ error: "対象のおみくじがありません" }, { status: 400 });

	}

	const userOmikujiIndex = omikujiIndex(userOmikuji);
	const rivalOmikujiIndex = omikujiIndex(rivalOmikuji);

	const result = userOmikujiIndex > rivalOmikujiIndex ? "負け" : userOmikujiIndex < rivalOmikujiIndex ? "勝ち" : "引き分け";

	return NextResponse.json({ userOmikuji, rivalOmikuji, result });

}
