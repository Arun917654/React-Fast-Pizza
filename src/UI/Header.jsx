import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/username';

export default function Header() {
  return (
    <header className=" sm:px-6flex flex items-center justify-between border-b border-stone-200  bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Company
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
