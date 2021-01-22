import React, { useState, useEffect } from 'react';

// const useDocumentTitle = title => {
//     useEffect(() => {
//         document.title = title;
//     });
// }

// function App () {
//     const [count, setCount] = useState(0);
//     const increment = () => setCount(count + 1);
//     const title = `You clicked ${count} times`;
//     useDocumentTitle(title);
//     var myStyle = {
//         padding: 10,
//         backgroundColor: 'green',
//         color: 'white',
//         borderRadius: 5
//     }
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={increment}>
//                 Click me
//       </button>
//         </div>
//     );
// }

const useValueChanged=(myData) => {
    useEffect(() => {
        const lenght = myData.match('.{8,}');
        const upperCase = myData.match('(?=.*?[A-Z])');
        const lowerCase = myData.match('(?=.*?[a-z])');
        const speacialCharacter = myData.match('(?=.*?[#?!@$%^&*-])');
        const number = myData.match('(?=.*?[0-9])');
        document.getElementById('lenght').style.color = lenght ? 'green' : 'red';
        document.getElementById('upperCase').style.color = upperCase ? 'green' : 'red';
        document.getElementById('lowerCase').style.color = lowerCase ? 'green' : 'red';
        document.getElementById('speacialCharacter').style.color = speacialCharacter ? 'green' : 'red';
        document.getElementById('number').style.color = number ? 'green' : 'red';
    });
}

function Form () {
    const [data, setValue] = useState('');
    useValueChanged(data);
    const myStyle = {
        padding: 5,
        borderRadius: 5
    }
    return (
        <div>
            <label>Password: </label>
            <input style={myStyle} type="text" placeholder="Please enter your passord"
             value={data} onChange={(val) => { setValue(val.target.value) }} />
            <p>Password must contain: </p>
            <ul>
                <li id="lenght">Minimum eight characters in length</li>
                <li id="upperCase">At least one upper case letter</li>
                <li id="lowerCase">At least one lower case letter</li>
                <li id="speacialCharacter">At least one special character, #?!@$%^&*-</li>
                <li id="number">At least one digit</li>
            </ul>
        </div>
    );
}

export default Form;