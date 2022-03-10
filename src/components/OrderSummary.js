import { useNavigate } from "react-router-dom"

export const OrderSummary = () => {

    const navigate = useNavigate();
    
    return(
        <><div>Orderv Summary Page</div>
        <button onClick={() => navigate(-1)}>Go back</button></>
    ) 
}