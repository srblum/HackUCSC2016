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

//End helper functions




//D3 Viz (Hidden until click)
document.createElement('div')


//

var allData = {"John Varvatos": [2, 2, 2, 2, 2, 2, 1, 1, 0, 2, 2, 2, 0, 2, 2, 1, 0, 0, 2, 6, 4, 6, 8, 8, 100, 83, 100, 83, 75, 38, 69], "Lacoste": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 6, 4, 6, 8, 8, 0, 0, 0, 0, 0, 25, 6], "adidas": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 100, 38, 83], "Gildan": [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 0, 2, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 50, 50, 78], "Hanes": [2, 2, 2, 2, 2, 2, 1, 1, 0, 1, 2, 2, 0, 1, 2, 1, 0, 2, 2, 6, 4, 6, 8, 8, 100, 83, 100, 83, 50, 63, 69], "UNIFIRST": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0], "Carter's": [2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 0, 33, 0, 33, 0, 25, 17], "Fruit of the Loom": [2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 100, 0, 25, 44], "Disney": [2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 38, 25, 67], "CONTROL": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 100, 100, 100], "Lululemon": [2, 2, 2, 2, 2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 25, 38, 61], "Blauer": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0], "Good & Fair": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 100, 88, 97], "Maggie's Organics": [2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1, 2, 2, 2, 0, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 88, 75, 86], "Aeropostale": [2, 2, 2, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 6, 4, 6, 8, 8, 100, 67, 0, 83, 0, 13, 33], "Express": [2, 2, 2, 2, 0, 2, 1, 0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 0, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 13, 44], "HAE Now": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 100, 88, 97], "Gap": [2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 2, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 75, 38, 75], "Eileen Fisher": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 1, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 75, 38, 81], "prAna": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 100, 63, 92], "Patagonia": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 100, 50, 86], "Levi's": [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 75, 50, 83], "Esteam": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 100, 50, 86], "Forever": [2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 0, 33, 0, 25, 28], "American Eagle": [2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 0, 0, 2, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 75, 50, 81], "Arc'teryx": [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 6, 4, 6, 8, 8, 50, 33, 0, 50, 0, 50, 28], "Propper": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0], "Russell Athletic": [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 1, 0, 2, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 100, 13, 38, 67], "Calvin Klein": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 25, 47], "Alta Gracia": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 2, 2, 0, 2, 0, 0, 2, 2, 6, 4, 6, 8, 8, 100, 67, 100, 83, 50, 50, 64], "Skechers": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0], "Tommy Hilfiger": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 25, 47], "PUMA": [2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 1, 1, 2, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 75, 50, 75], "Elbeco": [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 50, 50, 75, 50, 0, 25, 33], "VanHeusen": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 25, 47], "Garan": [2, 2, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 1, 0, 0, 0, 2, 6, 4, 6, 8, 8, 100, 67, 0, 100, 50, 13, 47], "Durango": [2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 6, 8, 8, 100, 67, 50, 100, 50, 0, 50], "New Balance": [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 88, 50, 83], "Quiksilver": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 25, 47], "Timberland": [2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 6, 4, 6, 8, 8, 100, 100, 100, 83, 100, 88, 92], "Abercrombie & Fitch": [2, 2, 2, 2, 0, 2, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 25, 83, 0, 25, 39], "Roxy": [2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 6, 4, 6, 8, 8, 100, 67, 50, 83, 25, 25, 47]};



console.log('contentScript running');
// console.log(document.body.innerHTML)

$(document).ready(function(){
	console.log('Document ready');


    //Include colorbox css
    var fileref=document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", chrome.extension.getURL("colorbox.css"));
    document.getElementsByTagName("head")[0].appendChild(fileref)

    //Include myScript.css
    var fileref=document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", chrome.extension.getURL("myScript.css"));
    document.getElementsByTagName("head")[0].appendChild(fileref)

	$('img.s-access-image.cfMarker').each(function(){

        //Find company name
        var containerDiv=$(this).parents('div.s-item-container');
        var spanChildren=$(containerDiv).find('span.a-size-small.a-color-secondary');
        console.log('container Div:');
        console.log(containerDiv);
        console.log('spanChildren:');
        console.log(spanChildren);
        console.log(spanChildren.length)
        var companySpan=spanChildren[1];
        var companyName=$(companySpan).html();
        var imgSrc=chrome.extension.getURL("images/question.png");
        console.log(companyName);
        if(companyName in allData){
            console.log(companyName+" found!");
            var companyData=allData[companyName];
            var overallScore=companyData[companyData.length-1];
            var quintile=Math.floor(overallScore/20);
            if(quintile==0){
                imgSrc=chrome.extension.getURL("images/f.png");
            }else if(quintile==1){
                imgSrc=chrome.extension.getURL("images/d.png");
            }else if(quintile==2){
                imgSrc=chrome.extension.getURL("images/c.png");
            }else if(quintile==3){
                imgSrc=chrome.extension.getURL("images/b.png");
            }else if(quintile==4){
                imgSrc=chrome.extension.getURL("images/a.png");
            }
        }else{
            console.log(companyName + " NOT found!")
        }

        //Make correct image based on company name
        var img=document.createElement("img");
        img.src=imgSrc;
        $(img).addClass("grade-icon"); //Add class to inherit css


        //Make link
        var a=document.createElement("a");
        a.href=chrome.extension.getURL("images/a.png");
        $(a).addClass("vizLink");
        $(a).colorbox({overlayClose:true});

        //Find enclosing div
		var parentDiv=$(this).closest('div');
        var parentA=$(parentDiv).closest('a');

        //Add image to div
		if(parentA.length>0){
            $(parentA).append(img);
            $(img).wrap(a)
        }else{
            $(parentDiv).append(img);
            $(img).wrap(a)
        }
	});

});
// });