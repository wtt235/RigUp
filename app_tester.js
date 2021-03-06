var translateModule = process.argv[2];

// Make the 'document' global available, in case it is needed.
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var mock = new MockBrowser();
GLOBAL.document = mock.getDocument();

var AMLTranslator = require(translateModule);

var testStrings = [
    ["Hello, World!",
        "Hello, World!"],
    ["Hello, ^%World!^!%",
        "Hello, <STRONG>World!</STRONG>"],
    ["Greetings ^%from ^~Glornix^!% Beta-Nine^!~.",
        "Greetings <STRONG>from <EM>Glornix</EM></STRONG><EM> Beta-Nine</EM>."],
    ["^~Hello, ^%Earth!^!~ We are pleased ^~to^!% meet you.^!~",
        "<em>Hello, <strong>Earth!</strong></em><strong> We are pleased <em>to</em></strong><em> meet you.</em>"],
    ["Hello, ^%Earth!^!% garbage text%",
        "Hello, <strong>Earth!</strong> garbage text%"],
/*  Uncomment to test with new delete tag
    ["^~Hello, ^%Earth!^!~ We are pleased ^~to ^$^!%meet you.^!$^!~",
        "<em>Hello, <strong>Earth!</strong></em><strong> We are pleased <em>to <del></del></em></strong><em><del>meet you.</del></em>"],*/
    // Other test strings here.
];

testStrings.forEach(function(val, idx, array) {
    translated = AMLTranslator.translate(val[0]);
    if (translated.toLowerCase() != val[1].toLowerCase()) {
        console.log("Example " + (idx + 1) + " incorrect:");
        console.log(val);
        console.log("");
        console.log("Expected:");
        console.log(val[1]);
        console.log("Received:");
        console.log(translated);
    } else {
        console.log("Example " + (idx + 1) + " correct.");
    }
});