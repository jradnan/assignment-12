import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const { name, image, price, quantity, description, _id } = product
    return (
        <div className="card w-full bg-base-100 shadow-2xl">
            <figure>
                <img style={{ height: "300px" }} src={image} alt="imagedfdjere" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name.length > 30 ? name.slice(0, 40) + '...' : name}</h2>
                <p>Price : ${price}</p>
                <p>Quantity : {quantity} p</p>
                <p>{description.length > 100 ? description.slice(0, 100) + "...." : description} </p>
                <div className="card-actions justify-start mt-3">
                    <Link to={`/product/${_id}`} className="btn btn-primary">View Product</Link>
                </div>
            </div>
        </div>

    )
}

export default ProductCard