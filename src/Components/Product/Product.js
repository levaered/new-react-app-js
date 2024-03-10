import './Product.css';


function Product({title, price, image, sate}) {
    return (
        <div className="card" style={{padding: "2rem 1rem", position: "relative", boxSizing: "border-box", width: "100%"}}>
            <div className="popular-wrapper">
                <span className="popular">
                    POPULAR
                </span>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="price-wrapper">
                    <span className="price">
                        3330 
                        <span className="currency">
                            ГРН
                        </span>
                    </span>
                    <button className='buy-button'>Купити</button>
                </div>
            </div>
            <div className="product-img" style={{height: "90%", width: "100%", backgroundImage: `url(${image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "right"}}>

            </div>
        </div>
    );
}

export default Product;