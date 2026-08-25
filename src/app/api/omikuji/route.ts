import { omikujiHistory } from "@/lib/memory";
import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

const OMIKUJI_TYPES = [
	"大吉",
	"中吉",
	"小吉",
	"吉",
	"末吉",
	"凶",
	"大凶"
] as const;

function randomOmikuji() {
	const randomIndex = Math.floor(Math.random() * OMIKUJI_TYPES.length);
	return OMIKUJI_TYPES[randomIndex];
}

export function GET() {

	const omikujiID = randomUUID();
	const omikujiResult = randomOmikuji();

	omikujiHistory.set(omikujiID, omikujiResult);

	return NextResponse.json({ omikuji: omikujiResult, omikujiID });

}
