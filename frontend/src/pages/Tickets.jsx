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
      <BackButton />
      <h1>Tickets</h1>
      <div className='tickets'>
        <table class="table table-striped table-sm">
          <th>Date </th>
          <th>Product </th>
          <th>Status </th>
          <th>actions </th>
        
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
        </table>
      </div>
      </Card>
      </div>
    </>
  )
}

export default Tickets
