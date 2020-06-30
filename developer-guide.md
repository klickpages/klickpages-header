# klickpages-header / Developer Guide

## First steps
- Fork repositorie
- git clone git@bitbucket.org:klicksite/klickpages-header.git
- Acesse the folder klickpages-header and Run:
``` npm run serve ```
  
## Running

Run the above command to start klickpages-header only on localhost:
``` npm run serve ```

## Running locally with klickpages attributes

First run:
``` npm run serve ```

To access the Klickpages-header loading attributes from the local klickpages db, access your welcome-to-klickpages folder, and up the container:
``` docker-compose up ```

Add the following line to your etc/hosts:
``` 127.0.0.1    sample.klickpages.local ```

After performing both procedures you can access the bar locally at the address:
``` http://sample.klickpages.local:8080/ ```

## Deploy NPM

Before all steps, create an account at NPM and ask for an invitation to the organization.
After that, do you have to follow that steps:

Build application:
``` npm run build ```

You must have an account at NPM to run the following command and enter your credentials:
``` npm login ```

Just confirm that you are right:
``` npm whoami ```

Update package.json version:
``` npm publish --access public ```

Any questions, contact the team :)
