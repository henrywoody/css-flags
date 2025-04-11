export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export function toHeadingLevel(level: number) {
	return clamp(1, level, 6) as HeadingLevel;
}

function clamp(min: number, val: number, max: number) {
	return Math.min(Math.max(val, min), max);
}
