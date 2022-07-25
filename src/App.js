import './App.css';
import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'; 
import "react-datepicker/dist/react-datepicker.css";
import TodoList from './components/TodoList';
import Dropdown from './components/Dropdown';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []; 
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [selecteDate, setSelectDate] = useState(null);
  const [value, onChange] = useState(new Date());
  const [selected, setSelected]=useState('Assign User');
 



  useEffect(() =>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return ( 
  <div className='container'>

    <div className='app-wrapper'>
      <div>
        <Header/>
      </div>
      <div>
        <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}/>
      </div>
      <div>
        <TodoList todos={todos} 
        setTodos ={setTodos}
        setEditTodo = {setEditTodo} 
        />
        <div className='deep'>
          <h3>Date</h3>
          
          <DatePicker selected={selecteDate} 
          onChange={date => setSelectDate(date)}
          dateFormat='dd/MM/yyyy'
          minDate={new Date()}
          showYearDropdown
          scrollableMonthYearDropdown
          />

          <div className='time-task'>
            <h3>Time</h3>
            <DateTimePicker onChange={onChange} value={value} />
          </div>

          <div>
            <Dropdown selected={selected} setSelected={setSelected}/>
          </div>
        </div>
        <div>
          <button className='saveButton' type='submit'>Save</button>
          <button className='saveCancel' type='delete'>Cancel</button>
        </div>
      </div>
    </div>
    
  </div>
  );
  
}

export default App;
