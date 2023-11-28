# Login Screen Guidelines +
Developers: Kai and Aaron

**Goal: Create a user friendly login screen for users. Should be intuitive what users will have to do in order to log in or sign up.** <br>
<br> TASKS:
* A sign up button
* A log in button
* Users should be able to log in after entering the correct credentials (if it exists)

> Here's a page that might help with building this page: https://contactmentor.com/login-form-react-js-code/

# Routine Screen +
Developers: Xia, Bernice

**Goal: Create a user friendly routine page for users to input new routines or fill out current ones.** <br>
<br> TASKS:
* Button that creates a new routine
  * You should be able to add tasks or do something with that routine
* User friendly page: make the page intuitive

> Here's a page that might help with building this page: https://contactmentor.com/login-form-react-js-code/

<br>

# REACT Stuff

## Starting the server
> See the work that you've done!

Run `npm start` in the terminal with the selected directory being the folder with "src" as a direct child (A folder that is directly inside of it)

* `A common error that comes up when doing this is that you're not on the right terminal.`
  * You can check if you're on the right terminal by looking at the top right of your terminal window and checking if it says "zsh". If that's not what you're seeing, you can fix it by clicking the "+" button next to it and it should fix the issue (dm me if not).
* `Another common error is not being in the right directory.`
  * npm start won't work unless you're in the directory that is the direct parent to the "src" folder. You can check which directory you're in through the terminal, as shown in the picture below:
  * Make sure you're also working in the "zsh" terminal (not node)
![Screenshot](https://github.com/iamRandy/projectGYM/blob/homeScreen/Screenshot%202023-11-28%20at%2010.00.17%20AM.png)
- notice at the bottom, I change directories into the one with that has "src" as a direct child. Now npm start should work!

##

<br>

# GitHub Stuff

## BRANCHES
> Branches are a very important feature in GitHub. We use it a lot when working in a group.

**Always** make sure you are in the right branch before commiting and pushing any files to the repository. You can check which branch you are working in by running `git branch`. This will show you a list of branches, and the branch you are in will be marked with an asterisk:
![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://github.com/iamRandy/projectGYM/blob/homeScreen/branches.jpg)

**If you are on the wrong branch**, you can switch branches by doing: `git checkout NAME_OF_BRANCH`
<br>
<br>
## PUSHING AND PULLING CHANGES
> **Pushing your Changes:**
1. **Add all your changes**<br>
You must add all your changes by writing in the terminal: "`add .`"

2. **Commit your changes**<br>
After adding your changes, you can now commit your changes for pushing:
<br>Use "`commit -m "DESCRIBE CHANGES HERE"`"

3. **Pushing changes**<br>
You are now ready to push... Use "`push`" in order to push your changes to the repository.

In summary: <br>
1. `add .` <br>
2. `commit -m "Write a message about your change here"`<br>
3. `push`

> **Pulling Changes:** <br>

Before you are able to push your changes, sometimes GitHub will ask you to pull changes from the repository first. 
<br> run `pull` in order to grab changes made to the repository.

<sub> If any issues occur during any of these processes, pls shoot me a dm and I'll take a look at it asap. </sub>

## Checking the status of the repository
> This will show you all of the files that have not been commited yet. Useful for debugging sometimes.
> 
You can view the status of a repository by running: `git status`
