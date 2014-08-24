
BasicGame.Game = function (game) {

  //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;    //  a reference to the currently running game
    this.add;   //  used to add sprites, text, groups, etc
    this.camera;  //  a reference to the game camera
    this.cache;   //  the game cache
    this.input;   //  the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;    //  for preloading assets
    this.math;    //  lots of useful common math operations
    this.sound;   //  the sound manager - add a sound, play one, set-up markers, etc
    this.stage;   //  the game stage
    this.time;    //  the clock
    this.tweens;    //  the tween manager
    this.state;     //  the state manager
    this.world;   //  the game world
    this.particles; //  the particle manager
    this.physics; //  the physics manager
    this.rnd;   //  the repeatable random number generator

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

  preload: function () {

    this.load.image('background', 'assets/background.png');
    this.load.image('p1', 'assets/p1.png');
    this.load.image('p2', 'assets/p2.png');
    this.load.image('blackhole', 'assets/blackhole.png');

    this.game.time.advancedTiming = true;

  },

  create: function () {

    this.game.add.sprite(0, 0, 'background');

      p2 = this.game.add.sprite(5, 5, 'p1');

      p1 = this.game.add.sprite(675, 675, 'p2'); 


      blackhole = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'blackhole');

      blackhole.x = this.game.world.centerX;
      blackhole.y = this.game.world.centerY;

      blackhole.anchor.setTo(0.5, 0.5);


      this.game.physics.enable(p1, Phaser.Physics.ARCADE);
      this.game.physics.enable(p2, Phaser.Physics.ARCADE);
      this.game.physics.enable(blackhole, Phaser.Physics.ARCADE);

      p1.body.collideWorldBounds = true;
      p2.body.collideWorldBounds = true;

      p1.body.height = 19;
      p1.body.width = 19;

      p2.body.height = 19;
      p2.body.width = 19;

      p1.anchor.setTo(0.5, 0.5);

      blackhole.body.height = 123;
      blackhole.body.width = 123;
      blackhole.body.radius = 61;
      
    

      upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
      downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
      leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
      rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

      upKey2 = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
      downKey2 = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
      leftKey2 = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
      rightKey2 = this.game.input.keyboard.addKey(Phaser.Keyboard.D);

      this.game.physics.startSystem(Phaser.Physics.P2JS);    
      this.game.physics.p2.enable(this.square);

  },

  update: function () {

    p1.body.moves = true;
    p2.body.moves = true;

    blackhole.angle++;
      // this.square2.angle--;

      
      blackhole.scale.setTo(Math.sin(this.game.time.now * 0.001) + 2);
      // this.square2.scale.setTo(Math.sin(game.time.now * 0.001) + 2);

      if (upKey.isDown)
      {
          p1.y--;
          p1.body.angularAcceleration = 300;
      }
      else if (downKey.isDown)
      {
          p1.y++;
      }

      if (leftKey.isDown)
      {
          p1.x--;
      }
      else if (rightKey.isDown)
      {
          p1.x++;
      }

      if (upKey2.isDown)
      {
          p2.y--;
      }
      else if (downKey2.isDown)
      {
          p2.y++;
      }

      if (leftKey2.isDown)
      {
          p2.x--;
      }
      else if (rightKey2.isDown)
      {
          p2.x++;
      }


      if (this.game.physics.arcade.overlap(p1, p2)) {
        this.state.start('Game2');
      }

      if (this.game.physics.arcade.overlap(p1, blackhole)) {
        this.state.start('Lose');
      }

      if (this.game.physics.arcade.overlap(p2, blackhole)) {
        this.state.start('Lose');
      }


  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('Game2');

  }

};
