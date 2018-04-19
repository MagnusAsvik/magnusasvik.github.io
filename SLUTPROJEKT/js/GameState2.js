
var GameState2 = {
    
    create: function(){
        game.stage.backgroundColor = '#FFFFFF'
        this.add.sprite(0,0,'BG1');
        this.add.sprite(5, 5, 'UI');
        counter = 0;
    
        //  Player1
        Player = this.add.sprite(100,100,'Smuz');
        Player.anchor.setTo(0.5);
        Player.animations.add('simma-h',[0,1,2,3,4,5,6],10,true);
        Player.animations.add('simma-v',[0,1,2,3,4,5,6],10,true);
        Player.animations.add('simma-u',[0,1,2,3,4,5,6],10,true);
        //Player.animations.add('simma-n',[0,1,2,3,4,5,6],10,true);
        Player.animations.add('simma-ej',[6],10,true);
        this.physics.enable(Player,Phaser.Physics.ARCADE);
        Player.body.gravity.y = 600;
        Player.body.collideWorldBounds = true;
        
        
        // Skapar vapen
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        
        
        for (var i = 0; i < 40; i++)
            {
            var b = bullets.create(0, 0, 'bullets');
            b.name = 'bullet' + i;
            b.exists = false;
            b.visible = false;
            b.checkWorldBounds = true;
            b.events.onOutOfBounds.add(this.resetBullet, this);
}
        
        // Användare input
        cursors = this.input.keyboard.createCursorKeys();
        fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
        
        
        // Fiender
        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE; 
        enemies.collideWorldBounds = true;
        game.time.events.loop(1000, this.createEnemy, this);
        enemiesTotal = 40;
        this.game.physics.arcade.collide(enemies);
},
    
    // Kontroller
    update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.A)){
            Player.x -= 4;
            Player.animations.play('simma-v');
            
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
            Player.x += 4;
            Player.animations.play('simma-h');
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.W)){
        Player.y -= 4;
        Player.animations.play('simma-u');
        Player.body.velocity.y = 0;
    }
    else{
        Player.animations.add('simma-ej');
    }
      
    if (fireButton.isDown)
    {
        this.fireBullet();
    }
    console.log();
        
    game.physics.arcade.overlap(bullets, enemies, this.collisionHandler, null, this);
    
},
    
    // Kollision
    collisionHandler: function(bullet, enemy){
        
        bullet.kill();
        enemy.kill();
        counter++;
        console.log("KILL!" + counter);
        if(counter >= 40){
            game.time.events.stop();
            game.state.start('GameState2');
            
        }
    },
    
        // Fiender slumpas
    createEnemy: function() {

            hx = game.rnd.integerInRange(1279,1280);
            if(hx < 1280) hx=1280;
            var enemy = enemies.create(hx, game.rnd.integerInRange(50, 650), 'shark');
            enemy.anchor.setTo(0.5, 0.5);
            enemy.body.velocity.x = -600;
            enemy.checkWorldBounds = true;
            enemy.events.onOutOfBounds.add(function(){game.state.start('GameOver')},this);
            
},
    
    // Vapen egenskaper
    fireBullet: function(){
        if(game.time.now > bulletTime)
        {
            bullet = bullets.getFirstExists(false);
                
            if(bullet)
            {
                bullet.reset(Player.x + 6, Player.y - 8);
                bullet.body.velocity.x = 800;
                bulletTime = game.time.now + 150;
            }
        }
    },
    
    // Reset vapen
    resetBullet: function(bullet) {
        bullet.kill();
    },
    
    // Räknar fiender
    render: function() {

    // game.debug.text('Active Bullets: ' + bullets.countLiving() + ' / ' + bullets.length, 32, 32);
    game.debug.text('Enemies: ' + counter + ' / ' + enemiesTotal, 15
                    , 25);
    game.debug.text('Level: 2', 15, 45);

    }
};