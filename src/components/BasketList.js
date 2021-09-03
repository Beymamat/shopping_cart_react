import BasketItem from "./BasketItem";

export default function BasketList(props) {
     const {order}=props;
     
     const totalPrice=order.reduce((sum, product)=>{
         return sum+ product.price * product.quantity
     }, 0)

     return(
         <ul className="collection basket-list">
            <li className="collection-item active">
                Basket
            </li>
            {
                order.length ? order.map(item=>{
                    return(
                        <BasketItem key={item.id} {...item} />
                    )
                }) : <li className="collection-item">Basket is empty</li>
            }
            <li className="collection-item active">
                Total Price: {totalPrice} 
            </li>
            <i className="material-icons basket-close" onClick={props.handleBasketShow}> close</i>
         </ul>
     )

}