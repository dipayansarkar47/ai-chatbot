import React, { useState } from 'react'
import { RiChatVoiceFill } from 'react-icons/ri'
import { FaCircleUser } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
// import { sendMsgToOpenAI } from '../openai'
import { IoCopy } from "react-icons/io5";
import { AiTwotoneEdit } from "react-icons/ai";
import axios from 'axios';
const Chat = () => {
    // const API_KEY = "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";
    // const options = {
    //     method: 'POST',
    //     url: 'https://api.openai.com/v1/engines/davinci/completions',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': "Bearer " + API_KEY,
    //     },

    //     data: {
    //         messages: [
    //             {
    //                 role: 'user',
    //                 content: 'Hello!'
    //             },
    //             {
    //                 role: 'assistant',
    //                 content: 'Hello there! How may I assist you today?'
    //             },
    //             {
    //                 role: 'user',
    //                 content: 'That is very cool! Tell me more.'
    //             }
    //         ],
    //         temperature: 1
    //     }
    // };
    const [inputText, setInputText] = useState('');
    const [response, setResponse] = useState('');
    const [typing, setTyping] = useState(false);
    const [prompt, setprompt] = useState("");
    const encodedParams = new URLSearchParams();
    encodedParams.set('in', inputText);
    encodedParams.set('op', 'in');
    encodedParams.set('cbot', '1');
    encodedParams.set('SessionID', 'RapidAPI1');
    encodedParams.set('cbid', '1');
    encodedParams.set('key', 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP');
    encodedParams.set('ChatSource', 'RapidAPI');
    encodedParams.set('duration', '1');

    const options = {
        method: 'POST',
        url: 'https://robomatic-ai.p.rapidapi.com/api',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '824dddee65msh76dbe040b14bfe4p12ab6ajsnc6532155d4f8',
            'X-RapidAPI-Host': 'robomatic-ai.p.rapidapi.com'
        },
        data: encodedParams,
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };
    const handleSendRequest = async () => {
        // try {
        //   const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'Authorization': "Bearer " + API_KEY,
        //     },
        //     body: JSON.stringify({
        //       prompt: inputText,
        //       max_tokens: 150, // Adjust based on your needs
        //     }),
        //   });

        //   const data = await response.json();
        //   setResponse(data.choices[0].text.trim());
        // } catch (error) {
        //   console.error('Error sending request to OpenAI API:', error);
        // }
        // try {
        //     const response = await axios.request(options);
        //     setResponse(response.data.content);
        // } catch (error) {
        //     console.error(error);
        // }
        try {
            setprompt(inputText);
            setTyping(true);
            const response = await axios.request(options);
            setTyping(false);
            console.log(response.data.out);
            setInputText("");
            setResponse(response.data.out);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div class="flex">
            <div class="md:w-5/12 lg:inline md:inline hidden h-screen border-r-2 border-r-gray-700">
                <div className='m-5 flex flex-row gap-1'>
                    <RiChatVoiceFill className='h-10 text-4xl' />
                    <h2 className='text-3xl'>VoiceGPT</h2>
                </div>
                <div className='flex flex-col justify-center mx-5'>
                    <button type="button" className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'> + New Conversation</button>
                    <br />
                    <button type="button" className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>How to make Projects?</button>
                    <button type="button" className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>Suggetions about content</button>
                    <button type="button" className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>Who is Codewithbiki?</button>
                    <button type="button" className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>Summarize this paragraph</button>
                    <button type="button" className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>Earthquake in Japan</button>
                    <button type="button" className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>What is hooks in ReactJS?</button>
                </div>
            </div>
            <div class="w-full bg-transparent h-screen flex flex-col justify-start items-start">
                <div className='flex flex-col lg:pt-16 mb-16  gap-1 w-full'>
                    <div className="chats m-5 bg-blue-950 border-2 border-blue-700 rounded-sm">

                        <div className="chat bg-blue-950 flex flex-row gap-2 p-5">
                            <RiChatVoiceFill className='text-3xl bg-transparent' />
                            <p className='w-fit bg-transparent'>Hey! I'm your ChatBot. How can I assist you?</p>
                        </div>
                        <div className='flex flex-row justify-end items-end gap-2 m-2 bg-blue-950'>

                            <IoCopy className='flex flex-row ml-auto bg-transparent' />
                            <AiTwotoneEdit className='bg-transparent' />
                        </div>
                    </div>
                    {prompt && <div className="chats m-5  border-2 border-gray-700 rounded-sm">
                        <div className="chat flex flex-row items-center gap-2 p-5 ">
                            <FaCircleUser className='text-3xl' />
                            <p className="">{prompt}</p>
                        </div>
                        <div className='flex flex-row justify-end items-end gap-2 m-2 bg-gray-00'>

                            <IoCopy className='flex flex-row ml-auto bg-transparent' />
                            <AiTwotoneEdit className='bg-transparent' />
                        </div>

                    </div>}
                    {prompt && <div className="chats m-5 bg-blue-950 border-2 border-blue-700 rounded-sm">

                        <div className="chat bg-blue-950 flex flex-row gap-2 p-5">
                            <RiChatVoiceFill className='text-3xl bg-transparent' />
                            {typing && (<p className='w-fit bg-transparent'>Typing...</p>)}
                            {response && (<p className="txt w-fit bg-transparent">
                                {response}
                            </p>)}
                        </div>
                        <div className='flex flex-row justify-end items-end gap-2 m-2 bg-blue-950'>

                            <IoCopy className='flex flex-row ml-auto bg-transparent' />
                            <AiTwotoneEdit className='bg-transparent' />
                        </div>
                    </div>}
                </div>
                <div className="chatFooter m-5 p-2 mx-2 w-11/12 bg-transparent rounded flex flex-col justify-center items-center mt-auto">
                    <div className="flex flex-row gap-3 w-10/12 bg-transparent">
                        <input
                            className='bg-gray-100 border border-gray-300 outline-none bg-transparent text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white '
                            type="text" placeholder='Type or Speak your query...' name="" id="" value={inputText}
                            onChange={handleInputChange} />
                        <button type="button">
                            <MdKeyboardVoice className='text-3xl bg-transparent' />
                        </button>
                        <button onClick={handleSendRequest}>
                            <IoSend className='text-2xl bg-transparent' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat