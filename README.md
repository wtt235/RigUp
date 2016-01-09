AML Translator
=================================================

Approach
-------------
We can parse a string, looking for tag opener syntax to notify that we are encountering some sort of markup.
First, we copy everything we saw after the last tag we parsed, (using a left and right pointer in the string) 
then we look to see if we looking at an open or closing tag.  If it's an open tag, we print the corresponding HTML.
If it's a closing tag, we close all the tags that have been opened since the current tags was first created (if 
there are any) and finally close the current tag.  Then we reopen the tags that were initially opened between the 
current tag's markup.


Assumptions
-------------
- All provided ALM string are valid.
    - All opening markup with have a corresponding closing markup - the reverse also being true.
    - All open tags will be closed before the same tag is opened again.



Design
-------------
There are two files to the solution: app.js and tags.js.  tags.js defines a collection of ALM tags and their
corresponding HTML markup.  This can easily be extended to include additional ALM tags.  app.js contains the 
AMLTranslator object with the translate method, and imports the tag collection from tags.js.  I added a parameter "tags"
so that a tag collection can be injected into the AMLTranslator object.


Possible Improvements
-------------
- Use a unit testing framework, such as Jasmine, to manage testing.
    - Can inject the tag collection.
- Add AML validation functionality to remove dependency on valid AML being supplied. 
