# JavaScript-Java example project

This project is the initial part of our work for the module Ambient Assisted Living at Technical University of Berlin, summer term 2018. (Original project home: [https://gitlab.tubit.tu-berlin.de/aal-ss-18/data-engine-user-interface](https://gitlab.tubit.tu-berlin.de/aal-ss-18/data-engine-user-interface))
 
You can use this code as an example for a combined JavaScript-Java project based on Maven.

npm and Webpack are already configured for React-Babel-Bootstrap development.
Java classes could be placed into `src/main/java` and `src/test/java`.
You can run `./mvnw package` to create a JAR with Java and JavaScript classes inside (you probably should configure pom.xml to serve your needs).

  
## How to use

### Development
First run `npm install` to install all needed modules for development, and then run `npm run server` to start the local development webserver. Once the bundle is packed, the Browser will open the URL automatically. Furthermore, it will automatically repack and refresh the webpage as soon any file changes are detected.

### Build
You can use attached [Maven Wrapper](https://github.com/takari/maven-wrapper) to build this project. No actual Maven installation is needed on your system (however you need JDK 8 to be installed).

Just run `./mvnw package` to build the project.
 
## Built With

* [React](https://reactjs.org/) - JavaScript library for building user interfaces
* [Chart.js](https://www.chartjs.org/) - Simple yet flexible JavaScript charting for designers & developers
* [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2/) - React wrapper for Chart.js 2
* [Bootstrap](https://getbootstrap.com/) - Sleek, intuitive, and powerful front-end framework
* [Babel](https://babeljs.io/) - JavaScript compiler
* [webpack](https://webpack.js.org/) - JavaScript bundler
* [npm](https://www.npmjs.com/) - package manager for JavaScript 
* [Maven](https://maven.apache.org/) - Build automation tool and dependency management


## Authors

* **Anton Rudacov** - [@antonrud](https://github.com/antonrud)
* **Daniel Sebastian Lienau** [@dslienau](https://github.com/dslienau)
* **Daniel Yermakov** - [@yermakov_d](https://gitlab.tubit.tu-berlin.de/yermakov_d)
* **Tom Gill** - [@gilltom86](https://gitlab.tubit.tu-berlin.de/gilltom86)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

