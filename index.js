// The "Senses" enum
var Senses;
(function (Senses) {
    Senses["DETECT"] = "Wisdom (Perception check)";
    Senses["DARK_VISION"] = "See in the dark";
})(Senses || (Senses = {}));
// An array of the "Dragon" objects
var dragons = [
    {
        name: "Adult Bronze Dragon",
        size: "Huge",
        species: "Dragon",
        alignment: "Lawful Good",
        AC: 19,
        HP: 212,
        languages: ["Draconic", "Common"],
        CR: 15,
        senses: Senses.DETECT,
        skills: "Insight +7, Perception +12, Stealth +5",
        meleeAttacks: ["bite", "claws", "tail"]
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
        senses: Senses.DETECT,
        skills: "Perception +13, Stealth +6",
        meleeAttacks: ["bite", "claws", "tail"]
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
        senses: Senses.DETECT,
        skills: "Arcana +8, History +8, Perception +11, Stealth +5",
        meleeAttacks: ["bite", "claws", "tail"]
    },
];
// returns a value of the type "boolean" only
function topDragonCheck() {
    var speciesCheck = false;
    if (dragons[0].species === "Dragon") {
        return (speciesCheck = true);
    }
    return speciesCheck;
}
console.log("Here be some DRAGONS! ", dragons);
console.log("Is the first dragon a dragon? ", topDragonCheck());
