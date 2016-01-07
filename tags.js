// Define ALM tags and their HTML equivalents

var Tags =  {
    '%': {
        openHtmlTag: '<strong>',
        closeHtmlTag: '</strong>'
    },
    '~':{
        openHtmlTag: '<em>',
        closeHtmlTag: '</em>'
    }
};

if (module.exports) {
    module.exports = Tags;
}