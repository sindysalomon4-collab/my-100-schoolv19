import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const cards = [
  ['Classes','View your courses and class schedule.'],
  ['Assignments','Keep track of homework and due dates.'],
  ['Grades','Review grades and academic progress.'],
  ['Attendance','See attendance and school-day records.']
];

function App(){
  const [tab,setTab]=useState('Home');
  const [logged,setLogged]=useState(false);
  if(!logged) return <main className="login"><section className="panel">
    <div className="logo">100</div><h1>My 100 School</h1>
    <p className="muted">Your school, classes, grades and assignments in one place.</p>
    <input placeholder="Student ID or email"/>
    <input placeholder="Password" type="password"/>
    <button onClick={()=>setLogged(true)}>Sign in</button>
    <button className="secondary" onClick={()=>setLogged(true)}>Continue as demo</button>
  </section></main>;
  return <div className="app">
    <header><div><b>My 100 School</b><span className="muted"> Student Portal</span></div><button className="small" onClick={()=>setLogged(false)}>Sign out</button></header>
    <nav>{['Home','Classes','Assignments','Grades','Attendance'].map(x=><button className={tab===x?'active':''} onClick={()=>setTab(x)}>{x}</button>)}</nav>
    <main className="content">
      <h2>{tab}</h2>
      {tab==='Home' && <><p>Welcome back. Here is your school dashboard.</p><div className="grid">{cards.map(c=><article><h3>{c[0]}</h3><p>{c[1]}</p><button onClick={()=>setTab(c[0])}>Open</button></article>)}</div></>}
      {tab==='Classes' && <div className="list"><div>Mathematics <span>Room 101</span></div><div>English <span>Room 102</span></div><div>Science <span>Lab 1</span></div><div>Social Studies <span>Room 104</span></div></div>}
      {tab==='Assignments' && <div className="list"><div>Mathematics worksheet <span>Due Friday</span></div><div>Science project <span>Due Monday</span></div></div>}
      {tab==='Grades' && <div className="grid"><article><h3>Current average</h3><strong className="score">--</strong><p>Grades will appear here.</p></article><article><h3>Subjects</h3><p>Mathematics · English · Science · Social Studies</p></article></div>}
      {tab==='Attendance' && <div className="grid"><article><h3>Attendance</h3><strong className="score">--</strong><p>Attendance records will appear here.</p></article></div>}
    </main>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);