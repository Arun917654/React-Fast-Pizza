import { useState } from 'react';
// import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router';
function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== '' && (
        <div>
          {/* <Link to="/menu"> */}{' '}
          <Button type={'primary'}>Start ordering</Button>
          {/* </Link> */}
        </div>
      )}
    </form>
  );
}

export default CreateUser;
