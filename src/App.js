import ReactDOM from 'react-dom';
import React from 'react';
// import './App.css';
import StaffList from './components/StaffListComponent';


class App extends React.Component {
  render (){
    return (
      <>
      <div className="p-3 h2 bg-primary text-white ">Ứng dụng quản lý nhân sự v1.0</div>
      <div class="container-fluid">              
              <StaffList/>
      </div>

      </>
      

    )
  }
}

export default App;
