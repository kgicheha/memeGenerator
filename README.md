# memeGenerator

## Git workflow

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