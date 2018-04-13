var Player;
var weapon;
var fireButton;
var enemies;
var rip = 0;
var bloodsplat;

//NYA VARIABLER:
var bulletTime = 0;
var bullet;

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
        Player.animations.add('simma-ej',[6,10],true);
        this.physics.enable(Player,Phaser.Physics.ARCADE);
        Player.body.gravity.y = 600;
        Player.body.collideWorldBounds = true;
        
        
        /*
        weapon = game.add.weapon(30,'bullets');
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletAngleOffset = 0;
        weapon.bulletSpeed = 400;
        weapon.fireRate = 60;
        weapon.trackSprite(Player, 0, 0, true);
        weapon.physicsBodyType = Phaser.Physics.ARCADE
        weapon.enableBody = true;
        */
    //NYTT:  
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
    //NYTT END
        
        cursors = this.input.keyboard.createCursorKeys();
        fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
        
        
        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE; 
        enemies.collideWorldBounds = true;
        game.time.events.loop(1000, this.createEnemy, this);
      
        
    },
        createEnemy: function() {


            for (var r = 0; r < 1 ; r++)
            {
                var enemy = enemies.create(game.rnd.integerInRange(0,3000), game.rnd.integerInRange(50, 700), 'shark');
                enemy.anchor.setTo(0.5, 0.5);

            }

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
            //weapon.fire();
            this.fireBullet();
        }
        enemies.x -=1;
                                //OBS:
        this.physics.arcade.overlap(bullets, enemies, this.collisionHandler, null, this);


    },
    collisionHandler: function(bullet, enemy){
        console.log("KILL! ");
        bullet.kill();
        enemy.kill();
    },
//NYA METODER:    
    fireBullet: function() {
        if (game.time.now > bulletTime)
        {
            bullet = bullets.getFirstExists(false);

            if (bullet)
            {
                bullet.reset(Player.x + 6, Player.y - 8);
                bullet.body.velocity.x = 300;
                bulletTime = game.time.now + 150;
            }
        }
    },
    resetBullet: function(bullet) {
        bullet.kill();
    }
};