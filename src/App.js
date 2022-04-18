import React from 'react';
// import './App.css';
import {STAFFS} from './share/staffs';
import StaffList from './components/StaffListComponent';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: STAFFS
    }
  }
  render (){
    return (
      <>
      <div className="p-3 h2 bg-primary text-white ">Ứng dụng quản lý nhân sự v1.0</div>
      <div class="container-fluid">              
              <StaffList staff={this.state.staff}/>
      </div>

      </>
      

    )
  }
}

export default App;
