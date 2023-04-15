import Contact from '@/components/Contact';
import { getRootUrl } from '@/lib/utils';
import { useState } from 'react';
import RadioButton from './RadioButton';

export default function Home() {
  const [isMatchCase, setIsMatchCase] = useState(true);
  const [value, setValue] = useState('');
  const [addr, setAddr] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [status, setStatus] = useState('');
  const [mode, setMode] = useState('');

  const generate = async () => {
    console.log(mode)
    const root = getRootUrl()
    const res = await fetch(`${root}/api/generate?value=${value}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',

        },
      })
    const data = await res.json()
    console.log(data)
    console.log(data?.status)
    console.log(res.status)
    if (res.ok) {
      setStatus(data?.status)
    }
    if (data?.status === 'suc') {
      setAddr(data?.address)
      setPrivateKey(data?.key)
    } else {
      setAddr('')
      setPrivateKey('')
    }
    // const socket = new WebSocket('ws://eth-vanity.vercel.com:2023');
    // socket.onopen = function(event) {
    //   console.log('WebSocket opened');
    //   socket.send('generate');
    // };

    // socket.onmessage = function(event) {
    //     console.log('Received message:', event.data);
    // };

    // socket.onclose = function(event) {
    //     console.log('WebSocket closed');
    // };
  }

  const pause = () => {
    setStatus('')
  }

  const options = [
    {
      label: "Serverless Function生成(快速)",
      value: "server"
    },
    {
      label: "本地生成",
      value: "local"
    },

  ]


  return (
    <div className="flex flex-col justify-center px-8 pb-32 md:pb-36 lg:px-10 ">
      <h1 className="mb-10 text-center text-4xl font-extrabold">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent md:text-6xl lg:text-6xl">
          ETH Vanity</span>
      </h1>
      <div>
        <div className='flex gap-2'>
          靓号生成配置
        </div>
        <div className='mb-4 p-0 text-sm text-gray-500'>
          本站不会保留任何生成的地址信息，所有代码已开源
        </div>
      </div>

      <div>
        <div className='flex gap-2  text-gray-600'>
          输入你要生成的靓号字符串 比如: 000000
        </div>
        <div className='mb-4 w-full p-2'>
          <input className=' w-full border  border-orange-500 p-2'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={7}
            placeholder="E.g.000000"></input>
        </div>
      </div>

      <div className=' mb-4 flex gap-2  text-gray-600'>
        是否区分大小写
        <input
          type="checkbox"
          checked={isMatchCase}
          onChange={() => setIsMatchCase(!isMatchCase)}
        />
      </div>
      <div className=' mb-4 flex gap-2  text-gray-600'>
        生成方式
      </div>
      <RadioButton options={options} selectedValue={options[0].value} onChange={(value) => setMode(value)}></RadioButton>

      <div className='flex items-center gap-12 p-2'>
        <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          onClick={generate}>生成</button>
        <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          onClick={pause}>暂停</button>
      </div>
      <div className='mt-4 p-2'>
        难度  <span className='ml-12'>{1 << value.length * 4}
        </span>
      </div>
      <div className='mt-2 p-2'>
        状态 <span className='ml-12'>{status}
        </span>
      </div>
      <div className='mt-4 p-2'>
        Address  <span className='ml-12'>{addr}
        </span>
      </div>
      <div className='mt-2 p-2'>
        PrivateKey <span className='ml-12'>{privateKey}
        </span>
      </div>
      <hr className="my-12 h-px border-0 bg-black dark:bg-[#292C2D]" />
      <Contact />
    </div>
  );
}
