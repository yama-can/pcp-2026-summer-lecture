import { omikujiHistory } from "@/lib/memory";
import { randomOmikuji } from "@/lib/omikuji";
import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

export function GET() {

	const omikujiID = randomUUID();
	const omikujiResult = randomOmikuji();

	omikujiHistory.set(omikujiID, omikujiResult);

	return NextResponse.json({ omikuji: omikujiResult, omikujiID });

}
