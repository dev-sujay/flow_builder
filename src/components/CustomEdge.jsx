import { FaCaretRight } from 'react-icons/fa';
import {BezierEdge, EdgeLabelRenderer} from 'reactflow';

export default function CustomEdge(props) {
  return (
    <>
      <BezierEdge {...props} />

      {/* render icon at the target */}
      <EdgeLabelRenderer>
        <FaCaretRight
          size={20}
          className="text-black"
          style={{
            transform: `translate(-50%, -50%) translate(${targetX}px, ${targetY}px)`,
          }}
        />
      </EdgeLabelRenderer>
    </>
  );
}
