enum ActionKind {
    Walking,
    Idle,
    Jumping
}
function springen () {
    if (Mario.isHittingTile(CollisionDirection.Bottom)) {
        Mario.vy = -4 * PixelalsMeter
    } else if (doppelSpringenMoeglich) {
        doppelSpringenSpeed = -3 * PixelalsMeter
        if (Mario.vy >= -40) {
            doppelSpringenSpeed = -4.5 * PixelalsMeter
            Mario.startEffect(effects.trail, 500)
            scene.cameraShake(2, 250)
        }
        Mario.vy = doppelSpringenSpeed
        doppelSpringenMoeglich = false
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    springen()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    springen()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Mario.isHittingTile(CollisionDirection.Bottom))) {
        Mario.vy += 80
    }
})
// Noch nicht fertig
function AnimationFeinde () {
    Feinde = animation.createAnimation(ActionKind.Walking, 100)
    Feinde.addAnimationFrame(assets.image`Feind1`)
    Feinde.addAnimationFrame(assets.image`Feind2`)
}
function AnimationMuenzen () {
    Münze = animation.createAnimation(ActionKind.Idle, 200)
    Münze.addAnimationFrame(assets.image`Münze1`)
    Münze.addAnimationFrame(assets.image`Münze2`)
    Münze.addAnimationFrame(assets.image`Münze3`)
    Münze.addAnimationFrame(assets.image`Münze4`)
    Münze.addAnimationFrame(assets.image`Münze5`)
    Münze.addAnimationFrame(assets.image`Münze6`)
    Münze.addAnimationFrame(assets.image`Münze7`)
}
function erstelleSpieler (Spieler: Sprite) {
    Spieler.ay = Schwerkraft
    scene.cameraFollowSprite(Spieler)
    controller.moveSprite(Spieler, 10, 10)
    Spieler.z = 5
    info.setLife(3)
    info.setScore(0)
}
function Animationen () {
    AnimationMuenzen()
    AnimationFeinde()
}
let Münze: animation.Animation = null
let Feinde: animation.Animation = null
let doppelSpringenSpeed = 0
let doppelSpringenMoeglich = false
let PixelalsMeter = 0
let Schwerkraft = 0
let Mario: Sprite = null
Mario = sprites.create(assets.image`SuperMario`, SpriteKind.Player)
let Periode = 600
Schwerkraft = 9.81 * PixelalsMeter
scene.setBackgroundImage(assets.image`Hintergrund1`)
Animationen()
erstelleSpieler(Mario)
let LevelAnzahl = 5
let aktuellesLevel = 0
