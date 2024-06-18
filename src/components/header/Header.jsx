import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import toast from "react-hot-toast";

const Header = () => {
    const {
        nodes,
        edges
    } = useContext(AppContext)

    const saveToLocalStorage = () => {
        try {
            // localStorage.setItem("flow", JSON.stringify({
            //     nodes,
            //     edges
            // }));

            const sourceNodes = new Set();
            const targetNodes = new Set();

            // collect all source and target nodes in a set to check for nodes without source and target handles
            edges.forEach(edge => {
                sourceNodes.add(edge.source);
                targetNodes.add(edge.target);
            });

            // check for nodes without source and target handles
            const nodesWithoutSourceAndTarget = nodes.filter(
                node => !sourceNodes.has(node.id) && !targetNodes.has(node.id),
            );

            if (nodesWithoutSourceAndTarget.length > 0) {
                // alert user about nodes without source and target handles
                toast.error(
                    "Some nodes are not connected to any other nodes. Please connect them to other nodes before saving.",
                );
                return;
            }

            // save to local storage
            localStorage.setItem("flow", JSON.stringify({
                nodes,
                edges
            }));
            toast.success("Saved successfully");

        } catch (error) {
            console.log(error, "Error saving to local storage")
        }
    }
    return (
        <div className=" bg-slate-300 flex justify-end">
            <button className=" text-blue-600 bg-white border border-blue-600 px-4 py-1.5 mr-4 my-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors" onClick={saveToLocalStorage} >Save Changes</button>
        </div>
    )
}

export default Header