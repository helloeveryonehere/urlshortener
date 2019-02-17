-----------------------------------------------------------------------------------------------------------
Problem Statement - URL Shortener:

Provide simple UI with a form with input and submit button.
Site-visitor enters any original URL to the input field, like http://anydomain/any/path/etc;
Visitor clicks submit button;
Page makes AJAX-request;
Short URL appears in the UI, like http://yourdomain/abCdE (don't use any external APIs as goo.gl etc.);
Visitor can copy short URL and repeat process with another link
Short URL should redirect to the original link in any browser from any place and keep actuality forever, doesn't matter how many times application has been used after that.

Requirements:
Use programming language of your choice.
Don't use any frameworks.
Code Quality matters.
Code should be tested.
If you apply for a front-end oriented position - demonstration of React skills is valuable.

Expected result:
Source code;
System requirements and installation instructions on our platform, in English.
Additional valuable notes for decisions/doubts made during implementation.
Implementations confirms what we talked about in the interview.

------------------------------------------------------------------------------------------------------------------

System Requirements
Node 8 and above
NPM 5.6.0 and above

Installation Instructions
In the project directory, run
### `npm run install:full`
### `npm run start`

------------------------------------------------------------------------------------------------------------------

Dev Notes
There are many @TODO items for me remaining, both on micro level and general
- for the architecture of the app investigated Uncle Bob's blog https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html and some other layer based structures, tried to keep higher/lower importance layers, entries(highest) -> usecases -> interfaces -> infrastructures(lowest), when the higher level layer cannot know about lower one, though see some doubts with the structure, will need to investigate bit more for making it better
- a static type checker is not integrated 
- did very few testings and only on app level, not on client part at all
- proper error handlings are missing
- asynchronous read/write into database and proper handling
- cleanings for overall codes, more helper structures are needed
- there is some bug with url generation in case of very complex original url
- did not spend much time on cliend side part, many cleanings can be done, such as creating middleware for API handler, creating better form component handling loaders, validations etc
- dockerising full application
- concurrent calls are not handled both from API level and DB
- instead of dummy json file DB to have some MongoDb with Mongoose or something else
- caching both for FE with axios and for BE with Redis 
- and some other... :)

during weekdays I am not having spare time, if those items or any of them are needed to fix, please let me know, can send another version after next weekend 
