import { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  Position,
  MiniMap,
  Controls
} from 'reactflow';
import NodesPanel from './NodesPannel';
import SettingsPanel from './SettingsPanel';
import 'reactflow/dist/style.css';
import TextNode from './TextNode';
import CustomEdge from './CustomEdge';

const nodeTypes = {
  textNode: TextNode,
};

const edgeTypes = {
  custom_edge: CustomEdge,
}

const FlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const onDrop = useCallback(e => {
      e.preventDefault();

      // getting type of the node from the dataTransfer ---> onDragStart
      const type = e.dataTransfer.getData('application/reactflow');

      // validating if the dropped element is correct
      if (typeof type === 'undefined' || !type) {
        return;
      }

      // mouse position
      const position = reactFlowInstance.screenToFlowPosition({
        x: e.clientX,
        y: e.clientY,
      });

      // generating a random id
      const nid = Math.random().toString(36).substring(7) + new Date().getTime();

      // creating a new node
      const newNode = {
        id: nid,
        type,
        position,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: {value: "New Message", onClick: () => setSelectedNode({id: nid})},
      };

      // and adding it to the nodes array
      setNodes((ns) => ns.concat(newNode));
    },
    [reactFlowInstance],
  );

  const onDragOver  = useCallback(e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div className="flex">
      <div className='flex-1 h-[93vh]'>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(e, node) => setSelectedNode(node)}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onInit={instance => setReactFlowInstance(instance)}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <MiniMap />
          <Controls/>
          <Background />
        </ReactFlow>
      </div>
      {selectedNode ?
        <SettingsPanel
          selectedNode={selectedNode}
          setNodes={setNodes}
          setSelectedNode={setSelectedNode}
          nodes={nodes}
        />
        :
        <NodesPanel setNodes={setNodes} />
      }
    </div>
  );
}

export default FlowBuilder;
