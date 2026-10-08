$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(40, 200, 100, 15, "yellow");
  createPlatform(220, 320, 100, 15, "teal"); 
  createPlatform(420, 200, 100, 15, "red");
  createPlatform(750, 500, 100, 15, "blue"); 
  createFakePlatform(1000, 600, 100, 15, "pink");  
  createPlatform(1280, 500, 250, 15, "black"); 
  createBadPlatform(600, 350, 100, 15, "white");



    // TODO 3 - Create Collectables
  createCollectable("steve", 750, 300, 0, 0);
  createCollectable("max", 250, 270, 0, 0);
  createCollectable("diamond", 1350, 450, 0, 0);
    
    // TODO 4 - Create Cannons
  createCannon("bottom", 300, 500);
  createCannon("top", 1200, 900);
  createCannon("left", 650, 300);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});





