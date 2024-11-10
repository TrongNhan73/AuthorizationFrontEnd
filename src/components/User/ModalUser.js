import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './User.scss'


const ModalUsers = (props) => {
    return (
        <Modal show={true} onHide={props.handleClose} centered size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container row modal-user '>
                    <div className='form-group col-sm-6 '>
                        <label htmlFor='email' className='form-label'>Email: (<span className='red'>*</span>)  </label>
                        <input id='email' className='form-control ' />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='phone' className='form-label'>Phone: (<span className='red'>*</span>) </label>
                        <input id='phone' className='form-control ' />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='username' className='form-label'>User name: (<span className='red'>*</span>)</label>
                        <input id='username' className='form-control ' />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='address' className='form-label'>Address: </label>
                        <input id='address' className='form-control ' />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='sex' className='form-label'>Gender: (<span className='red'>*</span>)</label>
                        <select className='form-select'>
                            <option value={'other'}>Other</option>
                            <option value={'male'}>Male</option>
                            <option value={'female'}>Female</option>
                        </select>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='group' className='form-label'>Group: (<span className='red'>*</span>)</label>
                        <select className='form-select'>
                            <option>Dev</option>
                            <option>Leader</option>
                            <option>Project Manager</option>
                        </select>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='password' className='form-label'>Password: (<span className='red'>*</span>)</label>
                        <input id='password' className='form-control ' />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='password-comfirm' className='form-label'>Comfirm Password: (<span className='red'>*</span>)</label>
                        <input id='password-comfirm' className='form-control ' />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.handleClose()}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    props.handleClose();
                    props.handleComfirm(props.dataModal);
                }}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalUsers;