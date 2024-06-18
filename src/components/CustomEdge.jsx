import { BiRightArrow } from "react-icons/bi";
import { BezierEdge, EdgeLabelRenderer } from "reactflow"

const CustomEdge = (props) => {
    const { targetX, targetY } = props
    return (
        <>
            <BezierEdge {...props} />
            <EdgeLabelRenderer>
                <BiRightArrow
                    size={20}
                    className="text-black"
                    style={{
                        transform: `translate(${targetX - 10}px, ${targetY - 10}px)`,
                        cursor: "pointer",
                        position: "absolute",
                    }}
                />
            </EdgeLabelRenderer>
        </>
    )
}

export default CustomEdge