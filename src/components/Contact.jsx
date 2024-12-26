
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-blue-800 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get In Touch</h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b '>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
