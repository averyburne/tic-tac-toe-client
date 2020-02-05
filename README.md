
# Tic-tac-toe

## Technologies used
- html
- css
- javascript
- jquery
- bootstrap

## Planning
I first started out by designing both wireframes and writing user stories, so
my web application would important goals to achieve and would have a basic
layout so I would know where to start
[link to wireframes] https://imgur.com/gallery/AMECHpV

Next I started out with the basic layout so everything I needed to test the
out the logic would be testable as I wrote it. The basic layout included all
the forms needed to communicate with the API (Sign up, sign in, change
password, and sign out) as well as the gameboard which was created using
bootstrap.

### DOM/JQuery

Once that was done, I started with the DOM manipulation using JQuery. I
wanted to make sure I was able to actually change the screen and add Xs and
Os as the user played. This is where I came accross my first big setback. I
was not using grunt serve to test my application, so all of the premade
links and scripts in the browser template were not importing the
technologies I needed (like jquery), so I attempted to add the links
myself, but this ended up just messing up the file paths.

### Game logic

After that I started working on the game logic, which was defnitely my
favorite part of the project. I ended up deciding to hard code the winning
combinations since there is only 8 combinations that you can win with in
tic tac toe. I had somewhat of a difficult time in trying to get the game
to switch between X and O, but I ended up using a new array's length
being odd or even to determine whose turn.


### API

After that was setting up the API calls. The four authentication ones (sign
up, sign in, change password, and sign out) were easy enough as it was very
similar to the ones we did in class. I also was able to easy set up AJAX
call for GET requests (to retrieve the games) and POST requests (to add a
new game to the API). By far my biggest struggle in this project was
getting the API to update the position of Xs and Os as the game
progressed. First coming up with a way to get the position on the game
board to correlate with a cell positions in the API, and then getting
the cells to actually record the moves being made caused a lot of new
bugs to be introduced as I tried to get it to work.

## Problem solving

The first type of problem I would encounter with my code would be error based problems, this is when I know what I want my code to do, but it wouldn't
behave as I was expecting it to. My general problem solving strategy for
this was to slowly figure out exactly where the issue is coming from, I
would do with simply with a series of console.logs. I would print out the
data I needed in the console through all steps of the process to see
exactly where the data is not being communicated correctly or not being
communicated at all. This would help me narrow down my search for the
source of the problem, and it would usually be something simple, such
as a spelling mistake or forgetting to return a certain value. The
issues that were a little more difficult to come up with solutions
for were the more logic based problems. These were problems were I
knew what needed to be accomplished I just didn't know how to go
about solving it. These problems I enjoy more because they allow
myself to get creative with everything we've learned. The issue
of getting the code to switch between X and O was very logic
based, while issues like the API update call was a combination
of logic based and error based.
