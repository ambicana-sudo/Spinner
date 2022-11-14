import { useState } from 'react';
// import UserForm from './user-form';

const UserDetails = ()=>{
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [displayName, setDisplayName] = useState('')
    const [displayEmail, setDisplayEmail] = useState('')

    const handleSubmit = (e)=> {
      e.preventDefault();
      setDisplayName(name)
      setDisplayEmail(email)
  }


  return(
    <section className='user-detail' style={{textAlign: `center`}}>
      <h2>User Details</h2>
			<p>name: {displayName}</p>
			<p>email: {displayEmail}</p>

			<form onSubmit={e => handleSubmit(e)}>
				<input placeholder="name" onChange={e => setName(e.target.value)} />
				<input placeholder="email" onChange={e => setEmail(e.target.value)} />
				<button onClick={handleSubmit}>Show</button>
			</form>
		</section>
  )
}

export default UserDetails;