import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi"; 
import { AppContext } from "../context/ContextProvider";

const SettingsPanel = () => {

  const {selectedNode, setNodes, setSelectedNode, nodes} = useContext(AppContext)

  const onChange = (e) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === selectedNode.id) {
          return {
            ...node,
            data: {
              ...node.data,
              value: e.target.value,
            },
          };
        }
        return node;
      })
    );
  };

  return (
    <div className="w-1/5 p-4 bg-white  me-3 border-l ">
    <div className="text-center flex justify-center items-center relative border-b mb-3 pb-3">
      <BiArrowBack className=" absolute left-1 cursor-pointer" onClick={() => setSelectedNode(null)} /> Message
    </div>
      <div className="mb-4">
        <label className="block text-md font-medium text-gray-300">Text</label>
        <textarea
          type="text"
          value={nodes.find((node) => node.id === selectedNode.id).data.value}
          onChange={onChange}
          className="mt-1 border border-gray-300 rounded-md p-1 w-full outline-none"
        />
      </div>
    </div>
  );
}

export default SettingsPanel;
