# group-02
## Contents
- [Description](#description)
- [Justification](#justification)
- [Resources](#resources-used)
- [Developers "get started" guide](#Developers-get-started-guide)
- [Development Team](#development-team)
- [Special Thanks](#special-thanks)
## Description
Smartbil by SaucyCorp is more than just a car. It's an experience. 

Smartbil Can be conotrolled in multiple ways, which leads to a higher degree of accesibility. As of the latest release, the car can be controlled by: 
- Keyboard
- Website
- Joystick
- Discord bot

Smartbil currently hosts two environments, a racing map where you can compete with your friends' times, and a city map where you can relax and drive the car.
These maps were developed using pre-made and custom made models.

Smartbil is a multi tiered system with both an emulator and a website. The website recieves input through a listener and sends it to a central server based in Frankfurt, Germany. The central server then creates a new emulator instance and simulates these inputs. It then proceeds to return a camera feed of the changes happening.

## Justification
Primarily used as a business tool to display the capabilities and limitations of the Smartcar library, this can also be used to showcase the capabilities of the emualtor and the software behind it. It also showcases how the software, library and emulator can be accessed and controlled using external environments.
It also demonstrates the usage of the sensors, primary to the development of smarter cars and automatic driving services.

There is an element of fun and games within the (CAR NAME) program, however. Featuring two maps upon release, users have a choice of "free play" where they explore a medium sized city with all sorts of stunning scenery and a race map where the user races against the clock in a high intensity race with multiple choices to make that impact the time taken. These map choices tests the library in two contrasting scenarios, which will hopefully lead to the development of a more flexible, relaible library.

This development process also explores how flexible and compatible the library really is, leading to a better development of the library itself by placing it in a realistic practical scenario instead of a vaccuum.

## Resources Used
- [SMCE](https://github.com/ItJustWorksTM/smce-gd "SMCE github page")
- [Arduino IDE](https://www.arduino.cc/en/software "Arduino")
- [Android development platform](https://developer.android.com/studio "Android studio homepage")
- [Python](https://www.python.org/ "Python home page")
- [Smartcar Library](https://www.arduinolibraries.info/libraries/smartcar-shield "Smartcar Library")
- [Godot Engine](https://godotengine.org/ "Godot main page")
- [Blender](https://www.blender.org/ "Blender")
- [Road models: City map](https://sketchfab.com/3d-models/low-poly-modular-roads-free-asset-pack-d202f189bd5e46bb984eaa25398e200f)

## Developers get started guide
To start of with make sure you have the resources needed to work with this. For the resources used please refer to the "Resources used" section.
Firstly make sure you go and install the latest version of SMCE at [smce_gd](https://github.com/ItJustWorksTM/smce-gd) and clone the repository [group-2](https://github.com/DIT112-V21/group-02) and open the project with an IDE of your choice. 
For information on how to install the SMCE refer to: https://github.com/ItJustWorksTM/smce-gd/wiki#setup-with-prebuilts.


In order to run the website you will need [Node.js](https://nodejs.org/en/). Once you have installed [Node.js](https://nodejs.org/en/) to get started you will need to run "npm install" from the smartcar-frontend dir, in addition to running npm install from the server dir. once you have installed the appropriate node packages in order to start the website, and the backend you will need to run "npm start" in both server, and smartcar_frontend. These two portions of the project are written in javascript via the react framework.

If you want to tinker with the python code you will need to install python 3.7.7, and pipenv. You will then need to create a virutal environment for the python portion of the code. Once you have the necessary packages installed from the piplock file you can run main from the console by typing "python main.py" from the python directory. If you want to work on the discord bot specifically you will need to create a discord developer account and get a token so that you can interact with the discord API.

Finally if you are interested in working with the godot portions of the project you will need to install [godot](https://godotengine.org/) and you will need to fork the [smce_gd](https://github.com/ItJustWorksTM/smce-gd) repository or download the zip file from the github repository page, in order to modify the mods that expect resources from [smce_gd](https://github.com/ItJustWorksTM/smce-gd) to be present. It is recommended that if you wish to do this, you create a new folder inside of the [smce_gd](https://github.com/ItJustWorksTM/smce-gd) project that you downloaded via the zip file or forked from the repository. This folder is where you can keep the [group-2](https://github.com/DIT112-V21/group-02) projects mods seperate from the rest of the [smce_gd](https://github.com/ItJustWorksTM/smce-gd) project. The reason that you need to put the mods inside of the [smce_gd](https://github.com/ItJustWorksTM/smce-gd) project, is because some of the code within the mods expects to modify or interact with code that is in [smce_gd](https://github.com/ItJustWorksTM/smce-gd) once you package the mod for use with smce_gd then it becomes self sustained within the parameters of the [smce_gd](https://github.com/ItJustWorksTM/smce-gd) mods capabilities.
For information on how to create a mod please refer to : https://github.com/ItJustWorksTM/smce-gd/wiki/Modding
The resources used for the maps and and some of the cars are not included in the [group-2](https://github.com/DIT112-V21/group-02) for space purposes but all of the logic and code is, therefore you will have to find and/or create your own models. 

## Developers get started guide
__Welcome to the SmartBil system!__

Our goal is to bring you a fun and engaging racing experience, where you can compete with other people in a time where meeting in person is compromised. Along with this, why not put your own skill to the test and improve it? 
Before all that fun though, here’s a guide on how to get started and how to get the most out of our app! 
To start:

1. Start smce and compile sketch 
2. cd smartcar_frontend npm start

After inputting your cool username and hitting the start button you’re greeted with this page.

![Main Menu](/images/menu.PNG)

As you can see in the menu, the smartbil features 3 different game modes. So let’s go over them briefly:
 
Racing map - Bring out the competitive side of yourself! In a time-trial manner race against bot cars and get the best possible time!

![Race Map](/images/racemap.PNG)

Practice map - Perfect to get the hang of the controls in an environment that lets you roam freely. Enjoy the open city-scape and get good!

![Practice Map](/images/citymap.PNG)

Monster map - For all you horror game fans! We bring you a hair-raising adventure through a dark dungeon with a monster chasing you. Try to survive and drive away for as long as possible before your health has depleted and the monster wins!

![Horror Map](/images/horrormap.PNG)

Now let’s go over the controls for the car:
Joystick - The app features a joystick for that authentic gaming feel, and this is featured both on mobile and desktop but will offer a better experience on mobile with a touch-screen. Just simply point the joystick in the direction you want to go and the car will follow.
Keyboard - You can also choose to control the car with the arrow keys as well as WASD if you would like, this is recommended for desktop usage. 

Discord - The app also features controlling of the car via a Discord bot! This does require some setting up though, here’s how:
Create a developer discord account and generate a token (this token will allow interaction with Discord API which is needed to invite to discord)
Add the token to the Discord python code as environment variable
Run script for main Discord bot
Invite the bot to a server (this is obtained from the aforementioned developer guide)
Type .help to see the commands for running.

Next up we have different difficulties to choose from, here’s what they all mean:

Easy - Drive around with boosts on full power and on full speed
Medium - Boosts have less power and is slightly slower than easy
Hard - Boosts have been completely taken away and drive is slower
BossMode - No boosts and slower
Extreme - Once again, drive slower. Now boosts send you backwards, meaning it takes some skill to avoid them in order to get a good time.

To change difficulty, go to the main menu and click the dropdown and simply choose the difficulty you want, then choose a map.

Next up we have the leaderboard, this is where you can compare your times recorded in the different maps with your friends. Try to make it to the top with ! (and then gain bragging rights amongst your friends).

![Leaderboard](/images/leaderboard.PNG)
 
You can also view all your own recorded times in the separate Race Times page.

![Times](/images/times.PNG)

You can anytime just go backwards in your browser to go back to the home screen.

Thank you for choosing our smartbil system!

## Development team
Upon meeting any problems/bugs, kindly contact any one of us on these emails here.

- Jonatan Andersson                 gusganlgjo@student.gu.se
- Drake Joseph Emanuel Axelrod      gusaxedr@student.gu.se
- Vernita Gouws                     gusgouve@student.gu.se
- Mohammad Eyass Haj                gushajmo@student.gu.se
- Axel Lindmark                     guslindmax@student.gu.se
- Klara Svensson                    gussvekla@student.gu.se

## Special thanks
Special thanks go to:
- All the hard working people at GU and Chalmers that make this whole programme possible!
- Github for streamlining project organization
- Everyone on sketchfab for inspiration and actual models!
- You!
