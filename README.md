# piriku-sample-node
A sample project to show piriku usage

## Install

### Using npm (recommended)

```
npm install -g piriku
```

### Using docker

  * Make the alias

  ```
  alias piriku='docker run -it -v $PWD:/tmp -v $HOME/.ssh:/root/.ssh -v /run/user/$UID/keyring/ssh:/run/user/$UID/keyring/ssh -e UID=$UID -e SSH_AUTH_SOCK=/run/user/$UID/keyring/ssh --rm cgarnier/piriku' 
  ```

  * save it to bash_aliases

  ```
  alias piriku >> ~/.bash_aliases
  ```

  * try it

  ```
  piriku -h
  ```

## Usage
  * Make sure your ssh id is set on the remote server

  ```
  ssh-copy-id pi@my-remote
  ```

  * Clone this project

  ```
  git clone https://github.com/cgarnier/piriku-sample-node.git && cd piriku-sample-node
  ```

  * Create the app on the remote

  ```
  piriku create
  ```

  Follow the questions

  * Push it to the remote

  ```
  git push piriku master
  ```

  * Voila!
  You can now open the deployed app on your browser http://my-rmote:3700
