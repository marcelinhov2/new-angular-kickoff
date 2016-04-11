#Conta Azul
AngularJS application using Angular-Kickoff ( https://github.com/marcelinhov2/angular-kickoff )

##App Link
https://infinite-headland-8813.herokuapp.com

##Features
* Desenvolver CRUD de cadastro de veículos;
* Será possível realizar uma busca, filtrando os veículos por combustível e/ou marca;
* Na primeira execução trazer os veiculos da lista anexa;
* A lista de veículos deve apresentar 5 veículos por página;
* Deve ser uma Single Page Application

##Installation

Clone repo using git
```sh
git clone git@github.com:marcelinhov2/test.git
cd test
```

Install dependencies
```sh
make setup
```

###Running the App during Development
This command automatically compiles coffee and LESS, injects bower components, starts livereload server and opens your app in the browser.
```sh
make server
```

###Compiling app for development
This command compiles project. Output goes to ```www/``` folder
```
make compile
```

###Building the App for Production
This command compiles project and optimizes it for production. Output goes to ```dist/``` folder
```
make build
```
