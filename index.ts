type Alignments =
	| "Lawful Good"
	| "Neurtal Good"
	| "Chaotic Good"
	| "Lawful Neutral"
	| "True Neutral"
	| "Chaotic Neutral"
	| "Lawful Evil"
	| "Neutral Evil"
	| "Chaotic Evil";

const detect = "The dragon makes a Wisdom (Perception) check.";
const darkVision = "Can see in the dark, or something.";
enum Senses {
	detect,
	darkVision,
}

interface Dragon {
	name: string;
	size: string;
	species: string;
	alignment: Alignments;
	AC: number;
	HP: number;
	languages: string[];
	CR: number;
	senses: Senses.detect;
	skills: number | string;
	meleeAttacks: [string, string, string];
}

const dragons: Dragon[] = [
	{
		name: "Adult Bronze Dragon",
		size: "Huge",
		species: "Dragon",
		alignment: "Lawful Good",
		AC: 19,
		HP: 212,
		languages: ["Draconic", "Common"],
		CR: 15,
		senses: Senses.detect,
		skills: "Insight +7, Perception +12, Stealth +5",
		meleeAttacks: ["bite", "claws", "tail"],
	},
	{
		name: "Adult Red Dragon",
		size: "Huge",
		species: "Dragon",
		alignment: "Chaotic Evil",
		AC: 19,
		HP: 256,
		languages: ["Draconic", "Common"],
		CR: 17,
		senses: Senses.detect,
		skills: "Perception +13, Stealth +6",
		meleeAttacks: ["bite", "claws", "tail"],
	},
	{
		name: "Adult Silver Dragon",
		size: "Huge",
		species: "Dragon",
		alignment: "Lawful Good",
		AC: 19,
		HP: 243,
		languages: ["Draconic", "Common"],
		CR: 16,
		senses: Senses.detect,
		skills: "Arcana +8, History +8, Perception +11, Stealth +5",
		meleeAttacks: ["bite", "claws", "tail"],
	},
];
