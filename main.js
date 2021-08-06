var canvas = new fabric.Canvas('minecraftCanvas');
var blockIMGWidth = 30;
var blockIMGHeight = 30;
var playerX = 10;
var playerY = 10
var playerObject = '';
var playerBlock = '';
function playerUpdate(){
    fabric.Image.fromURL('player.png', function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top:playerY, left:playerX
        });
        canvas.add(playerObject);
    })
}