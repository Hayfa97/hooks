import react,{useState} from 'react'
import { Button,Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Add=({handleAdd})=> {
const [newFilm,setNewFilm]=useState({
title:"",describe:"",posteURL:"",rating:0
})
const handleChange=(e)=>{
  setNewFilm({...newFilm,[e.target.name]:e.target.value})
}
const handleClick=()=>{
  handleAdd(newFilm);
  setNewFilm({
    Title:"",describe:"",posteURL:"",rating:0

  })
handleClose()
}
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="secondary" onClick={handleShow}>
          Add new film
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>My suggestion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Title:</h1>
           <input type='text' name='title' onChange={handleChange}/> 
           <h1>Description:</h1>
           <input type='text' name='Description' onChange={handleChange} />
           <h1>URL:</h1>
           <input type="url" name='posteUrl' onChange={handleChange} />
           <h1>rating</h1>
           <input type='number' min='0' max='10' name='rating' onChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClick}>Add film</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 

export default Add;

