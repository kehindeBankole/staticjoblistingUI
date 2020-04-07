import React from 'react';
import Bar from './components/Bar'
import User from './components/User'
import data from './data.js'
import './App.css'



function App() {
  return (
<>
<Bar/>
<div className="mt-5  mb-5">
{data.map((label)=>{
 return(
   <div className="mt-3 ml-5 mr-5" key={label.id}>
     <User 
     che={label.new && label.featured ? "4px solid hsl(180, 29%, 50%)":""}
     src={label.logo} 
     alt={`${label.company} logo`} 
     companyname={label.company}
     new={label.new?"NEW!" : ""}
     feature={label.featured?"FEATURED":""}
     title={label.position}
     time={label.postedAt}
     hour={label.contract}
     location={label.location}
    language={label.languages?label.languages.map((f , i)=><span key={i} className="badge ml-2 p-2" id="level">{f}</span>):""}
    level={label.level}
    tool={label.tools?label.tools.map((f , i)=><span key={i} className="badge ml-2 p-2 mt-2" id="level">{f}</span>):""}
    />
   </div>
 )
})}
</div>
</>
  );
}

export default App;
