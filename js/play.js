/**
 * Credit the source:
 * 
 *  Title: <Fire Rate>
 *  Author: <photonstorm>
 *  Date: <3 Jun 2016>
 *  Code version: <2.10.0>
 *  Availability: <http://phaser.io/examples/v2/weapon/fire-rate>
 *  
 *  Title: <Starstruck>
 *  Author: <photonstorm>
 *  Date: <9 Apr 2014>
 *  Code version: <2.10.0>
 *  Availability: <http://phaser.io/examples/v2/games/starstruck>
 *    
 *  Title: <Defender>
 *  Author: <photonstorm>
 *  Date: <15 Apr 2016>
 *  Code version: <2.10.0>
 *  Availability: <http://phaser.io/examples/v2/games/defender>
 *  
 */


var playState = {
		
		
    create: function () {
        
        this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player1');
       
        game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.anchor.setTo(0.2, 0.2);
        this.player.scale.setTo(1, 1);
        
       // this.player.animations.add('run');   wait for image
       // this.player.animations.play('run', 10, true);   wait for image
       
       //game.camera.follow(this.player);  //wait for big map
      
       // fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.player.body.collideWorldBounds = true;
        
       
        
        this.handgun = game.add.weapon(7, 'bullet');    // ammo 7 
        this.handgun.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        this.handgun.bulletAngleOffset = 90;
        this.handgun.bulletSpeed = 400;
        //sprite = this.add.sprite(250, 250, 'player1');  //???
        game.physics.arcade.enable(this.player);
         this.handgun.trackSprite(this.player, 14, 0);   
        
        fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    },

    update: function () {
    	
    	
    	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
    		this.player.x -= 4;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        	this.player.x += 4;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        	this.player.y -= 4;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
        	this.player.y += 4;
        }
        
        if (fireButton.isDown){
            this.handgun.fire();
        }

    }

};

function render() {
    game.debug.spriteInfo(player, 20, 32);
    this.handgun.debug();
 
}