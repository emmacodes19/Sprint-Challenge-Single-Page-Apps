import React, { useState, useEffect } from "react";
import {withFormik, Form, Field} from "formik";
import axios from 'axios'
import * as Yup from "yup";

// export default function SearchForm() {


  const NewUsers = ({values, errors, touched, status}) => {

    const[user, setUser] = useState([]);

    useEffect(() =>{
        // if (status) {
        //     setUser([...user, status])
        // }

        status && setUser(user => [...user, status])
    }, [status]);
 
  return (
    // <section className="search-form">
     // Add a search form here



     <div className="newUserForm">

<Form>
    <Field type="text" name="name" placeholder="Name" />
    {touched.name && errors.name && (<p className="error">{errors.name}</p>)}


    <Field component='select' ClassName="choose" name='food' placeholder="choose from">
    <option value='rick'> Rick</option>
    <option value='morty'> Morty</option>
    <option value='pickle'> Pickle</option>

    </Field>

    {touched.password && errors.password && (<p className="error">{errors.choose}</p>)}

  

    <button type= 'submit'>Submit !</button>  
</Form>

{/* Mapping and getting the data */}
{user.map(people => (
    <ul key={people.id}>
        <li>Name: {people.name}</li>
  
        <li>Choose: {".".repeat(people.choose)}</li>
    </ul>
))}
</div>

)}
const YupNewUser = withFormik({
mapPropsToValues({name,choose}){
return{
name: name || "",

choose: choose|| "",

};
},
validationSchema: Yup.object().shape({
name: Yup.string().min(3, "Name too short, must have at least 2 characters").required,

choose: Yup.string().oneOf(['Rick', 'Morty', 'Pickle'])
.required('Select One')

}),

handleSubmit(values, {setStatus}){
axios
.post("https://reqres.in/api/users/", values)
.then(res =>
    {setStatus(res.data);
})

.catch(err => console.log(err.response));
}

})(NewUsers)

export default YupNewUser;
console.log("This is the HOC",YupNewUser);








  
