import { TbColumns1 } from 'react-icons/tb'
import {
  TfiLayoutColumn2,
  TfiLayoutColumn3,
  TfiLayoutColumn4,
} from 'react-icons/tfi'

const columnSetting = [
  { col: 1, content: <TbColumns1 className='w-5 h-5' /> },
  { col: 2, content: <TfiLayoutColumn2 className='w-5 h-5' /> },
  { col: 3, content: <TfiLayoutColumn3 className='w-6 h-6' /> },
  { col: 4, content: <TfiLayoutColumn4 className='w-6 h-6' /> },
  { col: 0, content: <span className='text-lg'>Auto</span> },
]

function ToolBar({ column, setColumn }) {
  return (
    <div className='flex justify-center pt-4'>
      <div role='tablist' className='tabs tabs-boxed'>
        {columnSetting.map(({ col, content }) => (
          <a
            key={col}
            role='tab'
            className={`tab hover:bg-primary hover:bg-opacity-30${
              col == column ? ' tab-active' : ''
            }`}
            onClick={() => setColumn(col)}
          >
            {content}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ToolBar
