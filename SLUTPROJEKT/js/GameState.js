var Player;
var enemies;
var rip = 0;
var bloodsplat;
var bulletTime = 0;
var bullet;
var hx,hy;
var enemiesTotal = 0;
var enemiesAlive = 0;
var GameState = {
    preload: function(){
        this.load.image('BG1','assets/BG1.png');
        this.load.spritesheet('Smuz','assets/Smuz_Sprite.png',100,120);
        this.load.image('shark','assets/Shark1.png',100,100);
        this.load.spritesheet('bullets','assets/bullet1.png',20,20);
        this.load.spritesheet('blood','assets/blood.png',350,350);
    },
    create: function(){
        game.stage.backgroundColor = '#FFFFFF'
        this.add.sprite(0,40,'BG1');
     
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
        
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        
        for (var i = 0; i < 20; i++)
            {
            var b = bullets.create(0, 0, 'bullets');
            b.name = 'bullet' + i;
            b.exists = false;
            b.visible = false;
            b.checkWorldBounds = true;
            b.events.onOutOfBounds.add(this.resetBullet, this);
}

        cursors = this.input.keyboard.createCursorKeys();
        fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
        
        
        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE; 
        enemies.collideWorldBounds = true;
        game.time.events.loop(3000, this.createEnemy, this);
        enemies.health = 3;
        enemiesTotal = 20;
        enemiesAlive = 20;
      
        
},
    createEnemy: function() {

        
       // for (var r = 0; r < 1 ; r++){
            hx = game.rnd.integerInRange(1300,2000);
            if(hx < 1280) hx=1280;
            var enemy = enemies.create(hx, game.rnd.integerInRange(50, 650), 'shark');
            enemy.anchor.setTo(0.5, 0.5);
            enemy.body.velocity.x = -100;
            
        //}

},
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
        
    game.physics.arcade.overlap(bullets, enemies, this.collisionHandler, null, this);
    
},
    collisionHandler: function(bullet, enemy){
        console.log("KILL!");
        bullet.kill();
        enemy.kill();
    },
    fireBullet: function(){
        if(game.time.now > bulletTime)
        {
            bullet = bullets.getFirstExists(false);
                
            if(bullet)
            {
                bullet.reset(Player.x + 6, Player.y - 8);
                bullet.body.velocity.x = 500;
                bulletTime = game.time.now + 150;
            }
        }
    },
    resetBullet: function(bullet) {
        bullet.kill();
    },
    render: function() {

    // game.debug.text('Active Bullets: ' + bullets.countLiving() + ' / ' + bullets.length, 32, 32);
    game.debug.text('Enemies: ' + enemiesAlive + ' / ' + enemiesTotal, 1120
                    , 60
                   );

}
};