import React, {useReducer, useState} from 'react'

const Tabs = (props) => {
    const [tabList, setTabList] = useState([{header: "Tab 1", body: "Tab 1 content is showing here."},
    {header: "Tab 2", body: "Tab 2 content is showing here."},
    {header: "Tab 3", body: "Tab 3 content is showing here."}])

    const [boxDisplay,setBoxDisplay] = useState(tabList[0].body)

    const onClickHandler = (e, value) => {
        setBoxDisplay(value.body)
    }
    
    
  return (
    <div>
      <div>
        {
          tabList.map((table, i)=>{
            return(
              <button key= {i} className='btn btn-outline-dark' onClick={ (e) => onClickHandler(e, table) } > {table.header} </button>
              )
            })
          }
      </div>
        
      <div className='card mt-5 container d-flex justify-content-center border border-3' style={{width: "30rem"}}>
        <div className='card-body'>{boxDisplay}</div>
      </div>

    </div>
  )
}

export default Tabs