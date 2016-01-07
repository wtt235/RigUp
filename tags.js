// Define ALM tags and their HTML equivalents

var Tags =  {
    '%': {
        openHtmlTag: '<strong>',
        closeHtmlTag: '</strong>'
    },
    '~':{
        openHtmlTag: '<em>',
        closeHtmlTag: '</em>'
    },
    /* Uncomment to support html delete translation
    '$':{
        openHtmlTag: '<del>',
        closeHtmlTag: '</del>'
    }*/
};

if (module.exports) {
    module.exports = Tags;
}