import React, { useEffect, useRef } from 'react'
import './ScrollList.css'

const _store = []

function useScrollRestore(listRef) {
  useEffect(() => {
    console.log('scroll restore')
    const storeIndex = _store.length;
    const listEl = listRef.current;
    listEl.scrollTop = _store[storeIndex]

    return () => {
      console.log('scroll backup')
      _store[storeIndex] = listEl.scrollTop
    }
  }, [listRef])
}

function ScrollList() {
  console.log('render')
  // const [listPosition, setListPosition] = useState(0)
  const scrollListRef = useRef()
  const scrollListRef1 = useRef()

  // console.log(listPosition)

  // useEffect(() => {
  //   console.log('mount')
  //   const listEl = scrollListRef.current;
  //   listEl.scrollTop = _store['list-position']

  //   return () => {
  //     console.log('unmount')
  //     _store['list-position'] = listEl.scrollTop
  //   }
  // }, [])

  useScrollRestore({scrollListRef});
  useScrollRestore({scrollListRef1});

  const scrollListTable = []
  for (let i = 0; i < 30; i++) {
    scrollListTable.push(
      <table key={i}>
        <tbody>
          <tr>
            <td>1</td>
            <td>fwefw</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (<>
    <div ref={scrollListRef} className='scroll-list'>
      {scrollListTable}
    </div>
    <div ref={scrollListRef1} className='scroll-list'>
      {scrollListTable}
    </div>
  </>)
}

export default ScrollList
