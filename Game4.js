BasicGame.Game4=function(){this.game,this.add,this.camera,this.cache,this.input,this.load,this.math,this.sound,this.stage,this.time,this.tweens,this.state,this.world,this.particles,this.physics,this.rnd},BasicGame.Game4.prototype={preload:function(){this.load.image("background","assets/background4.png"),this.load.image("p1","assets/p1c.png"),this.load.image("p2","assets/p2c.png"),this.load.image("blackhole","assets/blackhole.png"),this.game.time.advancedTiming=!0},create:function(){this.game.add.sprite(0,0,"background"),p2=this.game.add.sprite(5,5,"p1"),p1=this.game.add.sprite(675,675,"p2"),blackhole=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"blackhole"),blackhole.x=this.game.world.centerX,blackhole.y=this.game.world.centerY,blackhole.anchor.setTo(.5,.5),this.game.physics.enable(p1,Phaser.Physics.ARCADE),this.game.physics.enable(p2,Phaser.Physics.ARCADE),this.game.physics.enable(blackhole,Phaser.Physics.ARCADE),p1.body.collideWorldBounds=!0,p2.body.collideWorldBounds=!0,p1.body.height=19,p1.body.width=19,p2.body.height=19,p2.body.width=19,blackhole.body.height=123,blackhole.body.width=123,blackhole.body.radius=61,upKey=this.game.input.keyboard.addKey(Phaser.Keyboard.UP),downKey=this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),leftKey=this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),rightKey=this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),upKey2=this.game.input.keyboard.addKey(Phaser.Keyboard.W),downKey2=this.game.input.keyboard.addKey(Phaser.Keyboard.S),leftKey2=this.game.input.keyboard.addKey(Phaser.Keyboard.A),rightKey2=this.game.input.keyboard.addKey(Phaser.Keyboard.D),this.game.physics.startSystem(Phaser.Physics.P2JS),this.game.physics.p2.enable(this.square)},update:function(){blackhole.angle++,blackhole.scale.setTo(Math.sin(.004*this.game.time.now)+3),upKey.isDown?p1.y--:downKey.isDown&&p1.y++,leftKey.isDown?p1.x--:rightKey.isDown&&p1.x++,upKey2.isDown?p2.y--:downKey2.isDown&&p2.y++,leftKey2.isDown?p2.x--:rightKey2.isDown&&p2.x++,this.game.physics.arcade.overlap(p1,p2)&&this.state.start("Game5"),this.game.physics.arcade.overlap(p1,blackhole)&&this.state.start("Lose"),this.game.physics.arcade.overlap(p2,blackhole)&&this.state.start("Lose")},quitGame:function(){this.state.start("MainMenu")}};