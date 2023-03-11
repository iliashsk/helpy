import { Link } from 'react-router-dom'

function TicketItem({ ticket }) {
  return (<>
    <tr>
      <td>{new Date(ticket.createdAt).toLocaleString('en-US')}</td>
      <td>{ticket.product}</td>
      <td ><p style={(ticket.status==='new')?{color:'yellow'}:{color:'red'}}>{ticket.status}</p></td>
      <td><Link to={`/ticket/${ticket._id}`} className='btn btn-success btn-sm'>
        View
      </Link></td>
    </tr>
 </> )
}

export default TicketItem



