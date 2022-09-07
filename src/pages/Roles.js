import React , { Component }  from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import RoleAccordion from '../components/RoleAccordion';
// import RolesApi from '../services/rolesApi'


const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + localStorage.getItem("refreshToken")

};

export default class DropDown extends Component {

  constructor() {
    super()
    // this.state = {
    //   inputValue: "",
    //   empList: [],
    //   verified: true
    // }
  }


  selectedRole() {
    var mylist = document.getElementById("r-list");
    document.getElementById("role").value = mylist.options[mylist.selectedIndex].text;
    console.log(mylist.options[mylist.selectedIndex].text)
  };

  state = {
    values: []
  }
  i = 1;
  componentDidMount() {
    fetch('http://localhost:9091/rest/v1/role/get-all-roles', { headers })
      .then(function (res) {
        
        return res.json();
      }).then((json) => {
        console.log(json);
        this.setState({
          values: json
        })
      });
  }
  render() {


    return <div className="drop-down">
      <div className="r-roles">
        <form className='r-form'>
          {
            <select className='r-list' id='dropdown'    >
              {
                
                this.state.values.map((obj) => {
                  return <option key={this.i++}>{obj.roleName}</option>

                })
              }
            </select>

          }
          {/* <button onClick={this}>OnClick</button> */}
           
          {/* <AiFillPlusCircle className='AiFillPlusCircle' size="20px"/> */}
          
          
          
        </form>
        {/* className='plus-btn' */}
        {/* <button className="AiFillPlusCircle ">

        
       
        </button> */}
        <hr className='hr' />
        <div className="role-name">

          <div className='Role-Name'>
          <span >Role Name:</span>
          <input type="text" id="role" size="12"  />
          </div>
          {/* <ul className='flex-container space-between'>
            <li className='flex-item'>Role Name:</li>
            <li>
              <input type="text" id="role" size="20" className='flex-item' />
            </li>
          </ul> */}
        </div>
        <br /> <br />
        <RoleAccordion />

      </div>
    </div>
  }
}
