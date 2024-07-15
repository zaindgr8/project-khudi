
import React from 'react'
import TeamSection from '../team1'

const Volunteer = () =>  {

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return(
        <div className="volunteer-page">
            <TeamSection addclassName="v2"/>
        </div>
    )
    
}
   

    
    export default Volunteer;
          
          
          
          
