import React from 'react'

export default function BestSellers(props) {
    return (
        <div style={{marginBottom: '15px'}}>
         <li>{props.book.title}<br/>
             {props.book.author}
         </li>
     </div>
    )
}