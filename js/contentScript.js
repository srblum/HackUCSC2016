//Start helper functions

jQuery.fn.css = (function(css2) { 
    return function() {
        if (arguments.length) { return css2.apply(this, arguments); }
        var attr = ['font-family','font-size','font-weight','font-style','color',
            'text-transform','text-decoration','letter-spacing','word-spacing',
            'line-height','text-align','vertical-align','direction','background-color',
            'background-image','background-repeat','background-position',
            'background-attachment','opacity','width','height','top','right','bottom',
            'left','margin-top','margin-right','margin-bottom','margin-left',
            'padding-top','padding-right','padding-bottom','padding-left',
            'border-top-width','border-right-width','border-bottom-width',
            'border-left-width','border-top-color','border-right-color',
            'border-bottom-color','border-left-color','border-top-style',
            'border-right-style','border-bottom-style','border-left-style','position',
            'display','visibility','z-index','overflow-x','overflow-y','white-space',
            'clip','float','clear','cursor','list-style-image','list-style-position',
            'list-style-type','marker-offset'];
        var len = attr.length, obj = {};
        for (var i = 0; i < len; i++) {
            obj[attr[i]] = css2.call(this, attr[i]);
        }
        return obj;
    };
})(jQuery.fn.css);

function setStyle( obj, propertyObject )
{
 for (var property in propertyObject)
    obj.style[property] = propertyObject[property];
}
function getScoreColor(score){
    var quintile=Math.floor(score/20)
    var scoreColor="rgb(119, 118, 119)";
    if(quintile==0){
        scoreColor="rgb(227, 166, 88)";
    }else if(quintile==1){
        scoreColor="rgb(227, 166, 88)";
    }else if(quintile==2){
        scoreColor="rgb(243, 214, 134)";
    }else if(quintile==3){
        scoreColor="rgb(147, 189, 117)";
    }else if(quintile==4){
        scoreColor="rgb(87, 135, 52)";
    }else if(quintile==5){
        scoreColor="rgb(87, 135, 52)";
    }
    return scoreColor
}
//End helper functions



// var allData = {"John Varvatos": [2, 2, 2, 2, 2, 2, 1, 1, 0, 2, 2, 2, 0, 2, 2, 1, 0, 0, 2, 6, 4, 6, 8, 8, 100, 83, 100, 83, 75, 38, 69], "Lacoste": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 6, 4, 6, 8, 8, 0, 0, 0, 0, 0, 25, 6], "adidas": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 100, 38, 83], "Gildan": [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 0, 2, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 50, 50, 78], "Hanes": [2, 2, 2, 2, 2, 2, 1, 1, 0, 1, 2, 2, 0, 1, 2, 1, 0, 2, 2, 6, 4, 6, 8, 8, 100, 83, 100, 83, 50, 63, 69], "UNIFIRST": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0], "Carter's": [2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 0, 33, 0, 33, 0, 25, 17], "Fruit of the Loom": [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 100, 0, 25, 44], "Disney": [2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 38, 25, 67], "CONTROL": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 100, 100, 100], "Lululemon": [2, 2, 2, 2, 2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 25, 38, 61], "Blauer": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0], "Good & Fair": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 100, 88, 97], "Maggie's Organics": [2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1, 2, 2, 2, 0, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 88, 75, 86], "Aeropostale": [2, 2, 2, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 6, 4, 6, 8, 8, 100, 67, 0, 83, 0, 13, 33], "Express": [2, 2, 2, 2, 0, 2, 1, 0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 0, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 13, 44], "HAE Now": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 100, 88, 97], "Gap": [2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 2, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 75, 38, 75], "Eileen Fisher": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 1, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 75, 38, 81], "prAna": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 100, 63, 92], "Patagonia": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 100, 50, 86], "Levi's": [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 75, 50, 83], "Esteam": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 100, 50, 86], "Forever": [2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 0, 33, 0, 25, 28], "American Eagle": [2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 0, 0, 2, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 75, 50, 81], "Arc'teryx": [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 6, 4, 6, 8, 8, 50, 33, 0, 50, 0, 50, 28], "Propper": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0], "Russell Athletic": [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 1, 0, 2, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 13, 38, 67], "Calvin Klein": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 25, 47], "Alta Gracia": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 2, 2, 0, 2, 0, 0, 2, 2, 6, 4, 6, 8, 8, 100, 67, 100, 83, 50, 50, 64], "Skechers": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0], "Tommy Hilfiger": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 25, 47], "PUMA": [2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 1, 1, 2, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 75, 50, 75], "Elbeco": [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 50, 50, 75, 50, 0, 25, 33], "VanHeusen": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 25, 47], "Garan": [2, 2, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 1, 0, 0, 0, 2, 6, 4, 6, 8, 8, 100, 67, 0, 100, 50, 13, 47], "Durango": [2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 6, 8, 8, 100, 67, 50, 100, 50, 0, 50], "New Balance": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 88, 50, 83], "Quiksilver": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 25, 47], "Timberland": [2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 100, 88, 92], "Abercrombie & Fitch": [2, 2, 2, 2, 0, 2, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 25, 83, 0, 25, 39], "Roxy": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 25, 47]};

var allData={"John Varvatos": [2, 2, 2, 2, 2, 2, 1, 1, 0, 2, 2, 2, 0, 2, 2, 1, 0, 0, 10, 14, 4, 6, 8, 8, 50, 36, 100, 83, 75, 38, 69, 50, 36, 74, 53], "Lacoste": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 10, 14, 4, 6, 8, 8, 20, 0, 0, 0, 0, 25, 6, 20, 0, 6, 9], "adidas": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 1, 10, 14, 4, 6, 8, 8, 50, 43, 100, 83, 100, 38, 83, 50, 43, 80, 58], "Gildan": [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 0, 2, 1, 0, 1, 10, 14, 4, 6, 8, 8, 60, 43, 100, 100, 50, 50, 78, 60, 43, 75, 59], "Hanes": [2, 2, 2, 2, 2, 2, 1, 1, 0, 1, 2, 2, 0, 1, 2, 1, 0, 2, 10, 14, 4, 6, 8, 8, 70, 36, 100, 83, 50, 63, 69, 70, 36, 74, 60], "UNIFIRST": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 14, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Carter's": [2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 10, 14, 4, 6, 8, 8, 20, 14, 0, 33, 0, 25, 17, 20, 14, 15, 16], "Fruit of the Loom": [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 10, 14, 4, 6, 8, 8, 40, 29, 50, 100, 0, 25, 44, 40, 29, 44, 37], "Disney": [2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 0, 0, 1, 0, 0, 1, 10, 14, 4, 6, 8, 8, 40, 43, 100, 83, 38, 25, 67, 40, 43, 61, 48], "Lululemon": [2, 2, 2, 2, 2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2, 0, 0, 1, 10, 14, 4, 6, 8, 8, 50, 43, 100, 83, 25, 38, 61, 50, 43, 61, 51], "Blauer": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 14, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Good & Fair": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 10, 14, 4, 6, 8, 8, 90, 43, 100, 100, 100, 88, 97, 90, 43, 97, 77], "Maggie's Organics": [2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1, 2, 2, 2, 0, 10, 14, 4, 6, 8, 8, 80, 43, 100, 100, 88, 75, 86, 80, 43, 91, 71], "Aeropostale": [2, 2, 2, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 10, 14, 4, 6, 8, 8, 30, 29, 0, 83, 0, 13, 33, 30, 29, 24, 28], "Express": [2, 2, 2, 2, 0, 2, 1, 0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 0, 10, 14, 4, 6, 8, 8, 30, 29, 50, 83, 25, 13, 44, 30, 29, 43, 34], "HAE Now": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 10, 14, 4, 6, 8, 8, 90, 43, 100, 100, 100, 88, 97, 90, 43, 97, 77], "Gap": [2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 2, 0, 0, 1, 10, 14, 4, 6, 8, 8, 50, 43, 100, 83, 75, 38, 75, 50, 43, 74, 56], "Eileen Fisher": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 1, 1, 0, 1, 10, 14, 4, 6, 8, 8, 50, 43, 100, 100, 75, 38, 81, 50, 43, 78, 57], "prAna": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 10, 14, 4, 6, 8, 8, 70, 43, 100, 100, 100, 63, 92, 70, 43, 91, 68], "Patagonia": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 10, 14, 4, 6, 8, 8, 60, 43, 100, 83, 100, 50, 86, 60, 43, 83, 62], "Levi's": [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 0, 1, 10, 14, 4, 6, 8, 8, 60, 43, 100, 100, 75, 50, 83, 60, 43, 81, 61], "Esteam": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 10, 14, 4, 6, 8, 8, 60, 43, 100, 83, 100, 50, 86, 60, 43, 83, 62], "Forever": [2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 10, 14, 4, 6, 8, 8, 40, 29, 0, 33, 0, 25, 28, 40, 29, 15, 28], "American Eagle": [2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 0, 0, 2, 10, 14, 4, 6, 8, 8, 60, 43, 100, 83, 75, 50, 81, 60, 43, 77, 60], "Arc'teryx": [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 10, 14, 4, 6, 8, 8, 50, 14, 0, 50, 0, 50, 28, 50, 14, 25, 30], "Propper": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 14, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Russell Athletic": [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 1, 0, 2, 0, 0, 1, 10, 14, 4, 6, 8, 8, 50, 43, 100, 100, 13, 38, 67, 50, 43, 63, 52], "Calvin Klein": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 10, 14, 4, 6, 8, 8, 40, 29, 50, 83, 25, 25, 47, 40, 29, 46, 38], "Alta Gracia": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 2, 2, 0, 2, 0, 0, 2, 10, 14, 4, 6, 8, 8, 60, 29, 100, 83, 50, 50, 64, 60, 29, 71, 53], "Skechers": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 14, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "Tommy Hilfiger": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 10, 14, 4, 6, 8, 8, 40, 29, 50, 83, 25, 25, 47, 40, 29, 46, 38], "PUMA": [2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 1, 1, 2, 1, 0, 1, 10, 14, 4, 6, 8, 8, 60, 43, 100, 83, 75, 50, 75, 60, 43, 77, 60], "Elbeco": [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 1, 10, 14, 4, 6, 8, 8, 30, 21, 75, 50, 0, 25, 33, 30, 21, 38, 30], "VanHeusen": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 10, 14, 4, 6, 8, 8, 40, 29, 50, 83, 25, 25, 47, 40, 29, 46, 38], "Garan": [2, 2, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 1, 0, 0, 0, 10, 14, 4, 6, 8, 8, 30, 29, 0, 100, 50, 13, 47, 30, 29, 41, 33], "Durango": [2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 10, 14, 4, 6, 8, 8, 20, 29, 50, 100, 50, 0, 50, 20, 29, 50, 33], "New Balance": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 1, 10, 14, 4, 6, 8, 8, 60, 43, 100, 83, 88, 50, 83, 60, 43, 80, 61], "Quiksilver": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 10, 14, 4, 6, 8, 8, 40, 29, 50, 83, 25, 25, 47, 40, 29, 46, 38], "Timberland": [2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 10, 14, 4, 6, 8, 8, 90, 43, 100, 83, 100, 88, 92, 90, 43, 93, 75], "Abercrombie & Fitch": [2, 2, 2, 2, 0, 2, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 10, 14, 4, 6, 8, 8, 40, 43, 25, 83, 0, 25, 39, 40, 43, 33, 39], "Roxy": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 10, 14, 4, 6, 8, 8, 40, 29, 50, 83, 25, 25, 47, 40, 29, 46, 38]}

console.log('contentScript running');
// console.log(document.body.innerHTML)

$(document).ready(function(){
	console.log('Document ready');
    var b1=true;
    chrome.runtime.sendMessage({greeting:"getState"},function(response) {
        b1=response['b1'];
        if(b1){

            //Start CSS
            //Include colorbox css
            var fileref1=document.createElement("link");
            fileref1.setAttribute("rel", "stylesheet");
            fileref1.setAttribute("type", "text/css");
            fileref1.setAttribute("href", chrome.extension.getURL("colorbox.css"));
            document.getElementsByTagName("head")[0].appendChild(fileref1)

            //Include myScript.css
            var fileref2=document.createElement("link");
            fileref2.setAttribute("rel", "stylesheet");
            fileref2.setAttribute("type", "text/css");
            fileref2.setAttribute("href", chrome.extension.getURL("myScript.css"));
            document.getElementsByTagName("head")[0].appendChild(fileref2)

            //Include google font poller one
            var fileref3=document.createElement("link");
            fileref3.setAttribute("rel", "stylesheet");
            fileref3.setAttribute("type", "text/css");
            fileref3.setAttribute("href", "https://fonts.googleapis.com/css?family=Poller+One");
            document.getElementsByTagName("head")[0].appendChild(fileref3)

            //Include google font balthazar
            var fileref4=document.createElement("link");
            fileref4.setAttribute("rel", "stylesheet");
            fileref4.setAttribute("type", "text/css");
            fileref4.setAttribute("href", "https://fonts.googleapis.com/css?family=Balthazar");
            document.getElementsByTagName("head")[0].appendChild(fileref4)
            //End CSS

            //
            //Start overlay code
            //

            //Create container divs
                var div0=document.createElement('div');
                var div1=document.createElement('div');
                var div2a=document.createElement('div');
                var div2b=document.createElement("div");
                var div2c=document.createElement('div');

            //Append 1st container div
                div0.appendChild(div1);
                div1.appendChild(div2a);
                div1.appendChild(div2b);
                div1.appendChild(div2c);

            //Add id to div1 for href
                $(div1).attr("id","overlay-container");

            // Add css classes and IDs
                $(div0).addClass("overlay-hidden");
                $(div1).addClass("overlay-container");
                $(div2a).addClass("overlay-title");
                $(div2b).addClass("overlay-body");
                $(div2c).addClass("overlay-footer");

            //Add title items: Logo and Company Name
                //Create elements
                var titleGrade=document.createElement('img');
                var titleP=document.createElement('p');

                //Add classes
                $(titleGrade).addClass("title-grade");
                $(titleP).addClass("title-p");

                //Set src and text (Change these dynamically later)
                $(titleP).html('Test Title');
                titleGrade.src=chrome.extension.getURL("images/f.png");

                //Append to title div
                div2a.appendChild(titleGrade);
                div2a.appendChild(titleP);

            //Add body items: 3 imgs, bar chart, labels

                //Create data divs
                var childDiv= document.createElement('div');
                var forcedDiv= document.createElement('div');
                var workerDiv= document.createElement('div');

                //Attach div classes
                $(childDiv).addClass('child-div');
                $(forcedDiv).addClass('forced-div');
                $(workerDiv).addClass('worker-div');

                //Append to body div
                div2b.appendChild(childDiv);
                div2b.appendChild(forcedDiv);
                div2b.appendChild(workerDiv);


                //Create img elements
                var childImg=document.createElement('img');
                var forcedImg=document.createElement('img');
                var workerImg=document.createElement('img');

                //Add img classes
                $(childImg).addClass("child-img");
                $(forcedImg).addClass("forced-img");
                $(workerImg).addClass("worker-img");

                //Set img src
                childImg.src=chrome.extension.getURL('images/childLabor.png');
                forcedImg.src=chrome.extension.getURL('images/forcedLabor.png');
                workerImg.src=chrome.extension.getURL('images/workersRights.png');

                //Append img to body div
                div2b.appendChild(childImg);
                div2b.appendChild(forcedImg);
                div2b.appendChild(workerImg);


                //Create img labels
                var childP=document.createElement('p');
                var forcedP=document.createElement('p');
                var workerP=document.createElement('p');

                //Set label text
                $(childP).html("CHILD LABOR");
                $(forcedP).html("FORCED LABOR");
                $(workerP).html("WORKER'S RIGHTS");

                //Add p classes
                $(childP).addClass("child-p");
                $(forcedP).addClass("forced-p");
                $(workerP).addClass("worker-p");

                //Append to body div
                div2b.appendChild(childP);
                div2b.appendChild(forcedP);
                div2b.appendChild(workerP);

                //Create and link data p
                var dataP=document.createElement('p');
                var dataA=document.createElement('a');
                dataA.href="http://www.free2work.org/trends/apparel/Apparel-Industry-Trends-2012.pdf";
                dataA.target="_blank";
                $(dataP).addClass('data-p');
                $(dataP).html('SEE FULL DATA');
                div2b.appendChild(dataP);
                $(dataP).wrap(dataA);



            //Add footer items: social media icons, upvote and downvote
                //Create imgs
                var twitterImg=document.createElement('input');
                var facebookImg=document.createElement('input');
                var pinterestImg=document.createElement('input');
                var mailImg=document.createElement('input');
                var getInvolvedImg=document.createElement('input');
                var likeImg=document.createElement('input');
                var dislikeImg=document.createElement('input');

                //Add img classes
                $(twitterImg).addClass("twitter-img");
                $(facebookImg).addClass("facebook-img");
                $(pinterestImg).addClass("pinterest-img");
                $(mailImg).addClass("mail-img");
                $(getInvolvedImg).addClass("involved-img");
                $(likeImg).addClass("like-img");
                $(dislikeImg).addClass("dislike-img");

                //Set type
                twitterImg.type="image";
                facebookImg.type="image";
                pinterestImg.type="image";
                mailImg.type="image";
                getInvolvedImg.type="image";
                likeImg.type="image";
                dislikeImg.type="image";

                //Set img src
                twitterImg.src=chrome.extension.getURL('images/twitter.png');
                facebookImg.src=chrome.extension.getURL('images/facebook.png');
                pinterestImg.src=chrome.extension.getURL('images/pinterest.png');
                mailImg.src=chrome.extension.getURL('images/email.png');
                getInvolvedImg.src=chrome.extension.getURL('images/getInvolved.png');
                likeImg.src=chrome.extension.getURL('images/thumbsUp.png');
                dislikeImg.src=chrome.extension.getURL('images/thumbsDown.png');


                //Append imgs to footer div
                div2c.appendChild(twitterImg);
                div2c.appendChild(facebookImg);
                div2c.appendChild(pinterestImg);
                div2c.appendChild(mailImg);
                div2c.appendChild(getInvolvedImg);
                div2c.appendChild(likeImg);
                div2c.appendChild(dislikeImg);

                var involvedA=document.createElement('a');
                involvedA.href='http://www.laborrights.org/'
                $(getInvolvedImg).wrap(involvedA)

                //Create ps
                var shareP=document.createElement('p');
                var likeP=document.createElement('p');
                var dislikeP=document.createElement('p');

                //Add classes
                $(shareP).addClass('share-p');
                $(likeP).addClass('like-p');
                $(dislikeP).addClass('dislike-p');

                //Add html
                $(shareP).html('SHARE:');
                $(likeP).html('0');
                $(dislikeP).html('0');

                //Interactive properties
                $(likeImg).click(function(){
                    var likeP=$('.like-p');
                    var count=parseInt($(likeP).html());
                    $(likeP).html(count+1);
                });
                $(dislikeImg).click(function(){
                    var dislikeP=$('.dislike-p');
                    var count=parseInt($(dislikeP).html());
                    $(dislikeP).html(count+1);
                });


                //append to footer div
                div2c.appendChild(shareP);
                div2c.appendChild(likeP);
                div2c.appendChild(dislikeP);
                

            document.body.appendChild(div0);
            //
            //End overlay code
            //


            //Make yScale object mapping scores to y locations
            var yScale=d3.scale.linear()
                .domain([0,100])
                .range([5,145]);



        	$('img.s-access-image.cfMarker').each(function(){

                //Find company name
                var containerDiv=$(this).parents('div.s-item-container');
                var spanChildren=$(containerDiv).find('span.a-size-small.a-color-secondary');
                var companySpan=spanChildren[1];
                var companyName=$(companySpan).html();
                var img=document.createElement("img");
                img.src=chrome.extension.getURL("images/question.png"); //Default image
                $(img).addClass("grade-icon"); //Add class to inherit css

                //Set image and data based on company name
                if(companyName in allData){
                    var companyData=allData[companyName];
                    var overallScore=companyData[companyData.length-1];
                    var quintile=Math.floor(overallScore/20);
                    var childScore=companyData[companyData.length-4];
                    var forcedScore=companyData[companyData.length-3];
                    var workerScore=companyData[companyData.length-2];
                    if(quintile==0){
                        var imgPath="images/f.png";
                        img.src=chrome.extension.getURL(imgPath);
                    }else if(quintile==1){
                        var imgPath="images/d.png";
                        img.src=chrome.extension.getURL(imgPath);
                    }else if(quintile==2){
                        var imgPath="images/c.png";
                        img.src=chrome.extension.getURL(imgPath);
                    }else if(quintile==3){
                        var imgPath="images/b.png";
                        img.src=chrome.extension.getURL(imgPath);
                    }else if(quintile==4){
                        var imgPath="images/a.png";
                        img.src=chrome.extension.getURL(imgPath);
                    }
                    //Make link to overlay-container
                    var a=document.createElement("a");
                    a.href="#overlay-container";
                    $(a).data("companyName",companyName);
                    $(a).data("imgPath",chrome.extension.getURL(imgPath));
                    $(a).data("childScore",childScore);
                    $(a).data("forcedScore",forcedScore);
                    $(a).data("workerScore",workerScore);
                    $(a).data("childColor",getScoreColor(childScore));
                    $(a).data("forcedColor",getScoreColor(forcedScore));
                    $(a).data("workerColor",getScoreColor(workerScore));
                    $(a).colorbox({closeButton:false,inline:true,width:"660px",height:"470px",fixed:true});

                    //Associate company data with the link object to update the inline html when clicked
                    $(a).click(function(){
                        //Change overlay title to company name
                        var companyData=$(this).data()
                        var companyName = companyData['companyName'];
                        $('.title-p').html(companyName);

                        //Change title grade to company grade
                        var gradeImgSrc=companyData['imgPath'];
                        $('.title-grade').attr('src',gradeImgSrc);

                        //Trigger d3 transitions based on scores in the 3 labor subcategories
                            //Child Labor Score and color
                            var childScore=companyData['childScore'];
                            var childColor=companyData['childColor'];
                            d3.selectAll('.child-div')
                                .transition()
                                .duration(1000)
                                .ease("linear")
                                .style('height',yScale(childScore)+'px')
                                .style('background-color',childColor);

                            //Forced labor score and color
                            var forcedScore=companyData['forcedScore'];
                            var forcedColor=companyData['forcedColor']
                            d3.selectAll('.forced-div')
                                .transition()
                                .duration(1000)
                                .ease("linear")
                                .style('height',yScale(forcedScore)+'px')
                                .style('background-color',forcedColor);

                            //Worker's Rights score and color
                            var workerScore=companyData['workerScore'];
                            var workerColor=companyData['workerColor']
                            d3.selectAll('.worker-div')
                                .transition()
                                .duration(1000)
                                .ease("linear")
                                .style('height',yScale(workerScore)+'px')
                                .style('background-color',workerColor);
                            console.log(childScore,childColor,forcedScore,forcedColor,workerScore,workerColor);
                    });


                    //Find enclosing div
                    var parentDiv=$(this).closest('div');
                    var parentA=$(parentDiv).closest('a');
                    if(parentA.length>0){
                        $(parentA).append(img);
                        $(img).wrap(a)
                    }else{
                        $(parentDiv).append(img);
                        $(img).wrap(a)
                    }
            	}else{
                    //Add image to div
                    var parentDiv=$(this).closest('div');
                    var parentA=$(parentDiv).closest('a');
                    if(parentA.length>0){
                        $(parentA).append(img);
                    }else{
                        $(parentDiv).append(img);
                    }
                }         
            });
        }else{
            console.log('App turned off by user request.');
        }
    });
});