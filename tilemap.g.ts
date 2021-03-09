// Automatisch generierter Code. Nicht bearbeiten.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level1":
            case "Level1":return tiles.createTilemap(hex`20000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000060004040400060000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000060000000400000000000400000000000000000000000400000000000000000004000000040000040000040000000400060004000600040000000005000102020202020202020202020202020202020202020202020202020202020203`, img`
................................
................................
................................
................................
................................
.........222....................
................................
.......2.....2...........2......
...2...2..2..2...2...2...2......
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.builtin.brick,myTiles.tile1,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Zielfahne":
            case "tile1":return tile1;
            case "Münze":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Automatisch generierter Code. Nicht bearbeiten.
