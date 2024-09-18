import PropTypes from 'prop-types'
import { IoMdClose } from 'react-icons/io'
import PostRoot from './PostRoot'
import { useState } from 'react'
import PostPoll from './PostPoll'

enum postTab {
  POLL = 'poll',
  ROOT = 'root',
}

const PostModal = ({ isVisible, onClose }) => {
  const [tab, setTab] = useState(postTab.ROOT)
  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[20]"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 w-full absolute bottom-0 h-[300px] flex justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent click events inside modal from closing it
      >
        <div className="absolute bottom-[100%] right-[100px] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>
        <button type="button" className="absolute top-[30px] right-[100px]" onClick={onClose}>
          <IoMdClose size={20} />
        </button>
        {tab === postTab.ROOT && <PostRoot setTab={setTab} />}
        {tab === postTab.POLL && <PostPoll setTab={setTab} />}
      </div>
    </div>
  )
}

PostModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default PostModal
