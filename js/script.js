var game = new Phaser.Game(800, 600, Phaser.AUTO, null, {preload: preload, create: create, update: update});
var platforms;
var player;
var platform;
var keys;

function preload(){
	game.load.image('bg','img/bg.png');
	game.load.image('platform','img/platform.png');
	game.load.spritesheet('player', 'img/player.png', 70, 100);
}

function create(){
	keys = game.input.keyboard.createCursorKeys();

	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'bg');

	//PLAYER SPRITE
	player = game.add.sprite(20, 450, 'player');

	//PLAYER PHYSICS
	game.physics.arcade.enable(player);
	player.body.gravity.y = 350;
	player.body.collideWorldBounds = true;

	player.animations.add('left', [1], 10, true);
	player.animations.add('right', [0], 10, true);

	platforms = game.add.group();

	platforms.enableBody = true;


	platform = platforms.create(0, 550, 'platform');
	platform.body.immovable = true;
	platform = platforms.create(200, 550, 'platform');
	platform.body.immovable = true;
	platform = platforms.create(400, 550, 'platform');
	platform.body.immovable = true;
	platform = platforms.create(600, 550, 'platform');
	platform.body.immovable = true;
	platform = platforms.create(200, 400, 'platform');
	platform.body.immovable = true;
	platform = platforms.create(600, 400, 'platform');
	platform.body.immovable = true;
}

function update(){
	game.physics.arcade.collide(player, platforms);

	if(keys.left.isDown){
		player.animations.play('left');
		player.body.x -= 3;
	}else if(keys.right.isDown){
		player.animations.play('right');
		player.body.x += 3;
	}

	if(keys.up.isDown && player.body.touching.down){
		player.body.velocity.y = -350;
	}
}