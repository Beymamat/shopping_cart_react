export default function(props) {
   const {id, name, price, quantity}= props;

   return(
       <li className="collection-item">
           {name} {price}$ x {quantity}= {price*quantity} <b>$</b>
           <span className="secondary-content">
               <i className="material-icons">
                   send
               </i>
           </span>
       </li>
   )
  

}