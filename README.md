# Anki clone
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Documentation
###     The home page
![Home page](images\homepage.PNG)
The home page contains first a navigation bar at its top. This aims to navigate through the different pages of the application to access to the many features implemented.
- We first have **Home** to go to this home page at any moment.
- Secondly, we have a **File** dropdown that we will explain just after.
- Thirdly, there is the **Achivements** page that resume all the learning packages that had been studied.
- And fourthly, an **About** page that we will see, summarizes the project.
On the right of the navigation bar, there is a button **Light** that can switch to a **Dark** mode when the user click on it.

###      "Packages" dropdown //// CHANGER ////
![File dropdown](images\filedropdown.PNG)
The **Packages** dropdown redirects to two pages : 
- The **All packages** : available learning packages created packages by the user, but currently not in its study program (stand-by).
- The **Create a package** : allow the user to create its own learning packages.
####     All packages
![Available learning packages (from File)](images\nonstudypackages.PNG)
The packages created by the user that can be modified, delete, or add to the study program (--> home's learning packages)
As the learning packages on the home, we can distinguish the packets by their title, their category and difficulty level.
####     Create a package
![Learning package creation (from File)](images\packagecreation.PNG)
The creation of a learning package is easy. The user has to fill the form containing the title, the description, the category and the difficulty level of the learning package. While all these fields are not filled, the *Create Package* button is desactivated.
When the user submit the form, the package is created in the page **All packages** but is empty.
> Here is a test :
![Field required](images\41packagecreation.PNG)![Submit button activated](images\42packagecreation.PNG)
![The learning package is created](images\43packagecreation.PNG)
![The learning package created is empty](images\44packagecreation.PNG)


###      Learning Facts (flashcards)
> To access to the learning facts of a learning package, click on the *Modify* button :
![The learning facts of the 'TypeScirpt' learning package](images\modifylearningpackage.PNG)
We can see the detailled learning facts of the concerned learning package :
- The question in bold,
- the answer in italic just below,
- and the details regarding the learning fact with its review count, the confidence level of the user, the last reviewed date of the learning fact and the next review date based on the confidence level (from 1 to 4, see later).

Also, we distinguish three buttons :
- **Add Fact** : allows to add a learning fact to the package.
- **Modify** : edits the concerned learning fact.
- **Delete** : deletes the concerde learning fact.

####     Add Fact
The creation of a learning fact is easy. The user has to fill the form containing the question and the answer. While all these fields are not filled, the *Add Fact* button is desactivated.
When the user submit the form, the learning fact is created.
> Here is a test :
![Field required](images\52addlearningfact.PNG)![Submit button activated](images\53addlearningfact.PNG)
![The learning fact is created](images\54addlearningfact.PNG) ///// A FAIRE /////

####     Modify Fact
It is pretty much the same as the creation of a learning fact, but now it is to edit an existing learning fact. The fields are still required, and there is a *Cancel* button to return back.
![The learning fact is created](images\modifylearningfact.PNG)

####     Delete Fact
By clicking this button, the user deletes the concerned learning fact from the associated learning package.
///// A FAIRE /////

###      Achievements
![The learning packages achieved (study is over and done)](images\achievements.PNG)

###      About
There is a small text about the project, by who it is made, how, when, why etc... to know a little bit more about the purpose of this application.
![Summary and context of the application](images\about.PNG)

###      Light/Dark mode
As discussed earlier, there is a **Light** and **Dark** mode on the top right of the navigation bar.
All the previous images are in *Light mode*, but here is some on *Dark mode* :
![Dark mode of the home](images\darkmode1.PNG) //// A REFAIRE ////
![Dark mode of the available learning packages](images\darkmode2.PNG)
![Dark mode of the learning facts of a learning package](images\darkmode3.PNG)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
