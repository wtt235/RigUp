var AMLTranslator = function(tags) {

    var self = this;

    self.tags = tags;

    self.translate = function(text){
            var result = "";
            var currentTags = [];
            var left = 0;
            var right = text.indexOf('^');
            while (left < text.length){
                if(right === -1){ // if there are no more tag openers, set right to end of string
                    right = text.length;
                }
                result += text.substr(left, right - left);
                if(right < text.length) {
                    ++right;
                    var currentChar = text[right];
                    // check if it's a closing tag
                    if (currentChar === "!") {
                        ++right;
                        currentChar = text[right];
                        var index = currentTags.indexOf(currentChar);
                        /*
                         We need to close all the currently used tags up until the tag that
                         corresponds with the tag we're closing
                         */
                        for (var x = currentTags.length - 1; x >= index; --x) {
                            result += self.tags[currentTags[x]].closeHtmlTag;
                        }
                        currentTags.splice(index, 1);
                        /*
                         Now we need to create open tags from all currently used tags that were
                         inside the tag we just closed
                         */
                        for (x = index; x < currentTags.length; ++x) {
                            result += self.tags[currentTags[x]].openHtmlTag;
                        }
                    } else if (currentChar in self.tags) {
                        result += self.tags[currentChar].openHtmlTag;
                        currentTags.push(text[right]);
                    }
                }
                left = right + 1;
                right = text.indexOf('^', right + 1); // find the next tag opener
            }
            return result;
    };

};

// Make translator available via “require” in Node.js
if (module.exports) {
    var tags = require('./tags.js');
    module.exports = new AMLTranslator(tags);
}