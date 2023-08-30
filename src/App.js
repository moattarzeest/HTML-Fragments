import React from 'react';
import EmployeeNames from './components/EmployeeNames';
import EmployeeIDs from './components/EmployeeIDs';
import EmployeeContacts from './components/EmployeeContacts';

export default function App()
{
  return(
    <React.Fragment>
    <div>
        <h1>Employee Names: </h1>
        <EmployeeNames/>
    </div>

    <div>
        <h1>Employee IDs:</h1>
        <EmployeeIDs/>
    </div>

    <div>
        <h1>Employee Contact Numbers:</h1>
        <EmployeeContacts/>
    </div>
      
   </React.Fragment>

  );
};
