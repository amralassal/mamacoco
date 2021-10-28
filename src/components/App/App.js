import React, {Component} from 'react';
import Router from '../Router/router';
import Navbar from '../Navbar/navbar';
import './App.css';
import '../../css/Main.css';
import '../../scss/Main.scss';

class App extends Component {

  render() {
    return (
        <div className="container-fluid">

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
                integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
                crossOrigin="anonymous"
            />

          {/*<div className="row">*/}
          {/*  <Navbar/>*/}
          {/*</div>*/}

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Router/>
          </main>

        </div>
    );
  }
}

export default App;
