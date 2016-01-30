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

	$('img.s-access-image.cfMarker').each(function(){

        //Make image
        var img=document.createElement("img");
        img.src=chrome.extension.getURL("icon.png");
        setStyle(img,{'position':'absolute','top':0,'right':0});


        //Make link
        var a=document.createElement("a");
        a.href=chrome.extension.getURL("cat.png");
        $(a).addClass("catLink");


		var parentDiv=$(this).closest('div');
        var parentA=$(parentDiv).closest('a');
		if(parentA.length>0){
            $(parentA).append(img);
            $(img).wrap(a)
            $(".catLink").colorbox({overlayClose:true});
        }else{
            $(parentDiv).append(img);
            $(img).wrap(a)
            $(".catLink").colorbox({overlayClose:true});
        }
	});

});
// });