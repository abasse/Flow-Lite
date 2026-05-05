import {useEffect, useState} from 'react'
import { LuTrash } from 'react-icons/lu'
import { colors } from '../colors'
import nodesTypes from '../nodes'

const NodeEdit = ({node, updateNode, deleteElements}) => {

  // Local state for holding node properties that can be edited
  const [label, setLabel] =useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [url, setUrl] = useState("");
  const [nodeGroup, setNodeGroup] = useState(null);
  const [showNav, setShowNav] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    updateNode(node.id, {color: color});
  }

  const handleLabelChange = (e) => {
    const value = e.target.value;
    setLabel(value);
    updateNode(node.id, {label: value});
  }

  const handleUrlChange = (e) => {
    const value = e.target.value;
    setUrl(value);
    updateNode(node.id, {url: value});
  }

  const handleDeleteNode = () => {
    deleteElements({nodes: [{id: node.id}]});
  }

  const handleShowNavChange = (e) => {
    setShowNav(e.target.checked);
    updateNode(node.id, {showNav: e.target.checked});
  }

  const handleShowFooterChange = (e) => {
    setShowFooter(e.target.checked);
    updateNode(node.id, {showFooter: e.target.checked});
  }

  // Effect hook to initialize node data
  useEffect(() => {

    if(node.data) {
      // Set local state with node properties if available
      setLabel(node.data.label);
      setSelectedColor(node.data.color);
      setUrl(node.data?.url || '');
      setShowNav(node.data?.showNav || false);
      setShowFooter(node.data?.showFooter || false);
    }

    // Set the node's group based on its type
    if(nodesTypes[node.type]) {
      const group = nodesTypes[node.type]?.group;
      setNodeGroup(group);

      // For wireframe nodes, URL is also part of the node's data
      if(group === 'wireframe') {
        setUrl(node.data?.url || '');
      } 
    } 

  }, [node])

  return (
    <div className='flex flex-col gap-4 p-4'>

      {/* Label */}
      <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Label</label>
        <textarea type="text" rows={3} value={label} onChange={handleLabelChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
      </div>

      {/* If the node is a wireframe, display the URL input and nav/footer toggles */}
      {nodeGroup === 'wireframe' &&
      <>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Url</label>
          <input type="text" value={url} onChange={handleUrlChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Layout</label>
          <div className='flex flex-col gap-2'>
            <label className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer'>
              <input type='checkbox' checked={showNav} onChange={handleShowNavChange} className='w-4 h-4 rounded border-gray-300' />
              Navigation
            </label>
            <label className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer'>
              <input type='checkbox' checked={showFooter} onChange={handleShowFooterChange} className='w-4 h-4 rounded border-gray-300' />
              Footer
            </label>
          </div>
        </div>
      </>
      }

      {/* Color selection section*/}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">Color</label>
        <div className='flex items-center gap-1'>
          {Object.keys(colors).map(color => 
            <button key={color} onClick={() => handleColorChange(color)} className={'h-5 w-5 rounded' + (` bg-${color}-400 hover:bg-${color}-500`) + (selectedColor === color && " ring-[2px] ring-gray-300 border-2 border-white")}></button>
          )}
        </div>
      </div>

      {/* Delete node button */}
      <div >
        <button className='bg-white border hover:bg-gray-100 rounded px-2 py-1.5' onClick={handleDeleteNode}>
          <LuTrash />
        </button>
      </div>

    </div>
  )
}

export default NodeEdit;