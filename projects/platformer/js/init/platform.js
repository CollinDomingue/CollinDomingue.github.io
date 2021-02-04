(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        createPlatform(100, 210, 0.6);
        createPlatform(100, 230, 0.6);
        createPlatform(100, 250, 0.6);
        createPlatform(100, 270, 0.6);
        createPlatform(100, 290, 0.6);
        createPlatform(100, 310, 0.6);
        createPlatform(100, 330, 0.6);
        createPlatform(100, 350, 0.6);
        createPlatform(100, 370, 0.6);
        createPlatform(100, 390, 0.6);
        createPlatform(100, 410, 0.6);
        createPlatform(100, 430, 0.6);
        createPlatform(100, 460, 0.6);
        createPlatform(100, 490, 0.6);
        createPlatform(100, 520, 0.6);
        createPlatform(100, 540, 0.6);
        createPlatform(100, 570, 0.9);
        createPlatform(100, 600, 0.6);
        createPlatform(100, 630, 0.6);
        createPlatform(100, 660, 0.6);

        createPlatform(300, 210, 0.6);
        createPlatform(300, 230, 0.6);
        createPlatform(300, 250, 0.6);
        createPlatform(300, 270, 0.6);
        createPlatform(300, 290, 0.6);
        createPlatform(300, 310, 0.6);
        createPlatform(300, 330, 0.6);
        createPlatform(300, 350, 0.6);
        createPlatform(300, 370, 0.6);
        createPlatform(300, 390, 0.6);
        createPlatform(300, 410, 0.6);
        createPlatform(300, 430, 0.6);
        createPlatform(300, 460, 0.6);
        createPlatform(300, 490, 0.6);
        createPlatform(300, 520, 0.6);
        createPlatform(300, 540, 0.6);
        createPlatform(300, 570, 0.9);
        createPlatform(300, 600, 0.6);
        createPlatform(300, 630, 0.6);
        createPlatform(300, 660, 0.6);

        createPlatform(500, 210, 0.6);
        createPlatform(500, 230, 0.6);
        createPlatform(500, 250, 0.6);
        createPlatform(500, 270, 0.6);
        createPlatform(500, 290, 0.6);
        createPlatform(500, 310, 0.6);
        createPlatform(500, 330, 0.6);
        createPlatform(500, 350, 0.6);
        createPlatform(500, 370, 0.6);
        createPlatform(500, 390, 0.6);
        createPlatform(500, 410, 0.6);
        createPlatform(500, 430, 0.6);
        createPlatform(500, 460, 0.6);
        createPlatform(500, 490, 0.6);
        createPlatform(500, 520, 0.6);
        createPlatform(500, 540, 0.6);
        createPlatform(500, 570, 0.9);
        createPlatform(500, 600, 0.6);
        createPlatform(500, 630, 0.6);
        createPlatform(500, 660, 0.6);

        createPlatform(700, 210, 0.6);
        createPlatform(700, 230, 0.6);
        createPlatform(700, 250, 0.6);
        createPlatform(700, 270, 0.6);
        createPlatform(700, 290, 0.6);
        createPlatform(700, 310, 0.6);
        createPlatform(700, 330, 0.6);
        createPlatform(700, 350, 0.6);
        createPlatform(700, 370, 0.6);
        createPlatform(700, 390, 0.6);
        createPlatform(700, 410, 0.6);
        createPlatform(700, 430, 0.6);
        createPlatform(700, 460, 0.6);
        createPlatform(700, 490, 0.6);
        createPlatform(700, 520, 0.6);
        createPlatform(700, 540, 0.6);
        createPlatform(700, 570, 0.9);
        createPlatform(700, 600, 0.6);
        createPlatform(700, 630, 0.6);
        createPlatform(700, 660, 0.6);
        // ALL YOUR CODe GOES ABOVE HERE ///////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////
    }
        platform.init = init;
})(window);