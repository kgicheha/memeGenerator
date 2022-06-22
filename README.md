# memeGenerator

## Basic Goals: 
- Frontend app accessing public API
- Communicate via JSON
- Utilize three or more unique event listeners that are interactive
- Implement one or more array iteration
- Follow best coding practice

## Explanation:

This app is a  meme generator that generates a random meme upon arrival to the url, as well as upon clicking a generate meme button. The site will also have the ability to “like” a meme, increment likes, and search the memes (on API & database) by keyword. One last feature is to submit a new meme via a form. The form will return add a new meme under the My Memes section of the single page generator app.

## Repo:
https://github.com/kgicheha/memeGenerator

## API:
https://api.imgflip.com/get_memes

## Specific Fulfillment:
- Event Listener One provides a button to click which generates a random meme
- Event Listener Two provides a button to click to increment like count per meme
- Event Listener Three provides a button to click to generate a form which in turn will provide a submit to allow the user to add a new meme
- Iteration exists via the search database by keyword utilizing fetch to search both the API and JSON

## Git workflow helpful highlights

### Making local changes

- switch to a new branch `git checkout -b new-branch-name`
- to track changes to branch `git add .`
- to commit changes to branch `git commit -m 'commit message'`

### Pushing changes to remote

- to push changes `git push origin new-branch-name`

### Merging remotely

- initiate pull request on github.com
- add reviewers on github.com
- once approved confirm merge to main on github.com

### Pulling changes from remote

- switch to main locally `git checkout main`
- pull from remote `git pull origin main`

### code and repeat

### delete branches

- github.com just click delete
- delete locally on machine `git branch --delete new-branch-name`
- to see what branch `git branch`


## run json server
- json-server --watch db.json