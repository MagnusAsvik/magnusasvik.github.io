//Gemensamma variabler
var ny =[];
var endbutton;
var restartbutton;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var person,text;
//Skapar objektet
var GameState = {
    create: function(){
        this.add.sprite(0,0,'grund');
        this.add.button(100,400,'restart',this.restart, this, 1,0);
        this.add.button(350,400,'end',this.end, this, 1,0);
        
       person = prompt('Skriv in texten', 'Skriv här');
        this.namn(person);
        
    
    },
    namn: function(person){
        for(var i=person.length-1; i >= 0; i--){
                 if(person[i] == ' '){
           ny.push('_');
        }else{
            ny.push(person[i]);
        }    
        }
        text = game.add.text(100,200,'Du skrev: ' + person,style);
        text2 = game.add.text(100,300,'Ny text: ' + ny.join(''),style);
        console.log(ny.join(''));
        
        },
        restart: function(){
        person = '';
        text = game.add.text(100,200, '',style);
        this.state.start(game.state.current);
        },
        end: function(){
        game.state.start('GameOver');
        },


};