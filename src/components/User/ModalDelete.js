import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const ModalDelete = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Comfirm delete user {props.dataModal.username}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure delete this user?</Modal.Body>
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

export default ModalDelete;