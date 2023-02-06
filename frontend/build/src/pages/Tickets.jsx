import { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTickets } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import TicketItem from '../components/TicketItem'
import Card from '../components/Card'

function Tickets() {


  const [email,setEmail]=useState()
  const [bookId,setBookId]=useState()
  const { tickets } = useSelector((state) => state.tickets)
const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // NOTE: only need one useEffect here

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  /////onSumit event here////
  const onSubmit=()=>{
    /////
    console.log("lkshdlaskh")
  }

  const onChange=(e)=>{
    ///
    e.preventDefault();
    setEmail(e.target.value)
    setBookId(e.target.value)
  }


  // NOTE: no need for loading state, we can check for absence of tickets
  // If we don't have tickets we are loading, if we do have tickets we just
  // need to update the tickets with latest tickets in the background
  if (!tickets) {
    return <Spinner />
  }

  return (
    <>
    <br/>
    <br/>
    <br/>
    <div align='center'>
    <Card reverse={true} align='center'>
      <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={user.email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
             
              name='number'
              value={bookId}
              onChange={onChange}
              placeholder='enter your booking Id'
              required
            />
          </div>
          <div className='form-group' >
            <button className='btn btn-block' style={{backgroundColor:'lightblue'}}>Submit</button>
          </div>
        </form>
        </Card>
    </div>
    <br/>

    <div align='center'>
    <Card reverse={true} align='center'>
      <BackButton />
      <h1>Tickets</h1>
      <div className='tickets'>
        <div className='ticket-headings'>
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
      </Card>
      </div>
    </>
  )
}

export default Tickets
