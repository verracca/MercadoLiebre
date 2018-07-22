import React from 'react'

const BreadCrumb = (props) =>{
    return(
        <div>
        
            {
                props.categories.map(category=>{
                return category + " > "
                })

            }
        
        </div>
        )
    }


export default BreadCrumb