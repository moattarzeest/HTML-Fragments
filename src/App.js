import React from 'react';

const EmployeeNames = () => {
  return (
   <ul>
    <li>Alina</li>
    <li>Mahira</li>
    <li>Mustafa</li>
    <li>Hamid</li>
   </ul>
  );
};

const EmployeeIDs = () => {
  return (
   <ul>
    <li>0900</li>
    <li>0913</li>
    <li>1921</li>
    <li>2003</li>
   </ul>
  );
};

const EmployeeContacts = () => {
  return (
   <ul>
   <li>090078601</li>
    <li>19134532</li>
    <li>59215423</li>
    <li>21037373</li>
   </ul>
  );
};


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

