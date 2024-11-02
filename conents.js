export const contentsClass = [
    `<strong>An introduction to classes in php (with js)</strong>
    <a href="https://youtu.be/CuZVhF_P96k" target="_blank">Go to Intro</a>`,
    `<a href="https://youtu.be/CuZVhF_P96k" target="_blank">Go to Episode 1</a>
Basic concepts
Why Classes?
Visualizing Classes
Create class with constructor
Static Functions
Naming error
Recap
Instantiation
Recap
Concepts of economical writing
Recap`,

    `<a href="https://youtu.be/bNN3aZizrb4" target="_blank">Go to Episode 2</a>
What is an object?
Object in Javascript
Associative(Key Value Pairs) vs Indexed 
Explanation of JS vs PHP
Object Instantiation of classes
Initializing variables in php vs js
Understanding "this"`,

    `<a href="https://youtu.be/PEjaTR2aLXI" target="_blank">Go to Episode 3</a>
Objects and "this" (continued from previous episode)
Why "this"?  Addressing scope of classes`,

    `<a href="https://youtu.be/PZmainUEBYs" target="_blank">Go to Episode 4</a>     
Demonstration of inheritance for functions
Inheritance of constructor
Abstract Classes
Abstract Functions
Interface
Typehints in constructor
Typehints in methods
Traits
Recap
<a href="https://youtu.be/xh4JOHd5sjM?si=g7xDD37U9g6I2egm&t=1318" target="_blank">Learn Autoload here</a>     
`
];

export const contentsPHP = [
    `<strong>Understanding PHP and MVC
    <a href="" target="_blank">Go to Intro</a>
    <a href="https://github.com/Ninjaphil24/mvctut" target="_blank">Go to Github Repo</a>`,
    `<a href="https://youtu.be/FZxj8uEcK3w" target="_blank">Go to Episode 1</a>
    <a href="https://github.com/cretueusebiu/valet-windows" target="_blank">Go to Valet Repo</a>
Valet for Windows Repo
Install PHP with Powershell
Install Valet for Windows
Configure Valet to optimize X-Debug`,

    `<a href="https://youtu.be/hk4BI6szM30" target="_blank">Go to Episode 2</a>    
Interactive Shell
PHP Documentation
MySQL Download
Enter MySQL into PATH
MySQL Documentation
Configure MySQL new user
Download Table Plus
Back/Front end relationships & PHP
Creation of folders and files
X-Debug config and test
Intelephense installation`,

    `<a href="https://youtu.be/kjXKO11dToY" target="_blank">Go to Episode 3</a>    
Create Database
Explanation of SQL
CREATE TABLE syntax
1st SQL query
INSERT statement
SELECT statement
Download Git
Explanation of Git
Create Account on GitHub & SSH
Create Repository
Git Config`,

    `<a href="https://youtu.be/-OtjhSGXAuI" target="_blank">Go to Episode 4</a>
How Valet works
Explanation of architecture
Writing Code! HTML/CSS
Beginning PHP - how it connects to html
Superglobals - print_r - var_dump
Submit if/else & isset
mysqli object
Writing a query in php
INSERT query in php
Review of all steps
Git Commit
Error Handling->try (throw new Exception) catch
Creating an error log
.gitignore and commit`,

    `<a href="https://youtu.be/-F9ejmkX2Rs" target="_blank" >Go to Episode 5</a>
Create Migration
Running Migration(Fails)
Running Migration(Success - multi_query)
SQL injection intro
SQL injection setup
SQL injection demonstration
SQL injection security in php docs
Prepare, Bind_Param, Execute!
Demonstration of safety`,

    `<a href="https://youtu.be/UdEO0576VZ4" target="_blank"> Go to Episode 6</a>
Unique Email Key
Run Duplicate Email Query
Install phpMyAdmin
Access mySQL via PMA
Error Code Access
Success if statement
mysql_stmt -> error docs
Create Error Message
Scope Errors
Handling multiple errors
MySQL "doesn't equal" operator
Wrong error demo
mysql_stmt -> errno
Error code working`,

    `<a href="https://youtu.be/QCOomvlbVAQ" target="_blank">Go to Episode 7</a>    
Intro to Unit Testing
PHP Unit Installation
Run 1st test
Create 2nd test
Create form test`,

    `<a href="https://youtu.be/XSvSdGqUPxY" target="_blank">Go to Episode 8</a>    
Intro - Why MVC ?
Separate Connection file and env vars
What is MVC ?
Splitting files into MVC 
1. Model
2. Controller
3. View
PHP Unit testing`,

    `<a href="https://youtu.be/0TczOkAEAKI" target="_blank"> Go to Episode 9</a>
Intro to Routing
Step 1:  Associative Arrays
Step 2:  Super Globals
Explanation of above
Debugging session demo
Returning to index(entry point)
Optimize debug messages
Explanation of Router v1
Controller v2
Reorganize to Classes
MVC v1: Create Laravel type folder stucture
Explanation of Routing
Optimize Routing`,

    `<a href="https://youtu.be/xh4JOHd5sjM" target="_blank">Go to Episode 10</a>
Intro to scope error
Create git branch and using "global" keyword
Solve scope error
Using $GLOBALS array
Using "if" or "else if"
Explanation of next steps
Install Autoload
Readjust scope for errorbool
Explanation of how the router and controller should work
Example of ternary
Move all logic to controller
Example of switch statement and optimize code
Further optimization ternary vs switch
Move logic from view to controller`,

    `<a href="https://youtu.be/imlpHE89d8Y" target="_blank">Go to Episode 11</a>
Optimize Model
Further Unit Tests Intro
1st new test: Submission
2nd test:  Duplicate email error 1062
3rd test:  Empty email field 3819
Failing a test consequences
Intro to Mocks
1st mock: Submission test
Explicit explanation of prepare
Intro to expects, method, with, willReturn
Mock methods in practice
Explanation of bind_param and execute
Test friendly coding`,

    `<a href="https://youtu.be/-At_cuCq60I" target="_blank">Go to Episode 12</a>
Intro
Refactoring from episode 11
Intro to try/catch
Practical example of try/catch
VS Code git extensions and current status of git
Explanation of duplicate code issue
Refactor duplicate code
Explanation of Exception class
    Parameter by reference vs by value
Refactor else if and debug
Recap
Remove parameter by reference`,

    `<a href="https://youtu.be/vFiGzv3rudI" target="_blank">Go to Episode 13</a>
Intro
Associative Array for Router
Router in interactive shell
Putting it into practice
Create Router folder and file
Import Router to entry point
Error Handling for Router Class`,

    `<a href="https://youtu.be/JJ29bPn9JYg" target="_blank">Go to Episode 14</a>
Intro
Convert if/else to try/catch
Refactor for testIndexOutput
Router Test
Create tests for errors`,

    `<a href="https://youtu.be/1GGBRXbw_Es" target="_blank">Go to Episode 15</a>
Intro
Demo of fetch_assoc in interactive shell
Explanation of data_seek
Demo of fetch_all in interactive shell
Explanation of traverse
Demo of using foreach loop directly in interactive shell
Using it in the code.Step 1: Model
Step 2: Controller
Step 3:  View and Router errors
Router refactor explantion
Router refactor
Tests refactor
Create mock for internal functionality tests
Use callback in test
Outro`,

    `<a href="https://youtu.be/0AYZK73haF8" target="_blank">Go to Episode 16</a>
Intro
Small refactor of tests
Refactor public to protected with trait
Further separation of tests for clarity
Create Interface
Add table html for list.php
Add button for a - tag to list`,

    `<a href="https://youtu.be/rajM5sHdZW4" target="_blank">Go to Episode 17</a>
Try / Catch for ListModel
Create single entry functionality with query params
Explanation of $_GET[]
Using the same view for single and multiple
The need for parse_url
Create if statement within list view
Preparation for various demo methods
Call singleuser with fetch_assoc
Call list with fetch_assoc using while loop`,

    `<a href="https://youtu.be/pegOcRBZDlY" target="_blank">Go to Episode 18</a>
Optimize debugging statements
Why you must not use query method
Demonstration of sql injection via address bar
Export SQL for migration
Use multi_query and demonstrate drop table via address bar
Prepare, bind_param, execute
get_result
Unit tests
Refactor code for tests - Issue: Global variable
Test review
Create ListTest
Create Database connection test
Test DB output
Interactive shell testing
Test DB using while loop
Explanation of previous in interactive shell
Use of teardown method
Optimize repeated code
Test using find_all method
Explaining end() in interactive shell
Application of end() in test`,

    `<a href="https://youtu.be/Aaqr3j4KIao" target="_blank">Go to Episode 19</a>
Refactor db id numbering in tests
Explanation of Operator Precedence
Fix Success Button
Refactor duplicate code in FormTest.php
Add id numbering methods in FormTest.php
Debugging
Solution to bug
Outro`,

    `<a href="https://youtu.be/zzBYC4XtQZI" target="_blank">Go to Episode 20</a>
PHP methods in Interactive Shell: foreach
Nested Array
Example of a Route
array_map
array_filter
Quick intro to Bitwise operators
reduce
preg_match
string_replace
array_shift
spread operator
Outro
<a href="https://regexr.com/" target="_blank">RegEx Tool</a>
`,

    `<a href="https://youtu.be/f7Fq4sGG2Eo" target="_blank">Go to Episode 21</a>
Intro and review of router
Add debug statements
Review with debug statements of how router works
Query String limitations vs Wildcard
New Branch for Wildcard and debug statements
In ListModel use query instead of prepare / bind_param / execute
Create controller method for wildcard
Adjust view for wildcard
RouterSetup add one line
Review for git
Explanation of single ":" and reg ex
Modify dispatch method - remove array_key_exists
Introduce preg_match
Looping through routes
Using "^" and "$" for reg ex
Create if statement to isolate routes
Isolating access to controllers and methods
Instantiation and injection of id into controller dynamically
Create preg_match in view for dynamic url
Relative path for /list
Relative path for CSS
Resolve parameter error
array_shift
spread operator
Outro

Links for regular expressions`,

    `<a href="https://youtu.be/EB7UqALxhIQ" target="_blank">Go to Episode 22</a>
Intro and review of router
Exceptions
Unit tests for router review(no new test)
:id instead of capture group with str_replace
Create test for array_shift
Refactor to test friendly code
Finish wildcard test`,

    `<a href="https://youtu.be/b_p77Imbrpg" target="_blank">Go to Episode 23</a>
Intro & test refactoring
Refactor router for sql error exception
Further testing
Test abandoned and explanation of why
Review tests for list.php
HTML injection test explanation
Write HTML injection test
Write Single User test query strings
Write Single User test wildcard
Avoid global vars for test friendly code

Look at mistakes and find where they are made

<a href="https://youtu.be/iVta1OHJK1o" target="_blank">Go to Episode 23B</a>
Refactor to correct mistakes
Explanation of possible solutions
Logging
At long last, the reason
Outro`,

    `<a href="https://youtu.be/MflnnQUQT6E" target="_blank">Go to Episode 24</a>
Javascript structure:  Prototype chain
Examples in console 
Constructor Functions
MDN Docs
"this" as global object & DOM
"this" other uses
Web API hierarchy
Recap`,

    `<a href="https://youtu.be/ibN-Rs3BwaI" target="_blank">Go to Episode 25</a>
Intro: Explanation of full page load
Explanation of Ajax: partial page load
PHP & HTML / CSS setup for Ajax
What is json
Loops with ajax
json_encode
Connect js files to view
Write Ajax script: Load DOM
Instantiate XMLHttpRequest and open
HTML text interpolation
getElementsByTagName = array and innerHTML property
send & readystate
Response text 
json parse
Output Buffer
header for readability
Solution to errors: exit & onload
Inject json into DOM
Create single user button
Outro`,

    `<a href="https://youtu.be/qsIuQvHIGaQ" target="_blank">Go to Episode 26</a>
Create php function for single user ajax
URI placement & philosophy of code
The event object
Isolating event listeners
Writing single user function
    Ajax functioning, minor corrections
Make anonymous functions callable
Recap`,

    `<a href="https://youtu.be/mVBYgmwoDg8" target="_blank">Go to Episode 27</a>
Ajax with query string
Fetch API Step 1: Promises
Fetch API with Ajax, further explanations
Write Fetch API into Ajax 
Arrow function characteristics
Fetch API syntax and implementation
Outro`,

    `<a href="https://youtu.be/iNx4h_OmLfM" target="_blank">Go to Episode 28</a>
Intro:  Duplicate code problem
Create Components and refactor PHP
const, let and var
    Create Modular Components and refactor Ajax
Array functions in js
HTMLCollection = Object with array - like behavior
Refactor onclick for modular js
Array.from
Refactor continued
Scope error resolved
Data attribute
Add switch for different buttons
Final component creation for ajax
Outro`,

    `<a href="https://youtu.be/vKJc5gSaXWE" target="_blank">Go to Episode 29</a>
Demo of local storage
Create local storage options
PHP cookies`,

    `<a href="https://youtu.be/0TT8SN4YLiU" target="_blank">Go to Episode 30</a>
Corrections to background color options
PHP Cookie refactor
PHP Doc Comments
Middleware Intro
Middleware in practice
Function reference
Middleware and Doc Comments continued
Middleware recap`,

    `<a href="https://youtu.be/RKOkGboiLnY" target="_blank">Go to Episode 31</a>
async / await
API 1.file_get_contents
2. Example of actual local API: PHP to Ajax
json_decode
stdClass
allow_url_fopen in php.ini
curl
Push Notifications Step 1: ngrok
Push Notifications Step 2: onesignal`,

    `<a href="https://youtu.be/Eq63zdrB2Ps" target="_blank">Go to Episode 32</a>
Intro to vendor folder and packaging
Preparation 
Write composer.json
composer update
Connect vendor contents to new index.php
Good practice paths with __DIR__
Path error
Solution to path error
composer update
Refactor for css
PHP cannot refactor for Ajax demo
Packaging js Step 1: Install node.js
npm init and package.json in original folder
Install Laravel Mix(instead of webpack)
Js packaging complete and debugging
    `
];

export const contentsJS = [
    `<strong>Front-End Demystified: A Deep Dive into Vue.js
    <a href="" target="_blank">Go to Intro</a>
    <a href="https://github.com/Ninjaphil24/VanillaVue" target="_blank">Go to Github Repo</a>`,
    `<a href="https://youtu.be/-GxQXzoWZ7c" target="_blank">Go to Episode 1</a>
Create basic website with boilerplate and href
Full page reload demo
Single Page App theory
Git Init
Create SPA with js
Injection of js
SPA file structure
Create main.js
Outro`,

    `<a href="https://youtu.be/Wlg7bMSFF2k" target="_blank">Go to Episode 2</a>
Organize folder
Install vue.js
Vue app ready / comparison of vue app and js app
Refactor vanilla js to look like vue.js
Create router folder structure in vanilla js
Correct index.html placement
Refactor router for new folder structure
Refactor router if statement to proper routing`,

    `<a href="https://youtu.be/0cYShcRUw3c" target="_blank">Go to Episode 3</a>
Refactoring for #
Intro to Web Components & Shadow DOM
Create custom html tags router - view
Create custom tag router - link + attributes
Create hello - world custom tag
Outro`,

    `<a href="https://youtu.be/Zu3NAxIAYkI" target="_blank">Go to Episode 4</a>
Ep 3 recap and correct repeat code
The template tag theory
Using template tag and document fragment`,

    `<a href="https://youtu.be/qoqvTHT_u3k" target="_blank">Go to Episode 5</a>
Playground commit
Clarification of HTMLElement
Clarification of template tag
Refactor vanilla js to resemble vue.js more closely
Use template tag conceptually
Explanation of scoped style vs shadow DOM
Refactoring all components
Template for App.js`,

    `<a href="https://youtu.be/3PTJXQoJ8BE" target="_blank">Go to Episode 6</a>
First look at Vue.js starter code.Counter, store & state management
First look at computed
Recreating vue features in vanilla js
Functions returning objects
Getter function
First steps for store in vanilla js
Create ref, computed and defineStore functions
Create store in vanilla js
Refactor home & about to use template tag
Refactor to use memory instead of parsing in the DOM
Complete counter in vanilla js`,

    `<a href="https://youtu.be/yYsLW8S5uVU" target="_blank">Go to Episode 7</a>
Recap of Episode 6 and refactor all template tags to memory
Create Options / Composition API switch in vue app
Apply API toggle to HomeView & real life example of computed
Apply API toggle to AboutView and outro`,

    `<a href="https://youtu.be/0sdf90jbysI" target="_blank">Go to Episode 8</a>
JS Theory revision:
Types of function syntax
Spread operator "..."
Object.defineProperty
obj.something vs obj[key]
"this" keyword in js
The bind method
Create store for Vanilla js in Options style
Getters in the store
Outro`,

    `<a href="https://youtu.be/5BjJB8C9e_E" target="_blank">Go to Episode 9</a>
Setters and Getters conceptually
Returning object literals 
Set and Get keywords
Continue with Options/Composition Switch
Refactor counter to match button choice
Remove repeat code
Outro`,

    `<a href="https://youtu.be/NlNUliN_-YE" target="_blank">Go to Episode 10</a>
Styling in vue.js
First look at vue dev tools
Create a new view
CSS in a new view
Reactivity:
Options API variables: data()
Options API methods and toggle bools
Convert to vanilla js
Step 1:  Middleware & Closures
Step 2:  Proxy
Step 3:  Build data proxy using above concepts
Step 4:  Create route for vanilla version of vue component`,

    `<a href="https://youtu.be/EJeVe2wuwuY" target="_blank">Go to Episode 11</a>
Create Composition API style code 
Connect two APIs to API switch and use of components
Repeat for vanilla
Object destructuring example
Debugging
Understanding instantiation of functions and variables`,

    `<a href="https://youtu.be/j6QR5-S8zz0" target="_blank">Go to Episode 12</a>
Create Playground in vue app
End of component creation and repeat in vanilla js
Text interpolation explained
Create components in PlaygroundView.vue and vanilla version
Create a new functionality
Using onclick to imitate @click
Create setStatus in vue app`,

    `<a href="https://youtu.be/K_ACUvTAibk" target="_blank">Go to Episode 13</a>
CSS in vanilla to imitate vue format
V-directives, vanilla version of v-show
v-show in vue.js
v-on or @
Event object log in vanilla
Event object in vue.js and custom v-on
Event in input field vanilla
Even in input in vue
Vanilla input visible in document
v-model
Introduction to v-bind in vanilla
v-bind intro in vue app`,

    `<a href="https://youtu.be/lrt1Yd1Qyzo" target="_blank">Go to Episode 14</a>
Virtual DOM concepts
Nodes
Elements in memory
Concept of virtual DOM by hand
Create miniature virtual DOM in Playground
Object.assign
Further explanation
Mounting from memory to DOM
Setup for diffing
Diffing function and explanation
Object.assign shorthand with spread operator
Create diffing function
Refactor for diffing
Defining $el in diffing function
State of new instantiation
Check to see if there are differences
Demonstration of isolation of changes in diffing`,

    `<a href="https://youtu.be/zK0jGh24hJQ" target="_blank">Go to Episode 15</a>
v-bind setup
v-bind = setAttribute demo in vanilla
v-bind in vue app
Create better equivalent of v-bind in vanilla
v-bind:style or :style
v-bind:style equivalent in vanilla
Work around using "this" 
Toggle classes like v-bind in vanilla
Toggle classes with v-bind in vue app
v-bind array syntax`,

    `<a href="https://youtu.be/FypymaJ4Qb0" target="_blank">Go to Episode 16</a>
Parent and children componenents
Slot philosophy
Prop philosophy
Differentiate colors for each slot
Lifecycle hook intro`,

    `<a href="https://youtu.be/bRACh2qJRPc" target="_blank">Go to Episode 17</a>
Continue from previous episode
Use Web Components to create parent and child
Using slot tag
Using custom component = instantiation of it's class
Adding attributes like props
Shadow root isolation fix
Differentiating color schemes
Translation of previous into vue app
Using v-for loop
Typescript errors
Explanation of typescript syntax: type keyword, union type, mapped type
Composition API version
Correction of TS mistake
Intro to toRefs`,

    `<a href="https://youtu.be/bRACh2qJRPc" target="_blank">Go to Episode 18</a>
Introduction to lifecycle hooks
DOMContentLoaded
load
Placeholder images & live demo of lifecycle
beforeUnload
beforeUnload in practice with localStorage
Install json server
navigator.sendBeacon
bf cache
onpageshow & persisted for bf cache
onpagehide & session storage`,

    `<a href="https://youtu.be/N8Ra66zLCw4" target="_blank">Go to Episode 19</a>
Create Lifecycle components in vue app
Move Vanilla Folders & setup backend
Intro to backend with postman
Intro to node.js
Intro to callstack
Finding a function in performance tab
Example of Task queue entry
Further explanation of Web APIs
Intro to promises
Async/await
Locating functions in performance tab
Notifications
Fetch API
CORS
nodemon and complete fetch
Async version of fetch

Link to callstack tutorial`,

    `<a href="https://youtu.be/4jhPy7U6PsM" target="_blank">Go to Episode 20</a>
Node.js continued: Express & post request
Lowdb in json server
Json web token
use() = middleware
jwt in middleware
jwt token split
try/catch for middleware
Regular Expression for path of middleware
Connect backend to vue app
CORS in practice with dev tools
CORS more in depth
Add jwt into local storage
A lifecycle hook! (Finally)`,

    `<a href="https://youtu.be/-I1AA8uYDBE" target="_blank">Go to Episode 21</a>
Recap of previous episode
Correct jwt.verify. Refactor username key
Mount backend into vue app
Create login form
Lets talk about lifecycle hooks
JWT in composition API
Options vs Composition with lifecycle hooks
Create a "Loading..." frame
Debug using Vue Devtools & Sources tab`,

    `<a href="https://youtu.be/zYuCPjyquXI" target="_blank">Go to Episode 22</a>
Created Lifecycle Hook, $refs, $emit
Explanation of $refs
$emit - explanation 
Create color toggle
Setup for created & beforeMount lifecycle hooks
Composition API for toggle
setup(props, context)
$el = document & mounted lifecycle hook
Composition API equivalency
Memory Leak Theory
Dev Tools Memory Tab
onBeforeUnmount lifecycle hook
Watchers Options API
Watchers Composition API
Replacing lifecycle hooks with watchers`
];

export const contentsLaravel = [
    `<strong>Full stack, with CI/CD and chatGPT
    <a href="https://youtu.be/CuZVhF_P96k" target="_blank">Go to Intro</a>`,
    `<a href="https://youtu.be/CuZVhF_P96k" target="_blank">Go to Episode 1</a>
Intro
Basic concepts
Why Classes?
Visualizing Classes
Create class with constructor
Static Functions
Naming error
Recap
Instantiation
Recap
Concepts of economical writing
Recap`,

    `<a href="https://youtu.be/bNN3aZizrb4" target="_blank">Go to Episode 2</a>
Intro
What is an object?
Object in Javascript
Associative(Key Value Pairs) vs Indexed 
Explanation of JS vs PHP
Object Instantiation of classes
Initializing variables in php vs js
Understanding "this"`,

    `<a href="https://youtu.be/PEjaTR2aLXI" target="_blank">Go to Episode 3</a>
Intro
Objects and "this" (continued from previous episode)
Why "this"?  Addressing scope of classes`,

    `<a href="https://youtu.be/PZmainUEBYs" target="_blank">Go to Episode 4</a>
Intro
Demonstration of inheritance for functions
Inheritance of constructor
Abstract Classes
Abstract Functions
Interface
Typehints in constructor
Typehints in methods
Traits
Recap`
];



