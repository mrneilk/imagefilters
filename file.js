var image1=null;
var imagec1;
var image2=null;
var imagec1;
var final;
function uploadim()
{
  imagec1 = document.getElementById("c1");
  var inputf = document.getElementById("im");
  image1 = new SimpleImage(inputf);
  image1.drawTo(imagec1);
}
function resetim()
{
   if(image1==null || ! image1.complete())
    {
      alert("image not loaded");
      return;
    }
  else
    {
      uploadim();
    }
}
function makegray()
{
  if(image1==null || ! image1.complete())
    {
      alert("image not loaded");
      return;
    }
  else
    {  
       var output = image1;
  for(var pixel of output.values())
    {
     var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
       final=output;
      final.drawTo(imagec1);
    }
  
}//end of make gray scale fn
function makered()
{
  if(image1==null || ! image1.complete())
    {
      alert("image not loaded");
      return;
    }
  else
    {  
       var output = image1;
  for(var pixel of output.values())
    {var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
     if(avg<128)
       {
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
       }
     else
       {
         pixel.setRed(255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(2*avg-255);
       }
    }
       final=output;
      final.drawTo(imagec1);
    }
  
}//end of make red function
function makerb()
{
  if(image1==null || ! image1.complete())
    {
      alert("image not loaded");
      return;
    }
  else
    {  
       var output = image1;
  for(var pixel of output.values())
    {
        var x = pixel.getX();
        var y = output.getWidth();
       
      if(x<(y/7))
           {   
              var avg2= (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
              if(avg2<128)
               {
                 pixel.setRed(2*avg2);
                pixel.setGreen(0);
                pixel.setBlue(0);
               }
            else
              {
                    pixel.setRed(255);
                     pixel.setGreen(2*avg2-255);
                      pixel.setBlue(2*avg2-255);
                }
            }
      else if(x>(y/7) && x<((y*2)/7))
              {  var avg3= (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
                  if(avg3<128)
                     { pixel.setRed(2*avg3);
                      pixel.setGreen(0.8*avg3);
                      pixel.setBlue(0);
                     }
                   else
                     {
                       pixel.setRed(255);
                     pixel.setGreen(1.2*avg3-51);
                      pixel.setBlue(2*avg3-255);
                     }
              }
        else if(x>((y*2)/7) && x<((y*3)/7))
              {  
                 var avg4= (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
                  if(avg4<128)
                     { pixel.setRed(2*avg4);
                      pixel.setGreen(2*avg4);
                      pixel.setBlue(0);
                     }
                   else
                     {
                       pixel.setRed(255);
                     pixel.setGreen(255);
                      pixel.setBlue(2*avg4-255);
                     }
              }
       else if(x>((y*3)/7) && x<((y*4)/7))
              {
                 var avg5= (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
                  if(avg5<128)
                     { pixel.setRed(0);
                      pixel.setGreen(2*avg5);
                      pixel.setBlue(0);
                     }
                   else
                     {
                       pixel.setRed(2*avg5-255);
                     pixel.setGreen(255);
                      pixel.setBlue(2*avg5-255);
                     }
              }
       else if(x>((y*4)/7) && x<((y*5)/7))
              {
                 var avg6= (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
                  if(avg6<128)
                     { pixel.setRed(0);
                      pixel.setGreen(0);
                      pixel.setBlue(2*avg6);
                     }
                   else
                     {
                       pixel.setRed(2*avg6-255);
                     pixel.setGreen(2*avg6-255);
                      pixel.setBlue(255);
                     }
              }
       else if(x>((y*5)/7) && x<((y*6)/7))
              {
                   var avg7= (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
                  if(avg7<128)
                     { pixel.setRed(0.8*avg7);
                      pixel.setGreen(0);
                      pixel.setBlue(2*avg7);
                     }
                   else
                     {
                       pixel.setRed(1.2*avg7-51);
                     pixel.setGreen(2*avg7-255);
                      pixel.setBlue(255);
                     }
              }
       else
              {
                  var avg8= (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
                  if(avg8<128)
                     { pixel.setRed(1.6*avg8);
                      pixel.setGreen(0);
                      pixel.setBlue(1.6*avg8);
                     }
                   else
                     {
                       pixel.setRed(0.4*avg8+153);
                     pixel.setGreen(2*avg8-255);
                      pixel.setBlue(0.4*avg8+153);
                     }
 
              }
    }
       final=output;
      final.drawTo(imagec1);
  }
  
}//end of make rainbow filter
function makebl()
{
  if(image1==null || ! image1.complete())
    {
      alert("image not loaded");
      return;
    }
  else
    {  
      
      function ensureInImage (coordinate, size) {
    // coordinate cannot be negative
    if (coordinate < 0) {
        return 0;
    }
    // coordinate must be in range [0 .. size-1]
    if (coordinate >= size) {
        return size - 1;
    }
    return coordinate;
}

function getPixelNearby (image3, x, y, diameter) {
    var dx = Math.random() * diameter - diameter / 2;
    var dy = Math.random() * diameter - diameter / 2;
    var nx = ensureInImage(x + dx, image3.getWidth());
    var ny = ensureInImage(y + dy, image3.getHeight());
    return image3.getPixel(nx, ny);
}

       var output = image1;
      var output2 = image1;
  for(var pixel of output.values())
    {
      var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() > 0.5) {
        var other = getPixelNearby(output2, x, y, 30);
        output.setPixel(x, y, other);
    }
    else {
        output.setPixel(x, y, pixel);
    }
    }
       final=output;
      final.drawTo(imagec1);
    }
  
}//end of make blur function
function makein()
{
  if(image1==null || ! image1.complete())
    {
      alert("image not loaded");
      return;
    }
  else
    {  
       var output = image1;
  for(var pixel of output.values())
    {
      var i = pixel.getRed();
       var j = pixel.getBlue();
       var k = pixel.getGreen();
      pixel.setRed(255-i);
      pixel.setBlue(255-j);
      pixel.setGreen(255-k);
      
    }
       final=output;
      final.drawTo(imagec1);
    }
  
}//end of make invert fn
function clearcanvas() {
  doClear(imagec1);
}
function doClear(canvas) {
  var context = canvas.getContext("2d");
context.clearRect(0,0,canvas.width,canvas.height);
}
