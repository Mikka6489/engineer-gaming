var omvers = Vars.mods.locateMod("obamium-mod");
var jmvers = Vars.mods.locateMod("jarate-mod");

const hexite = Item("engineer");

const phase = Vars.content.item("phase-fabric");

const autocannon = extend(ItemTurret, "autocannon", {});

const hexiteshot = extend(BasicBulletType, {
    damage: 1100,
    splashDamage: 150,
    splashDamageRadius: 11.2,
    buildingDamageMultiplier: 0.25,
    height: 16,
    width: 10,
    speed: 20,
    lifetime: 20,
    ammoMultiplier: 1,
    shootEffect: Fx.shootBig,
    smokeEffect: Fx.shootBigSmoke,
    hitEffect: Fx.explosion,
    knockback: 10,
    impact: true,
    pierceArmor: true,
    icendChance: 0.2,
    trailChance: 1,
    trailLength: 5,
});

const phaseshot = extend(BasicBulletType, {
    damage: 900,
    splashDamage: 250,
    splashDamageRadius: 18.4,
    buildingDamageMultiplier: 0.25,
    height: 16,
    width: 10,
    speed: 20,
    lifetime: 20,
    ammoMultiplier: 2,
    shootEffect: Fx.shootBig,
    smokeEffect: Fx.shootBigSmoke,
    hitEffect: Fx.explosion,
    knockback: 10,
    impact: true,
    pierceArmor: true,
    icendChance: 0.2,
    trailChance: 1,
    trailLength: 5,
});

const obamiumshot = extend(BasicBulletType, {
    damage: 1450,
    splashDamage: 250,
    splashDamageRadius: 18.4,
    buildingDamageMultiplier: 0.25,
    height: 16,
    width: 10,
    speed: 20,
    lifetime: 20,
    ammoMultiplier: 1,
    backColor: Color.valueOf("96C185ff"),
    trailColor: Color.valueOf("96C185ff"),
    shootEffect: Fx.shootBig,
    smokeEffect: Fx.shootBigSmoke,
    hitEffect: Fx.explosion,
    knockback: 10,
    impact: true,
    pierceArmor: true,
    icendChance: 0.2,
    trailChance: 1,
    trailLength: 5,
});

const jarateshot = extend(BasicBulletType, {
    damage: 750,
    splashDamage: 150,
    splashDamageRadius: 25.6,
    buildingDamageMultiplier: 0.25,
    height: 16,
    width: 10,
    speed: 20,
    lifetime: 20,
    ammoMultiplier: 1,
    backColor: Color.valueOf("ffe483ff"),
    trailColor: Color.valueOf("ffe483ff"),
    shootEffect: Fx.shootBig,
    smokeEffect: Fx.shootBigSmoke,
    hitEffect: Fx.explosion,
    knockback: 10,
    impact: true,
    pierceArmor: true,
    icendChance: 0.2,
    trailChance: 1,
    trailLength: 5,
});

if (omvers == null) {
    if (jmvers == null) {
        Log.info("Engineer Gaming - Obamium Mod not loaded");
        Log.info("Engineer Gaming - Jarate Mod not loaded");
        autocannon.ammo(
            hexite, hexiteshot,
            phase, phaseshot,
        );
    } else {
        Log.info("Engineer Gaming - Obamium Mod not loaded");
        Log.info("Engineer Daming detected Jarate Mod at " + jmvers);
        const jarate = Vars.content.item("jarate-mod-jarate");
        autocannon.ammo(
            jarate, jarateshot,
            hexite, hexiteshot,
            phase, phaseshot,
        );
    }
} else {
    if (jmvers == null) {
        Log.info("Engineer Daming detected Obamium mod at " + omvers);
        Log.info("Engineer Gaming - Jarate Mod not loaded");
        const obamium = Vars.content.item("obamium-mod-Obamium");
        autocannon.ammo(
            obamium, obamiumshot,
            hexite, hexiteshot,
            phase, phaseshot,
        );
    } else {
        Log.info("Engineer Daming detected Obamium mod at " + omvers);
        Log.info("Engineer Daming detected Jarate Mod at " + jmvers);
        const obamium = Vars.content.item("obamium-mod-Obamium");
        const jarate = Vars.content.item("jarate-mod-jarate");
        autocannon.ammo(
            jarate, jarateshot,
            obamium, obamiumshot,
            hexite, hexiteshot,
            phase, phaseshot,
        );
    }
}