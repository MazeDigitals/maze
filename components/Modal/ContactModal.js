import React from 'react'
import { Modal, ModalHeader } from 'reactstrap';

const ContactModal = ({ isOpen, toggle }) => {

    return (
        <Modal isOpen={isOpen} centered toggle={toggle}>
            <ModalHeader toggle={toggle}>Get Started with Us</ModalHeader>
            <div className={`form_section border-0 p-3 pt-2`}>
                <p className='mb-4'>Let's get connected and level up your brand.</p>
                <div className={`input_field`}>
                    <input type="text" className='w-100' placeholder='Name' />
                </div>
                <div className={`input_field`}>
                    <input type="text" className='w-100' placeholder='Phone Number' />
                </div>
                <div className={`input_field`}>
                    <input type="text" className='w-100' placeholder='Email' />
                </div>
                <div className={`input_field`}>
                    <textarea type="text" className='w-100' placeholder='Message'>

                    </textarea>
                </div>
                <button className='btn-style w-100'>Lets Connect</button>
            </div>
        </Modal>
    )
}

export default ContactModal