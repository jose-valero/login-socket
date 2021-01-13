import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import { deleteUser, editUser } from '../../../../socketServices/socketService';

function User({ email, uid }) {
  const [emailInput, setEmailInput] = useState(email);
  const [showInput, setShowInput] = useState(false);
  const onChangeEmail = (e) => {
    setEmailInput(e.target.value);
  };
  const onDelete = () => {
    deleteUser(uid);
  };
  const onEdit = () => {
    editUser(uid, emailInput);
    setShowInput(false);
  };
  const showInputEdit = () => {
    setShowInput(true);
  };
  return (
    <Col xs='12' sm='12' md='12' lg='3' className='my-4'>
      <Card border='primary'>
        <Card.Body>
          <Card.Title className=''>
            <b>EMAIL:</b> {email}
          </Card.Title>
          {showInput && (
            <FormControl onChange={onChangeEmail} value={emailInput} />
          )}
          <Card.Text>
            <b>UID:</b> {uid}
          </Card.Text>
          <div>
            <Button
              onClick={onDelete}
              variant='danger'
              className='mx-2 my-auto'
            >
              delete
            </Button>
            {!showInput ? (
              <Button onClick={showInputEdit} variant='primary my-0'>
                edit
              </Button>
            ) : (
              <Button onClick={onEdit} variant='success my-0'>
                save
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default User;
