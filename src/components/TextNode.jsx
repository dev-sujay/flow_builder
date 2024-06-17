import { AiOutlineMessage } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Handle } from 'reactflow'

const TextNode = ({ data }) => {
    return (
        <div className="node bg-white mb-2 cursor-pointer rounded-lg shadow-md overflow-hidden min-w-[200px] max-w-[320px] text-justify"
            onClick={data.onClick} >
            <div className="bg-teal-400 w-full py-2 flex items-center justify-between text-black">
                <AiOutlineMessage color="black" className="mx-2" size={18} />
                Send Message
                <IoLogoWhatsapp size={25} color="green" className="bg-white p-1 rounded-full mx-2" />
            </div>
            <div type="text" className="w-full p-2">
                {data.value}
            </div>
            <Handle type="target" position="left" style={{
                width: 10,
                height: 10,
                background: 'white',
                border: '1px solid #000',
            }} />
            <Handle type="source" position="right" style={{
                width: 10,
                height: 10,
                background: 'white',
                border: '1px solid #000',
            }} />
        </div>
    )
}

export default TextNode