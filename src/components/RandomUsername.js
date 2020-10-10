
export default function RandomUsername() {
    
        const adjectives = [
            "Shallow",
            "Unbreakable",
            "Onerous",
            "Vigorous",
            "Enthusiastic",
            "Actually",
            "Full",
            "Foamy",
            "Icy",
            "Aboard",
            "Painful",
            "Gleaming",
            "Aback",
            "Fine",
            "Global",
            "Delicious",
            "Smooth",
            "Strict",
            "Teeny",
            "Desperate",
            "Infamous",
            "Uptight",
            "Hungry",
            "Amped",
            "Witty",
            "Living",
            "Deadpan",
            "Easy",
            "Bent",
            "Near",
        ];

        const nouns = [
            "Writer",
            "Message",
            "Appearance",
            "Hospital",
            "Independence",
            "Teaching",
            "Garbage",
            "Comparison",
            "Fortune",
            "Gate",
            "Management",
            "Resource",
            "Bathroom",
            "Payment",
            "Disaster",
            "Currency",
            "Role",
            "Sample",
            "Tennis",
            "Law",
            "Growth",
            "Buyer",
            "Administration",
            "Photo",
            "Instance",
            "Contract",
            "Employer",
            "Hall",
            "Debt",
            "Performance"
        ];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + " " + noun;
}

  

