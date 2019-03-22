
var happyImgs = ["play/img/blue_square_yay.png", "play/img/green_square_yay.png",
"play/img/pink_square_yay.png", "play/img/yellow_square_yay.png", "play/img/liblue_square_yay.png",
"play/img/blue_triangle_yay.png", "play/img/green_triangle_yay.png",
"play/img/pink_triangle_yay.png", "play/img/yellow_triangle_yay.png",
"play/img/liblue_triangle_yay.png"];

var blinkImgs = ["play/img/blue_square_yay_blink.png", "play/img/green_square_yay_blink.png",
"play/img/pink_square_yay_blink.png", "play/img/yellow_square_yay_blink.png", "play/img/liblue_square_yay_blink.png",
"play/img/blue_triangle_yay_blink.png", "play/img/green_triangle_yay_blink.png",
"play/img/pink_triangle_yay_blink.png", "play/img/yellow_triangle_yay_blink.png",
"play/img/liblue_triangle_yay_blink.png"];

var sadImgs = ["play/img/blue_square_sad.png", "play/img/green_square_sad.png",
"play/img/pink_square_sad.png", "play/img/yellow_square_sad.png", "play/img/liblue_square_sad.png",
"play/img/blue_triangle_sad.png", "play/img/green_triangle_sad.png",
"play/img/pink_triangle_sad.png", "play/img/yellow_triangle_sad.png",
"play/img/liblue_triangle_sad.png"];

var mehImgs = ["play/img/blue_square_meh.png", "play/img/green_square_meh.png",
"play/img/pink_square_meh.png", "play/img/yellow_square_meh.png", "play/img/liblue_square_meh.png",
"play/img/blue_triangle_meh.png", "play/img/green_triangle_meh.png",
"play/img/pink_triangle_meh.png", "play/img/yellow_triangle_meh.png",
"play/img/liblue_triangle_meh.png"];

function displayRandomHappy(){
    var num = Math.floor(Math.random() * 9);  // 0...10
    document.canvas.src = happyImgs[num];
}

function displayRandomBlink(){
    var num = Math.floor(Math.random() * 9); // 0...10
    document.canvas.src = blinkImgs[num];
}

function displayRandomSad(){
    var num = Math.floor(Math.random() * 9); // 0...10
    document.canvas.src = sadImgs[num];
}

function displayRandomMeh(){
    var num = Math.floor(Math.random() * 9); // 0...10
    document.canvas.src = mehImgs[num];
}
