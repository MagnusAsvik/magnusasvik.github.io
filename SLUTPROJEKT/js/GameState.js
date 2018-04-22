var Player;
var enemies;
var bulletTime = 0;
var bullet;
var hx,hy;
var counter = 0;
var enemiesTotal = 0;
var GameState = {
    
    create: function(){
        
        // Bakgrund, UI och reset counter
        game.stage.backgroundColor = '#FFFFFF'
        this.add.sprite(0,0,'BG1');
        this.add.sprite(5, 5, 'UI');
        counter = 0;
        
     
        // Skapa spelare, egenskaper och animation
        Player = this.add.sprite(100,100,'Smuz');
        Player.anchor.setTo(0.5);
        Player.animations.add('simma-h',[0,1,2,3,4,5,6],10,true);
        Player.animations.add('simma-v',[0,1,2,3,4,5,6],10,true);
        Player.animations.add('simma-u',[0,1,2,3,4,5,6],10,true);
        Player.animations.add('simma-ej',[6],10,true);
        this.physics.enable(Player,Phaser.Physics.ARCADE);
        Player.body.gravity.y = 600;
        Player.body.collideWorldBounds = true;
        
        
        // Skapar bulletgroup och physics
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        
        // Skapar bullets
        for (var i = 0; i < 20; i++) {
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
        
        
        // Fiender grupp och physics
        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE; 
        enemies.collideWorldBounds = true;
        game.time.events.loop(1000, this.createEnemy, this);
        enemiesTotal = 20;
        this.game.physics.arcade.collide(enemies);
},
    
    
    update: function() {
        
        // Kontroller och spela animation
        if (game.input.keyboard.isDown(Phaser.Keyboard.A)){
            Player.x -= 4;
            Player.animations.play('simma-v');
        }else if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
            Player.x += 4;
            Player.animations.play('simma-h');
        }if (game.input.keyboard.isDown(Phaser.Keyboard.W)){
            Player.y -= 4;
            Player.animations.play('simma-u');
            Player.body.velocity.y = 0;
        }else{
            Player.animations.add('simma-ej');
        }
        
        // Skjuta
        if (fireButton.isDown)
        {
        this.fireBullet();
        }
        
        // Kollision mellan fiender och bullets
        game.physics.arcade.overlap(bullets, enemies, this.collisionHandler, null, this);
    
},
    
    // Kollision och skapar vinst
    collisionHandler: function(bullet, enemy){
        
        bullet.kill();
        enemy.kill();
        counter++;
        console.log("KILL!" + counter);
        
        // Vinner om 20 döda
        if(counter >= 20){
            game.state.start('GameState2'); 
        }
},
    
    // Fiender slumpas och skapar förlust
    createEnemy: function() {

            hx = game.rnd.integerInRange(1279,1280);
            if(hx < 1280) hx=1280;
            var enemy = enemies.create(hx, game.rnd.integerInRange(50, 650), 'shark');
            enemy.anchor.setTo(0.5, 0.5);
            enemy.body.velocity.x = -400;
            enemy.checkWorldBounds = true;
            enemy.events.onOutOfBounds.add(function(){game.state.start('GameOver')},this);
            
},
    
    // Bullets egenskaper
    fireBullet: function(){
        if(game.time.now > bulletTime){
            bullet = bullets.getFirstExists(false);
                if(bullet){
                    bullet.reset(Player.x + 6, Player.y - 8);
                    bullet.body.velocity.x = 500;
                    bulletTime = game.time.now + 150;
                }   
        }
},
    
    // Reset bullets
    resetBullet: function(bullet) {
        bullet.kill();
},
    
    // Visar räknare och fiender
    render: function() {

    game.debug.text('Enemies: ' + counter + ' / ' + enemiesTotal, 15, 25);
    game.debug.text('Level: 1', 15, 45);

},
};