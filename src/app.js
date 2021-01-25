import React, { useState, useEffect, useRef } from 'react';

const useValueChanged = (
  myData,
  lengthRef,
  upperCaseRef,
  lowerCaseRef,
  speacialCharacterRef,
  numberRef,
) => {
  const [isInitialMount, setisInitialMount] = useState(true);
  // const isInitialMount = useRef(true);
  useEffect(() => {
    // if (isInitialMount.current) {
    //     isInitialMount.current = false;
    // }
    if (isInitialMount) {
      setisInitialMount(false);
    } else {
      lengthRef.current.style.color = myData.match('.{8,}') ? 'green' : 'red';
      upperCaseRef.current.style.color = myData.match('(?=.*?[A-Z])') ? 'green' : 'red';
      lowerCaseRef.current.style.color = myData.match('(?=.*?[a-z])') ? 'green' : 'red';
      speacialCharacterRef.current.style.color = myData.match('(?=.*?[#?!@$%^&*-])')
        ? 'green'
        : 'red';
      numberRef.current.style.color = myData.match('(?=.*?[0-9])') ? 'green' : 'red';
      console.log('Updated');
    }
  }, [myData]);
};

function Form() {
  const [data, setValue] = useState('');
  const lengthRef = useRef();
  const upperCaseRef = useRef();
  const lowerCaseRef = useRef();
  const speacialCharacterRef = useRef();
  const numberRef = useRef();
  useValueChanged(data, lengthRef, upperCaseRef, lowerCaseRef, speacialCharacterRef, numberRef);
  const myStyle = {
    padding: 5,
    borderRadius: 5,
  };
  return (
    <div>
      <label htmlFor="password">Password: </label>
      <input
        style={myStyle}
        type="text"
        id="password"
        placeholder="Please enter your password"
        value={data}
        onChange={(val) => {
          setValue(val.target.value);
        }}
      />
      <p>Password must contain: </p>
      <ul>
        <li ref={lengthRef}>Minimum eight characters in length</li>
        <li ref={upperCaseRef}>At least one upper case letter</li>
        <li ref={lowerCaseRef}>At least one lower case letter</li>
        <li ref={speacialCharacterRef}>At least one special character, #?!@$%^&*-</li>
        <li ref={numberRef}>At least one digit</li>
      </ul>
    </div>
  );
}

export default Form;
