var tags = require('./tags.js')

var AMLTranslator = function() {
    this.translate = function(text){
        var result = "";
        var currentTags = [];
        for(var i = 0; i < text.length; ++i){
            if(text[i] === '^'){
                ++i;
                var currentTag;
                if(text[i] === "!"){
                    ++i;
                    currentTag = text[i];
                    var index = currentTags.indexOf(currentTag);

                    /*
                    We need to close all the currently used tags up until the tag that
                    corresponds with the tag we're closing
                     */
                    for(var a = currentTags.length -1; a >= index; --a){
                        result += tags[currentTags[a]].closeHtmlTag;
                    }

                    currentTags.splice(index,1);

                    /*
                    Now we need to create open tags from all currently used tags that were
                    inside the tag we just closed
                    we
                     */
                    for(var b = index; b< currentTags.length; ++b){
                        result += tags[currentTags[b]].openHtmlTag;
                    }
                }else if(text[i] in tags){
                    currentTag = text[i];
                    result += tags[text[i]].openHtmlTag;
                    currentTags.push(text[i]);
                }
            }else{
                result += text[i];
            }
        }
        return result;
    };
};

// Make translator available via “require” in Node.js
if (module.exports) {
    module.exports = new AMLTranslator();
}