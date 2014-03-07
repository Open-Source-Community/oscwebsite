
var pathObj = {
    "mapDraw": {
        "strokepath": [
            {
                //1
                "path": "M 250 50 L 350 100 Z",
                "duration": 600
            },
            {
                //2
                "path": "M 350 130 L 350 160 Z",
                "duration": 600
            },
            {
                //3
                "path": "M 350 190 L 350 230 Z",
                "duration": 600
            },
            {
                //4
                "path": "M 350 230 L 350 307 Z",
                "duration": 600
            },
            {
                //5
                "path": "M 250 50 L 180 90 Z",
                "duration": 600
            },
            {
                //6
                "path": "M 180 90 L 230 120 Z",
                "duration": 600
            },
            {
                //7
                "path": "M 230 150 L 230 195 Z",
                "duration": 600
            },
            {
                //8
                "path": "M 230 225 L 230 270 Z",
                "duration": 600
            },
            {
                //9
                "path": "M 230 270 L 230 340 Z",
                "duration": 600 
                
            },
            {//10
                "path": "M 230 340 L 230 380 M 230 390 L 230 400 M 230 410 L 230 420 Z",
                "duration": 600
            },
            {//11
                "path": "M 180 90 L 130 120 Z",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 500,
            "height": 600
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
     $('#mapDraw').lazylinepainter( 
     {
        "svgData": pathObj,
        "strokeWidth": 3,
        "strokeColor": "#AAA",
        'border': '5px solid #FFFF66'
    }).lazylinepainter('paint'); 


    
    var paper = new Raphael(30, 50, 500, 600);


    //CIRCLE 1
    var circ1 = paper.circle(330, 74, 15);
    circ1.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ1.animate(anim.delay(200)); // run the given animation immediately

    var text = paper.text(330, 75, 'Linux\nStory')
    text.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});


    //functions
    hoverFunc = function(){
        circ1.animate({r: 35}, 500, 'bounce');
        text.animate({opacity: 1, 'font-size': 15}, 500, 'bounce');

    };
    backFunc = function(){
        circ1.animate({r: 15}, 500, 'bounce');
        text.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    circ1.hover(hoverFunc, backFunc);
    text.hover(hoverFunc, backFunc);



    //CIRCLE 2
    var circ2 = paper.circle(330, 134, 15);
    circ2.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ2.animate(anim.delay(800)); // run the given animation immediately

    var text2 = paper.text(330, 130, 'What \nto expect?');
    text2.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});

    //Functions
    hoverFunc = function(){
        circ2.animate({r: 35}, 500, 'bounce');
        text2.animate({opacity: 1, 'font-size': 12}, 500, 'bounce');
    };
    backFunc = function(){
        circ2.animate({r: 15}, 500, 'bounce');
        text2.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    circ2.hover(hoverFunc, backFunc);
    text2.hover(hoverFunc, backFunc);


    //CIRCLE 3
    var circ3 = paper.circle(330, 204, 15);
    circ3.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ3.animate(anim.delay(1400)); // run the given animation immediately

    var text3 = paper.text(330, 200, 'What is\na distro? And\nwhich to use?');
    text3.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});

    //Functions
    hoverFunc = function(){
        circ3.animate({r: 50}, 500, 'bounce');
        text3.animate({opacity: 1, 'font-size': 15}, 500, 'bounce');
    };
    backFunc = function(){
        circ3.animate({r: 15}, 500, 'bounce');
        text3.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    circ3.hover(hoverFunc, backFunc);
    text3.hover(hoverFunc, backFunc);

    //CIRCLE Installtion on VB
    var circInstaltion = paper.circle(330, 280, 15);
    circInstaltion.attr({fill: '#FFFF66', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circInstaltion.animate(anim.delay(2000)); // run the given animation immediately

    var textInstaltion = paper.text(330, 278, 'Installation \n On VB');
    textInstaltion.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});

    //Functions
    hoverFunc = function(){
        circInstaltion.animate({r: 40}, 500, 'bounce');
        textInstaltion.animate({opacity: 1, 'font-size': 15}, 500, 'bounce');
    };
    backFunc = function(){
        circInstaltion.animate({r: 15}, 500, 'bounce');
        textInstaltion.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    circInstaltion.hover(hoverFunc, backFunc);
    textInstaltion.hover(hoverFunc, backFunc);


    //CIRCLE 5
    var circ4 = paper.circle(210, 94, 15);
    circ4.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ4.animate(anim.delay(3300)); // run the given animation immediately

    var text4 = paper.text(212, 95, "OSC \nWebsite \nV1");
    text4.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});
    //Functions
    hoverFunc = function(){
        circ4.animate({r: 35}, 500, 'bounce');
        text4.animate({opacity: 1, 'font-size': 15}, 500, 'bounce');
    };
    backFunc = function(){
        circ4.animate({r: 15}, 500, 'bounce');
        text4.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    circ4.hover(hoverFunc, backFunc);
    text4.hover(hoverFunc, backFunc);


    //CIRCLE 6
    var circ5 = paper.circle(210, 169, 15);
    circ5.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ5.animate(anim.delay(3800)); // run the given animation immediately
    var text5 = paper.text(210, 170, "OSC\nWebsite\nV2");
    text5.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});
    //Functions
    hoverFunc = function(){
        circ5.animate({r: 35}, 500, 'bounce');
        text5.animate({opacity: 1, 'font-size': 15}, 500, 'bounce');
    };
    backFunc = function(){
        circ5.animate({r: 15}, 500, 'bounce');
        text5.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    circ5.hover(hoverFunc, backFunc);
    text5.hover(hoverFunc, backFunc);


    //CIRCLE 7
    var circ6 = paper.circle(210, 244, 15);
    circ6.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ6.animate(anim.delay(4200)); // run the given animation immediately
    var text6 = paper.text(210, 245, "OSC\nWebsite\nV2.3");
    text6.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});
    //Functions
    hoverFunc = function(){
        circ6.animate({r: 35}, 500, 'bounce');
        text6.animate({opacity: 1, 'font-size': 15}, 500, 'bounce');
    };
    backFunc = function(){
        circ6.animate({r: 15}, 500, 'bounce');
        text6.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    circ6.hover(hoverFunc, backFunc);
    text6.hover(hoverFunc, backFunc);

    //CIRCLE 8
    var circ7 = paper.circle(210, 315, 15);
    circ7.attr({fill: '#FFFF66', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ7.animate(anim.delay(5000)); // run the given animation immediately
    var text7 = paper.text(210, 315, "OSC\nWebsite\nV3");
    text7.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});
    //Functions
    hoverFunc = function(){
        circ7.animate({r: 35}, 500, 'bounce');
        text7.animate({opacity: 1, 'font-size': 15}, 500, 'bounce');
    };
    backFunc = function(){
        circ7.animate({r: 15}, 500, 'bounce');
        text7.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    circ7.hover(hoverFunc, backFunc);
    text7.hover(hoverFunc, backFunc);

    //CIRCLE 9
    var lastCircle = paper.circle(210, 395, 15);
    lastCircle.attr({fill: '#e09b99', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    lastCircle.animate(anim.delay(5900)); // run the given animation immediately
    var lastText= paper.text(210, 395, "Nuttin\nyet :P");
    lastText.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});
    //Functions
    hoverFunc = function(){
        lastCircle.animate({r: 30}, 500, 'bounce');
        lastText.animate({opacity: 1, 'font-size': 15}, 500, 'bounce');
    };
    backFunc = function(){
        lastCircle.animate({r: 15}, 500, 'bounce');
        lastText.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    lastCircle.hover(hoverFunc, backFunc);
    lastText.hover(hoverFunc, backFunc);


    //CIRCLE 10
    var circ8 = paper.circle(110, 94, 15);
    circ8.attr({fill: '#FFFF66', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ8.animate(anim.delay(6300)); // run the given animation immediately
    var text8 = paper.text(110, 90, "git\nTutorials");
    text8.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});
    //Functions
    hoverFunc = function(){
        circ8.animate({r: 35}, 500, 'bounce');
        text8.animate({opacity: 1, 'font-size': 15}, 500, 'bounce');
    };
    backFunc = function(){
        circ8.animate({r: 15}, 500, 'bounce');
        text8.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    circ8.hover(hoverFunc, backFunc);
    text8.hover(hoverFunc, backFunc);

    //DECLARATION
    //Green
    var green = paper.circle(11, 530, 10);
    green.attr({fill: '#9ACD32'});
    var txtGreen = paper.text(36, 530, "Done");

    //Yellow
    var yellow = paper.circle(80, 530, 10);
    yellow.attr({fill: '#FFFF66'});
    var txtYellow = paper.text(130, 530, "Work in progress");

    //Red
    var red = paper.circle(190, 530, 10);
    red.attr({fill: '#e09b99'});
    var txtRed= paper.text(220, 530, "في الزلافة");

 });

