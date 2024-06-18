import { createContext, useState } from "react"
import { useEdgesState, useNodesState } from "reactflow";

export const AppContext = createContext()

const ContextProvider = ({ children }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const value = {
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        selectedNode,
        setSelectedNode,
        reactFlowInstance,
        setReactFlowInstance
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider