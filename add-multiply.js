function woodCalculator(chairQty, tableQty, bedQty) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWoodQty = chairQty * perChairWood;
    const tableWoodQty = tableQty * perTableWood;
    const bedWoodQty = bedQty * perBedWood;

    const totalWood = chairWoodQty + tableWoodQty + bedWoodQty;
    return totalWood;
}

const firstOption = woodCalculator(1, 2, 1);
console.log(firstOption);
const secondOption = woodCalculator(6, 1, 1);
console.log(secondOption);