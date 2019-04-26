(function() {
  window.wiggle = function(canvas, dataset, options) {
    var ctx = canvas.getContext("2d");
    var values = options.values;
    var valueFn = options.valueFn;

    var assetsLeft = 0;
    var onImageLoaded = function(){
      assetsLeft--;
    };

    var images = {};
    function addAsset(name,src){
      assetsLeft++;
      images[name] = new Image();
      images[name].onload = onImageLoaded;
      images[name].src = src;
    }
    // addAsset("mehTriangle","play/img/blue_triangle_yay.png");
    // addAsset("mehSquare","play/img/yellow_square_yay.png");

    dataset.forEach(function(dataPoint) {
      var img = window.datasets.imageUrlForDataPoint(dataPoint);
      addAsset(img, img);
    });

    function Swinger(){
      
      var self = this;
      
      self.swing = 0;
      self.baseRotation = 0;

      self.update = function(){

        // console.log('self.feeling', self.feeling);
        // var dx = .1; //(self.feeling === 'sad') ? 20 : 1;
        // var dy = .1; //(self.feeling === 'sad') ? 20 : 1;
        // var dx = 0;
        // var dy = 0;

        // var dx = Mouse.x - self.x;
        // var dy = Mouse.y - (self.y+250+SCROLL*0.5);
        // var dist = Math.sqrt(dx*dx+dy*dy);

        if (self.feeling === 'sad') {
          self.swing += 0.5;
        } else if (self.feeling === 'meh') {
          self.swing += 0.05;
        } else if (self.feeling === 'yay') {
          self.swing += 0.02;
        }
      };
      self.draw = function(ctx){

        ctx.save();
        
        ctx.translate(self.x,self.y);
        
        ctx.translate(0,20);
        ctx.rotate(self.baseRotation + Math.sin(self.swing)*Math.PI*0.05);
        ctx.translate(0,-20);

        ctx.drawImage(self.img,-30,-30,60,60);
        // if (self.feeling === 'sad') {
        //   ctx.font = '24px serif';
        //   ctx.fillText('!#?$', -50, 10);
        // }
        ctx.restore();

      };

    }

    // var swingers = [];
    // for(var i=0;i<1280;i+=50){

    //   var tt = (i-640)/640;
    //   var num;
    //   if(i>640){
    //     num = Math.ceil(tt*tt*4);
    //   }else{
    //     num = Math.ceil(tt*tt*7);
    //   }

    //   for(var j=0;j<num+1;j++){

    //     var x = i + Math.random()*20-10;
    //     var y = 220 - 170*Math.pow(t,2);

    //     if(i>640){
    //       y += j*50 + Math.random()*20-10;
    //     }else{
    //       y += j*30 + Math.random()*20-10;
    //     }

    //     if(x>500&&x<1280-500) continue;

    //     var t = (x-640)/640;

    //     var s = new Swinger();
    //     s.x = x;
    //     s.swing = x*0.1;
    //     s.y = y;
    //     s.baseRotation = (Math.random()*0.2-0.1);

    //     if(!isNaN(s.y)){
    //       swingers.push(s);
    //     }

    //   }

    // }

    // var s = new Swinger();
    // s.x = 640-30;
    // s.swing = s.x*0.1;
    // s.y = 210;
    // swingers.push(s);

    // var s = new Swinger();
    // s.x = 640+30;
    // s.swing = x*0.1;
    // s.y = 210;
    // swingers.push(s);

    var swingers = dataset.map(function(dataPoint, index) {
      var s = new Swinger();
      var xIndex = values.indexOf(valueFn(dataPoint));
      var columns = values.length;
      var columnWidth = ((1024 - 100)/columns);
      var xOffset = columnWidth * xIndex;

      s.x = 30 + columnWidth/2 + xOffset + Math.random()*60;
      s.y = (220 - 120*Math.random());
      s.swing = s.x*0.1 * (Math.random()*0.4);
      s.img = images[window.datasets.imageUrlForDataPoint(dataPoint)];
      s.feeling = dataPoint.feeling;
      return s;
    }); 

    swingers = swingers.sort(function(a,b){
      return a.y-b.y;
    });


    var SCROLL = 0;
    function render(){
      
      if(assetsLeft>0 || SCROLL>550) return;

      // Update
      for(var i=0;i<swingers.length;i++){
        swingers[i].update();
      }

      // Draw
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.save();
      ctx.translate(0,SCROLL*0.5);
      for(var i=0;i<swingers.length;i++){
        swingers[i].draw(ctx);
      }
      ctx.translate(0,0);
      values.forEach(function(value, columnIndex) {
        var columnWidth = ((1024 - 100)/values.length);
        var xOffset = columnWidth * columnIndex;
        var x = 60 + columnWidth/2 + xOffset;
        ctx.font = '20px sans-serif';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        console.log('fillText', value, x);
        ctx.fillText(value, x, 290);
      });
      ctx.restore();

    }

    ////////////////////
    // ANIMATION LOOP //
    ////////////////////
    window.requestAnimFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback){ window.setTimeout(callback, 1000/60); };
    (function animloop(){
      requestAnimFrame(animloop);
      render();
    })();
  }
})();