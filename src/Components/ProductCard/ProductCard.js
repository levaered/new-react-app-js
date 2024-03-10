import './ProductCard.css';
import scales from '../../scales.svg';
import heart from '../../favorite.svg';
import stars from '../../stars.svg';
import feedback from '../../feedback.svg';
import cart from '../../cart.svg';

function ProductCard() {
    return (
        <div className='product-card'>
            <div className='product-card-header'>
                <div className='discount'>-16%</div>
                <div className='heart-compare'>
                    <img className='icon' src={heart} alt="Heart" />
                    <img className='icon' src={scales} alt="Scales" />
                </div>                                             
            </div>

            <img className='product-image' src='https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Product' />

            <div className='product-info'>
                <span className='product-title'>
                    Title
                </span>
                <div className='feedback'>
                    <img className='stars' src={stars} alt="Stars" />
                    <div className='feedbacks-count'>
                        <img className='feedback' src={feedback} alt="Feedback" />
                        <span>2</span>
                    </div>
                </div>
                <div className='prices'>
                    <div className='left'>
                        <span className='price'>
                            450 ₴
                        </span>
                        <span className='discount-price'>
                            379 ₴
                        </span>
                        <span className='count'>Есть в наличии</span>
                    </div>
                    <div className='right'>
                        <img className='cart' src={cart} alt='Cart'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;