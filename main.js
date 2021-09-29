var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_object_width = 30;
block_object_height = 30;

player_image = "" ;
player_object = "" ;


function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img)
     {
    player_object = Img;

    player_object.scaleToWidth(block_object_width);
    player_object.scaleToHeight(block_object_height);

    
    player_object.set({
    top:player_y,
    left:player_x
    });

    canvas.add(player_object);

    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
  keypressed = e.keyCode ;
  console.log(keypressed);
  if(e.shiftKey == true && keypressed == '80')
  {
      block_object_width =  block_object_width+10 ;
      block_object_height = block_object_height+10 ;
      document.getElementById("current_width").innerHTML = block_object_width ;
      document.getElementById("current_height").innerHTML = block_object_height ;
  }

  if(e.shiftKey == true && keypressed == '77')
  {
      block_object_width = block_object_width-10 ; 
      block_object_height = block_object_height-10 ;
      document.getElementById("current_width").innerHTML = block_object_width ;
      document.getElementById("current_height").innerHTML = block_object_height ;
  }

if(keypressed == '49') {
    new_image('IRON MAN.jpg');
}
if(keypressed == '50') {
    player_x = player_x + 50 ;
    new_image('cap.jpg');
}
if(keypressed == '51') {
    player_x = player_x + 50 ;
    new_image('thor.jpg');
}
if(keypressed == '52') {
    player_x = player_x + 50 ;
    new_image('hulk.jpg');
}
if(keypressed == '53') {
    player_x = player_x + 50 ;
    new_image('iron spider.jpg');
}
if(keypressed == '54') {
    player_x = player_x + 50 ;
    new_image('dr strange.jpg');
}
if(keypressed == '55') {
    player_x = player_x + 50 ;
    new_image('black panther.jpg');
}
if(keypressed == '56') {
    player_x = player_x + 50 ;
    new_image('ant man.jpg');
}
}