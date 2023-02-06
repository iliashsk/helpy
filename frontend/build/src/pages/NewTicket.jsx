import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate,useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTicket } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import Card from '../components/Card'

function NewTicket(req,res) {
  const { user } = useSelector((state) => state.auth)
const [searchParams]=useSearchParams();
const category=searchParams.get('trip');
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState(category)
  const [description, setDescription] = useState('')
    

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({ product, description }))
      .unwrap()
      .then(() => {
        // We got a good response so navigate the user
        navigate('/tickets')
        //toast.success('New ticket created!')
      })
      .catch(toast.error)

  }

  return (
    <>
    <br/><br/>
    <div align='center'>
    <Card reverse={true}>
      <BackButton align='center'/>
      <section className='heading'>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input type='text' className='form-control' value={name} disabled />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input type='text' className='form-control' value={email} disabled />
        </div>

        <form onSubmit={onSubmit}>
          <div className='form-group'>
          <label htmlFor='email'>product</label>
          <input type='text' className='form-control' name={category} value={category} disabled />
        </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
      </Card>
      </div>
      
    </>
  )
}

export default NewTicket
