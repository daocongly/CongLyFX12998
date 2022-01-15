// import logo from './logo.svg';
import ReactDOM from 'react-dom';
import React from 'react';
// import './App.css';
import {STAFFS} from './share/staffs';

class App extends React.Component {
  render (){
    return (
      <>
      <div className="p-3 h2 bg-primary text-white ">Ứng dụng quản lý nhân sự v1.0</div>
      <div class="container">      
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card-header m-2">Header</div>
                <div className="card-header m-2">Content</div> 
                <div className="card-header m-2">Footer</div>
                   
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card-header m-2">Header</div>
                <div className="card-header m-2">Content</div> 
                <div className="card-header m-2">Footer</div>

                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card-header m-2">Header</div>
                <div className="card-header m-2">Content</div> 
                <div className="card-header m-2">Footer</div>


                </div>
            </div>
            <p>Bấm vào tên nhân viên để xem thông tin</p>

        </div>

      </>
      

    )
  }
}

export default App;
