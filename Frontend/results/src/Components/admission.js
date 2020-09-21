import React from 'react'
import  {useFormik}  from 'formik'

import './admission.css'

const  initialValues={
   name:'',
   lastname:'',
   class:'',
   yop:'',
   percentage:''
}

const onSubmit =values=>{
   console.log('form data',values)
}

const validate=values=>{
   let errors ={}
    
 if(!values.name) {
    errors.name='Required'
 }
 if(!values.lastname) {
   errors.lastname='Required'
}
if(!values.class) {
   errors.class='Required'
}
if(!values.yop) {
   errors.yop='Required'
}
if(!values.percentage) {
   errors.percentage='Required'
}

   return errors
}

function Admission() {

 const formik= useFormik({
     initialValues,
     onSubmit,
     validate
      
      
   })

  console.log('formik values',formik.touched)

   return (
      <div className="admission">
      <form onSubmit={formik.handleSubmit}>

 

       <label htmlFor='name'>Name</label>
       <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
       {formik.errors.name ? <p>{formik.errors.name}</p> : null}

       <label htmlFor='lastname'>lastname</label>
       <input type='text' id='lastname' name='lastname' onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur}/>
        {formik.errors.lastname ? <p>{formik.errors.lastname}</p> : null}
       
       
       
       <label htmlFor='class'>class</label>
       <input type='text' id='class' name='class' onChange={formik.handleChange} value={formik.values.class} onBlur={formik.handleBlur}/>
       {formik.errors.class ? <p>{formik.errors.class}</p> : null}

       <label htmlFor='yop'>year of passing</label>
       <input type='text' id='yop' name='yop' onChange={formik.handleChange} value={formik.values.yop} onBlur={formik.handleBlur}/>
       {formik.errors.yop ? <p>{formik.errors.yop}</p> : null}

       <label htmlFor='percentage'>percentage of marks</label>
       <input type='text' id='percentage' name='percentage' onChange={formik.handleChange} value={formik.values.percentage} onBlur={formik.handleBlur}/>
{formik.errors.percentage ? <p>{formik.errors.percentage}</p> : null}
       <button type='submit' disabled={!(formik.dirty && formik.isValid)}>submit</button>
       </form>
      </div>
   )
}

export default Admission
