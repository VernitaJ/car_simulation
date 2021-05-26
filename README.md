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
