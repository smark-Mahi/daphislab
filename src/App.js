import './App.scss';
import {useEffect,useState} from 'react'
import Piechart from './Piechart';
import Card from './Card';
function App() {
  const [data,setdata] = useState([])
  const [categoryy,setallcategory] = useState([])
  const [open,setopen]=useState(false)
   const [fillter,setfilter]=useState([])
   
   //get all products
  const getdata=async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
    const data=await res.json()
    setdata(data)
    setfilter(data)
    console.log(data)
  }
  //get all products category
  const getallcategory=async()=>{
    const res=await fetch('https://fakestoreapi.com/products/categories')
    const data=await res.json()
    setallcategory(data)
    console.log(data)
  }
  useEffect(()=>{
    getdata()
    getallcategory()
  },[])
  const chartData={
    labels:categoryy,
    datasets:[
      {
        label:"category",
        data:[4,6,6,4],
        backgroundColor:[
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
        ],
        borderColor:'black',
        borderWidth:2
      }
    ]
  }
  console.log(open)
 function handlefilter(e){
  const set=e.target.value
  const filterbycategory=data.filter((Data)=>Data.category.toLowerCase()===set.toLowerCase())
  setfilter(filterbycategory)
 }
 
  return (
  <div className='card-gallery'>
    <nav className='nav'>
      <select onChange={handlefilter} className='select'>
        <option selected disabled>select</option>
        {
          categoryy.map(item=>(
          <option value={item}>{item}</option>
        ))
        }
      </select>
    </nav>
    <div className="card-wrapper">
    {
      fillter.map((items,index)=>{
        return <Card items={items} key={index}/>
      }
      )
    }
    <button className='analyse' onClick={()=>{setopen(true)}}>Analyse</button>
    </div>
    {open && <Piechart chartData={chartData} setopen={setopen}/>}
  </div>
  );
}

export default App;
