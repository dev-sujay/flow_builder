import { TbMessageCircle } from "react-icons/tb"; 

const nodeTypes = [
  {
    type: 'textNode',
    value: 'Message',
    icon: TbMessageCircle,
    disabled: true,
  },

  // you can add more types of nodes here
  // {
  //     type: "image",
  //     value: "Image",
  //     icon: BiImages,
  //     disabled: false,
  // },
];

const NodesPanel = () => {

  const onDragStart = (e, node) => {
    // we'll send the type of the node to the drop event
    // so we can create a new node with the type of the dropped element ---> onDrop
    e.dataTransfer.setData('application/reactflow', node.type);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-1/5 p-4 bg-white  me-3 border-l ">
      {nodeTypes.map(item => (
        <div
          key={item.type}
          onDragStart={e => onDragStart(e, item)}
          draggable
          className="flex flex-col items-center justify-between my-2 py-3 bg-white border-2 border-blue-500 rounded-lg font-medium transition-all w-[48%] active:scale-95 cursor-pointer">
            <item.icon size={24} className="text-blue-500" />
          <span className="text-base select-none text-blue-500">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

export default NodesPanel;
