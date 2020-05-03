## Bundle size server

The idea of the "Bundle size server" is simulate a service to collect the size of the specific library in the npm repository.

It was implemented two apis:

```
/install - install the library in the plugin_packages folder to be analyzed.
/size - collect information related to the module size, minifiy and gzip information.
```


## Important highlight

It was created a server that returns the module size! The minified and gzip size, it was not implemented. <br>
It was added a random number related to that two itens and the implementation of this two points it was not finished.<br>
I spent more time to expected to understand how I can extract those information and then I realize that it was necessary execute the webpack application to obtain those values. I implemented the minify.js file, but I didn't add in the APi created.



## Instructions

Before start the application, you need to install all the libraries in the root server. To do that you need to type:

yarn or npm install

### `yarn start`

Runs the server in the development mode.<br />
The server will be enable in the following address [http://localhost:7001](http://localhost:7001).


### Contact
email: rafaeltomesouza@gmail.com