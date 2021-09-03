export default function(props) {
   const {id, name, price, quantity,incrementQuantity, decrementQuantity}= props;

   return(
       <li className="collection-item">
           {name} &nbsp;
           {price}$ 
           x 
           &nbsp;
           <i className="material-icons basket-minus" onClick={()=>props.decrementQuantity(id)}>
           remove
               </i>
           &nbsp; 
           {quantity}
           &nbsp;
           <i className="material-icons basket-plus" onClick={()=>props.incrementQuantity(id)}>
                   add
               </i>
               
             &nbsp;
           = 
           &nbsp;
           {price*quantity} <b>$</b>
           <span className="secondary-content">
               <i className="material-icons basket-delete" onClick={()=>props.removeFromBasket(id)}>
                   delete_forever
               </i>
           </span>
       </li>
   )
  

}