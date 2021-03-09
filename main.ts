enum ActionKind {
    Walking,
    Idle,
    Jumping
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
function Animationen () {
    AnimationMuenzen()
}
let Münze: animation.Animation = null
let PixelalsMeter = 0
let Mario = sprites.create(assets.image`SuperMario`, SpriteKind.Player)
let Periode = 600
let Schwerkraft = 9.81 * PixelalsMeter
scene.setBackgroundImage(assets.image`Hintergrund1`)
Animationen()
