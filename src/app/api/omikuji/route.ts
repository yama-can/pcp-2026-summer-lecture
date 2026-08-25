/* eslint-disable @typescript-eslint/no-unused-vars */

import { omikujiHistory } from "@/lib/memory";
import { randomOmikuji } from "@/lib/omikuji";
import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

export function GET() {

	// ======================================
	// ランダムなおみくじを返すロジックを書く
	// ======================================

	const omikuji = "";

	return NextResponse.json({
		// JSON を書こう！
	});

	// ======================================

}
