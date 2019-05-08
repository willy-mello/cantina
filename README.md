# Cantina Terminal Search

This is my submission for my Cantina application

### Prerequisites

You're going to need a recent version of node installed


### Installing



```
clone the repo
```

```
npm i
```

```
cd into Cantina
```

```
npm install -g ./
```

Now you should be ready to rock. 

## Running the app
Once you have completed the steps above, you are ready to query our json file.

for every query, you will start with a new global command "search",
to search by class, simply type search followed by a space, then the class i.e.
```
search Box
```
hit enter to run your query.


to search by className, it is the same, except you prefix the desired classname with a period '.'
```
search .columns
```

to search by identifier, it is the same, except you prefix the desired identifier with a forward slash '/'
```
search /videoMode
```

each object with the class of 'Box' will print to the console as JSON and include a red number
indicating how many object were retrieved



## Authors

* **Willy Mello** -


## Acknowledgments

* [learned from](https://medium.com/@thatisuday/creating-cli-executable-global-npm-module-5ef734febe32)

