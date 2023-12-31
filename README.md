# Anki clone
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Documentation
### <center>Home</center>
![Home page](https://github.com/raacee/anki_clone/blob/main/images/1homepage.PNG)*<center>Home page</center>*

The home page contains first a navigation bar at its top. This aims to navigate through the different pages of the application to access to the many features implemented.
- We first have **Home** to go to this home page at any moment.
- Secondly, we have a **Packages** dropdown that we will explain just after.
- Thirdly, there is the **Achivements** page that resume all the learning packages that had been studied.
- And fourthly, an **About** page that we will see, summarizes the project.
On the right of the navigation bar, there is a button **Light** that can switch to a **Dark** mode when the user click on it.

We can see three icones on each learning packages that are in the study program :
- **Modify** : access to the learning facts that the user can edit, delete, or add new ones.
![Modify button](https://github.com/raacee/anki_clone/blob/main/images/12homepage.PNG)
- **Delete** : to delete the learning package.
![Delete button](https://github.com/raacee/anki_clone/blob/main/images/13homepage.PNG)
- **Success/Achieve** : to consider the learning package as achieved, so the user has finished studying it and considers it successful.
![Achieve button](https://github.com/raacee/anki_clone/blob/main/images/14homepage.PNG)


### <center>"Packages" dropdown</center>
![Packages dropdown](https://github.com/raacee/anki_clone/blob/main/images/2packagesdropdown.PNG)<center>*Packages dropdown*</center>

The **Packages** dropdown redirects to two pages : 
- The **All packages** : available learning packages created packages by the user, but currently not in its study program (stand-by).
- The **Create a package** : allow the user to create its own learning packages.
#### <center>All packages</center>
![Available learning packages (from Packages)](https://github.com/raacee/anki_clone/blob/main/images/3nonstudypackages.PNG)<center>*Available learning packages (from Packages)*</center>

The packages created by the user that can be modified, delete, or add to the study program (--> home's learning packages)
As the learning packages on the home, we can distinguish the packets by their title, their category and difficulty level.
#### <center>Create a package</center>
![Learning package creation (from Packages)](https://github.com/raacee/anki_clone/blob/main/images/4packagecreation.PNG)<center>*Learning package creation (from Packages)*</center>

The creation of a learning package is easy. The user has to fill the form containing the title, the description, the category and the difficulty level of the learning package. While all these fields are not filled, the *Create Package* button is desactivated.
When the user submit the form, the package is created in the page **All packages** but is empty.
> Here is a test :

![Field required](https://github.com/raacee/anki_clone/blob/main/images/41packagecreation.PNG)<center>*Field required*</center>![Submit button activated](https://github.com/raacee/anki_clone/blob/main/images/42packagecreation.PNG)<center>*Submit button activated*</center>

![The learning package is created](https://github.com/raacee/anki_clone/blob/main/images/43packagecreation.PNG)<center>*The learning package is created*</center>

The created learning package :
![The learning package created is empty](https://github.com/raacee/anki_clone/blob/main/images/44packagecreation.PNG)<center>*The learning package created is empty*</center>


### <center>Learning Facts (flashcards)</center>
> To access to the learning facts of a learning package, click on the *Modify* button :

![The learning facts of the 'TypeScirpt' learning package](https://github.com/raacee/anki_clone/blob/main/images/51modifylearningpackage.PNG)<center>*The learning facts of the 'TypeScirpt' learning package*</center>

We can see the detailled learning facts of the concerned learning package :
- The question in bold,
- the answer in italic just below,
- and the details regarding the learning fact with its review count, the confidence level of the user, the last reviewed date of the learning fact and the next review date based on the confidence level (from 1 to 4, see later).

Also, we distinguish three buttons :
- **Add Fact** : allows to add a learning fact to the package.
- **Modify** : edits the concerned learning fact.
- **Delete** : deletes the concerde learning fact.

#### <center>Add Fact</center>
The creation of a learning fact is easy. The user has to fill the form containing the question and the answer. While all these fields are not filled, the *Add Fact* button is desactivated.
When the user submit the form, the learning fact is created.
> Here is a test :

![Field required](https://github.com/raacee/anki_clone/blob/main/images/52addlearningfact.PNG)<center>*Field required*</center>![Submit button activated](https://github.com/raacee/anki_clone/blob/main/images/53addlearningfact.PNG)<center>*Submit button activated*</center>

![The learning fact is created](images\54addlearningfact.PNG) ///// A FAIRE /////

#### <center>Modify Fact</center>
It is pretty much the same as the creation of a learning fact, but now it is to edit an existing learning fact. The fields are still required, and there is a *Cancel* button to return back.
![The learning fact is created](https://github.com/raacee/anki_clone/blob/main/images/6modifylearningfact.PNG)<center>*The learning fact is created*</center>

#### <center>Delete Fact</center>
By clicking this button, the user deletes the concerned learning fact from the associated learning package.
![The learning fact before "delete"](https://github.com/raacee/anki_clone/blob/main/images/61deletelearningfact.PNG)<center>*The learning fact before "delete"*</center>

![After "delete" : the learning fact has been deleted](https://github.com/raacee/anki_clone/blob/main/images/62deletelearningfact.PNG)<center>*After "delete" : the learning fact has been deleted*</center>

### <center>Achievements</center>
![The learning packages achieved (study is over and done)](https://github.com/raacee/anki_clone/blob/main/images/7achievements.PNG)<center>*The learning packages achieved (study is over and done)*</center>

### <center>About</center>
There is a small text about the project, by who it is made, how, when, why etc... to know a little bit more about the purpose of this application.
![Summary and context of the application](https://github.com/raacee/anki_clone/blob/main/images/8about.PNG)<center>*Summary and context of the application*</center>

### <center>Light/Dark mode</center>
As discussed earlier, there is a **Light** and **Dark** mode on the top right of the navigation bar.
All the previous images are in *Light mode*, but here is some on *Dark mode* :
![Dark mode of the home](https://github.com/raacee/anki_clone/blob/main/images/91darkmode.PNG)<center>*Dark mode of the home*</center>

![Dark mode of the available learning packages](https://github.com/raacee/anki_clone/blob/main/images/92darkmode.PNG)<center>*Dark mode of the available learning packages*</center>

![Dark mode of the learning facts of a learning package](https://github.com/raacee/anki_clone/blob/main/images/93darkmode.PNG)<center>*Dark mode of the learning facts of a learning package*</center>

### <center>Learning Session</center>
When the user clicks on a learning package from its study program (home), it launches a learning session that goes through the learning facts of the learning package.
![Learnig fact's question](https://github.com/raacee/anki_clone/blob/main/images/100questionlearningfact.PNG)<center>*Learnig fact's question*</center>

![Learnig fact's answer and difficulty of the learning fact](https://github.com/raacee/anki_clone/blob/main/images/100answerlearningfact.PNG)<center>*Learnig fact's answer and difficulty of the learning fact*</center>

![End of the learning session](https://github.com/raacee/anki_clone/blob/main/images/100finishlearningfact.PNG)<center>*End of the learning session*</center>


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
