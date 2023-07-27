import { Fieldset, Form, Label, TextInput } from '@trussworks/react-uswds';
import './Component.css'

function EditIncomeInformation() {

  const handleSubmit = () => {

  };

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset legend='Financial Information' legendStyle='large'>
        <div className='grid-row'>
            <Label htmlFor='name' className='left'>Name</Label>
        </div>
        <div className='grid-row'>
            <TextInput id='name' name='name' type='text' inputSize='small'></TextInput>
        </div>
        <div className='grid-row'>
          <Label htmlFor='ssn'>Date of Birth (mm/dd/yyyy)</Label>
        </div>
        <div className='grid-row'>
          <TextInput id='ssn' name='ssn' type='text' inputSize='small'></TextInput>
        </div>
        <div className='grid-row'>
          <Label htmlFor='address'>Address</Label>
        </div>
        <div className='grid-row'>
          <TextInput id='address' name='address' type='text' inputSize='small'></TextInput>
        </div>
        <div className='grid-row'>
          <Label htmlFor='ssn'>Social Security Number (SSN)</Label>
        </div>
        <div className='grid-row'>
          <TextInput id='ssn' name='ssn' type='text' inputSize='small'></TextInput>
        </div>
        <div className='grid-row'>
          <Label htmlFor='filing-status'>Filing Status</Label>
        </div>
        <div className='grid-row'>
          <TextInput id='filing-status' name='filing-status' type='text' inputSize='small'></TextInput>
        </div>
        <div className='grid-row'>
          <Label htmlFor='income'>Income</Label>
        </div>
        <div className='gird-row'>
          <TextInput id='income' name='income' type='text' inputSize='small'></TextInput>
        </div>
        <div className='grid-row'>
          <Label htmlFor='deduction'>Deductions</Label>
        </div>
        <div className='grid-row'>
          <TextInput id='deduction' name='deduction' type='text' inputSize='small'></TextInput>
        </div>
      </Fieldset>
    </Form>
  );
}

export default EditIncomeInformation;