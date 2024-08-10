import React, { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>You clicked {counter} times</p>

            <button onClick={() => setCounter(counter +1)}>
                Increment
            </button>
			<button onClick={() => setCounter(counter -1)}>
                Decrement
            </button>
        </div>
    );
}

export default App;
