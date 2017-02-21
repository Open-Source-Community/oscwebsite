
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
                "path": "M 350 250 L 350 307 Z",
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


    
    var paper = new Raphael(858, 210, 300, 500);


    //CIRCLE 1
    var circ1 = paper.circle(249, 78, 15);
    circ1.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ1.animate(anim.delay(200)); // run the given animation immediately

    var text = paper.text(249, 75, 'Linux\nStory')
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
    var circ2 = paper.circle(249, 139, 15);
    circ2.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ2.animate(anim.delay(800)); // run the given animation immediately

    var text2 = paper.text(249, 135, 'What \nto expect?');
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
    var circ3 = paper.circle(249, 209, 15);
    circ3.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ3.animate(anim.delay(1400)); // run the given animation immediately

    var text3 = paper.text(249, 200, 'What is\ndistro? And\nwhich to use?');
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

    //CIRCLE 4
    var circInstation = paper.circle(249, 285, 15);
    circInstation.attr({fill: '#FFFF66', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circInstation.animate(anim.delay(2000)); // run the given animation immediately

    var textInstaltion = paper.text(249, 284, 'Instaltion \n On VB');
    textInstaltion.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});

    //Functions
    hoverFunc = function(){
        circInstation.animate({r: 40}, 500, 'bounce');
        textInstaltion.animate({opacity: 1, 'font-size': 15}, 500, 'bounce');
    };
    backFunc = function(){
        circInstation.animate({r: 15}, 500, 'bounce');
        textInstaltion.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    circInstation.hover(hoverFunc, backFunc);
    textInstaltion.hover(hoverFunc, backFunc);


    //CIRCLE 5
    var circ4 = paper.circle(129, 95, 15);
    circ4.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ4.animate(anim.delay(3300)); // run the given animation immediately

    var text4 = paper.text(129, 95, "OSC \nWebsite \nV1");
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
    var circ5 = paper.circle(129, 174, 15);
    circ5.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ5.animate(anim.delay(3800)); // run the given animation immediately
    var text5 = paper.text(129, 173, "OSC\nWebsite\nV2");
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
    var circ6 = paper.circle(129, 244, 15);
    circ6.attr({fill: '#9ACD32', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ6.animate(anim.delay(4300)); // run the given animation immediately
    var text6 = paper.text(129, 245, "OSC\nWebsite\nV2.3");
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
    var circ7 = paper.circle(129, 315, 15);
    circ7.attr({fill: '#FFFF66', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ7.animate(anim.delay(5000)); // run the given animation immediately
    var text7 = paper.text(129, 313, "OSC\nV3");
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
    var circNew = paper.circle(129, 395, 15);
    circNew.attr({fill: '#e09b99', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circNew.animate(anim.delay(5900)); // run the given animation immediately
    var textNew = paper.text(129, 395, "Nuthin\nYet");
    textNew.attr({opacity: 0, 'font-size': 0, 'cursor': 'context-menu'});
    //Functions
    hoverFunc = function(){
        circNew.animate({r: 35}, 500, 'bounce');
        textNew.animate({opacity: 1, 'font-size': 15}, 500, 'bounce');
    };
    backFunc = function(){
        circNew.animate({r: 15}, 500, 'bounce');
        textNew.animate({opacity: 0, 'font-size': 0}, 500, 'bounce');
    };
    circNew.hover(hoverFunc, backFunc);
    textNew.hover(hoverFunc, backFunc);



    //CIRCLE 10
    var circ8 = paper.circle(36, 94, 15);
    circ8.attr({fill: '#FFFF66', stroke: '#A9A9A9',"stroke-width": "3", opacity: 0});
    var anim = Raphael.animation({opacity: 1}, 500); //the animation
    circ8.animate(anim.delay(6300)); // run the given animation immediately
    var text8 = paper.text(36, 90, "git\nTutorials");
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
    var green = paper.circle(11, 440, 10);
    green.attr({fill: '#9ACD32'});
    var txtGreen = paper.text(36, 440, "Done");

    //Yellow
    var yellow = paper.circle(80, 440, 10);
    yellow.attr({fill: '#FFFF66'});
    var txtYellow = paper.text(130, 440, "Work in progress");

    //Red
    var red = paper.circle(190, 440, 10);
    red.attr({fill: '#e09b99'});
    var txtRed= paper.text(220, 440, "في الزلافة");

 });

