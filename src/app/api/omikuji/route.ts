import { NextResponse } from "next/server";

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

	return NextResponse.json({ omikuji: randomOmikuji() });

}
