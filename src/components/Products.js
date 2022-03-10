import { Link } from "react-router-dom"

export const Products = () => {

    return (
        <>
            <div>Products Page</div>
            <input type='search' placeholder="Search for products"></input>

            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
            </nav>

        </>
    )


}