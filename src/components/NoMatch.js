import { useNavigate } from "react-router-dom"

export const NoMatch = () => {
    const navigate = useNavigate();
    return(
        <><div>this page does not exist</div>
        <button onClick={() => navigate(-1)}>Go back</button></>
    ) 
}