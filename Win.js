BasicGame.Win=function(){this.game,this.add,this.camera,this.cache,this.input,this.load,this.math,this.sound,this.stage,this.time,this.tweens,this.state,this.world,this.particles,this.physics,this.rnd},BasicGame.Win.prototype={preload:function(){this.load.image("background","assets/WINNER.png")},create:function(){this.game.add.sprite(0,0,"background"),$("#winner").css("display","block"),$(".prizes").click(function(){$("#rickprize").css("display","block")})}};