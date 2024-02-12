import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utilities/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!totalCartQuantity) return null;
  return (
    <div className=" flex items-center justify-between bg-stone-800   px-4  text-sm text-stone-200 sm:px-6 md:h-12  md:text-lg">
      <p className="space-x-4 font-semibold uppercase text-stone-300 sm:space-x-6 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link cl to="cart">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
