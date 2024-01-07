import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiChatVoiceFill } from 'react-icons/ri'
import { FaCircleUser } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import useClipboard from "react-use-clipboard";
// import { sendMsgToOpenAI } from '../openai'
import Navbar from './Navbar'
import { IoCopy } from "react-icons/io5";
import axios from 'axios';
import { FaGithubSquare } from 'react-icons/fa';
const Chat = () => {
    const [inputText, setInputText] = useState('');
    const [response, setResponse] = useState('');
    const [typing, setTyping] = useState(false);
    const [prompt, setprompt] = useState("");
    const [texttocopy, setTexttocopy] = useState("");
    // eslint-disable-next-line
    const [isCopied, setCopied] = useClipboard(texttocopy);
    
    const notify = () => toast("Text copied!");
    const options = {
        method: 'POST',
        url: 'https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'YOUR-API-KEY',
          'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
        },
        data: {
          query: inputText
        }
      };



    const handleCopy = () => {
        setTexttocopy(response);
        setCopied(response);
        notify();
    }

    const handleInputChange = (e) => {
       
        setInputText(e.target.value);
    };
    const handleSendRequest = async (e) => {
        
        e.preventDefault();
        try {
            setprompt(inputText);
            setTyping(true);
            const response = await axios.request(options);
            setInputText("");
            setTyping(false);
            console.log(response.data.response);
            setResponse(response.data.response.startsWith('AI') ? response.data.response.substring(3) : response.data.response);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div class="flex">
            
            <div class="md:w-5/12 lg:inline md:inline hidden h-screen border-r-2 border-r-gray-700">
                <div className='m-5 flex flex-row gap-1'>
                    <RiChatVoiceFill className='h-10 text-4xl' />
                    <h2 className='text-3xl'>ChatGPT-4.AI</h2>
                    <a href="https://github.com/dipayansarkar47/ai-chatbot" className='ml-auto text-3xl flex justify-end items-center' target='_blank' rel='noreferrer'>

                        <FaGithubSquare />
                    </a>
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
                <Navbar className=''></Navbar>
                <div className='flex flex-col lg:pt-16 mb-16  gap-1 w-full'>
                    <div className="chats m-5 bg-blue-950 border-2 border-blue-700 rounded-sm">

                        <div className="chat bg-blue-950 flex flex-row gap-2 p-5">
                            <RiChatVoiceFill className='text-3xl bg-transparent' />
                            <p className='w-fit bg-transparent'>Hey! I'm your ChatBot. How can I assist you?</p>
                        </div>
                    </div>
                    {prompt && <div className="chats m-5  border-2 border-gray-700 rounded-sm">
                        <div className="chat flex flex-row items-center gap-2 p-5 ">
                            <FaCircleUser className='text-3xl' />
                            <p className="">{prompt}</p>
                        </div>
                        

                    </div>}
                    {prompt && <div className="chats m-5 bg-blue-950 border-2 border-blue-700 rounded-sm">

                        <div className="chat ease-in bg-blue-950 flex flex-row gap-2 p-5">
                            <RiChatVoiceFill className='text-3xl bg-transparent' />
                            {typing && (<p className='w-fit bg-transparent'>Typing...</p>)}
                            {response && (<p className="txt w-fit bg-transparent">
                                {response}
                            </p>)}
                        </div>
                        <div className='flex flex-row justify-center items-center gap-2 p-2 bg-blue-950'>

                            <IoCopy className='flex flex-row ml-auto bg-transparent' onClick={handleCopy} />
                            {<p className='bg-transparent items-center justify-center'>{isCopied ? "Copied" : ""}</p>}
                        </div>
                    </div>}
                </div>
                <div className="chatFooter mb-16 p-2 mx-2 w-11/12 bg-transparent rounded flex flex-col justify-center items-center mt-auto">
                    <div className="flex flex-row gap-4 w-11/12 bg-transparent">
                        <form action="" className='flex flex-row w-full gap-2' onSubmit={handleSendRequest}>

                        <input
                            className='bg-gray-100 border border-gray-300 outline-none bg-transparent text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white '
                            type="text" placeholder='Type your query to me...' name="" id="" value={inputText} onChange={handleInputChange}
                             />
                        <button type='submit' >
                            <IoSend className='text-3xl bg-transparent' />
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
