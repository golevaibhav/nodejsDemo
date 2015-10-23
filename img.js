var lwip = require('lwip');
lwip.open('image.jpg', function(err, image){

  image.scale(0.5, function(err, image){

    image.rotate(90, 'white', function(err, image){
      
        image.writeFile('output.jpg', function(err){
              console.log("done");
            });
      });

  });

});
