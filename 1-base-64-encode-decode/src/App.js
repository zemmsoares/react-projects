import { useEffect, useState } from "react";

function App() {
    const [input, setInput] = useState('');

    function Encode() {
        const input = document.getElementById('input').value;
        const output = window.btoa(input);
        document.getElementById('output').value = output;
    }
    function Decode() {
        const input = document.getElementById('input').value;
        const output = window.atob(input);
        document.getElementById('output').value = output;
    }

    return (
        <div className="flex items-center justify-center bg-gray-100 h-screen ">
            <div className="flex-col w-11/12 sm:w-10/12">
                <div className="sm:full m-2">
                    <p className="text-2xl font-bold ">Base64 Encoder / Decoder</p>
                    <p className="">BASE64</p>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 px-2 pt-2 sm:pt-2 pb-2">
                        <textarea id="input" className="h-48 w-full border p-2 border-gray-200" placeholder="Input goes here..."/>
                    </div>
                    <div className="w-full lg:w-1/2 px-2 pt-0 sm:pt-2 pb-2">
                        <textarea id="output" className="h-48 w-full border p-2 border-gray-200" placeholder="Output will take place here..." />
                    </div>
                </div>
                <div className="sm:full ">
                    <button className="my-2 mx-2 bg-gray-200 px-3 py-2"
                        onClick={() => Encode()}>Encode</button>
                    <button className="my-2 bg-gray-200 px-3 py-2"
                        onClick={() => Decode()}>Decode</button>
                </div>
            </div>
        </div>
    );
}

export default App;
