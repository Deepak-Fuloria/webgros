import React, { useState } from 'react'
import './home.scss'
import one from '../public/1.jpg'
import two from '../public/3.jpg'
 import three from '../public/2.webp'
 import four from  '../public/4.jfif'
 import halfkg from  '../public/half.webp'
 import onehalfkg from  '../public/1.55.jpeg'
 import twokg from  '../public/2kg.jpeg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import axios from 'axios';


const Home = () => {
    let[imageUrl,setImageURL]=useState(four)
    let[price,setPrice]=useState("599")
    const[dateCheck,setDateCheck]=useState("true")
    const [active1,setactive1]=useState("true")
    const [active2,setactive2]=useState("")
    const [active3,setactive3]=useState("")
    const standard=["10-12","12-2","2-4","4-8"]
    const fixed=["10-11","11-12","12-1","1-2","2-3","3-4","4-5"]
    const night=["9-11","1-2"]
    const [dtime,setDtime]=useState(standard)
    let pinvalue
    // let[pinvalue,setpinvalue]=useState("")
  const  getPrice=(e)=>{
    setPrice(e.target.value)
  }



const handleDate=(e)=>{
    let today=new Date().getTime()
    let seletedDate= new Date(e.target.value).getTime()

    if(seletedDate>today)
    {
        setactive1("")
    }
    else{
        setactive1("true")
    }
}

const  handlepin=async(e)=>{
 
  pinvalue=e.target.value

    const {data}=await axios.get(`https://api.postalpincode.in/pincode/${pinvalue}`)
     console.log("🚀 ~ file: home.js:45 ~ handlepin ~ res:", data)
    let location=data[0].PostOffice[0]
    let address=location.District+", " +location.Circle+", " +location.Country
    console.log("🚀 ~ file: home.js:51 ~ handlepin ~ address:", address)


    
    
    if(data[0].Status==="Success")
    {
        setDateCheck("")
        e.target.value=address
    }
    else{
        setDateCheck("true")
        
    }


}




  return (
    <div className='home-container'>
     <div className="left">
        <div className="three">

        <div className='small' onClick={()=>{
         setImageURL(one)
        }}>
            <img src={one} alt="one" />
        </div>

        <div className='small' onClick={()=>{
         setImageURL(two)
        }}>
            <img src={two} alt="two" />
        </div>

        <div className='small' onClick={()=>{
          setImageURL(three)
        }}>
            <img src={three} alt="three" />
        </div >

        </div>



        <div className="single">
        <div className='large'>
            <img src={imageUrl} alt="large" />
        </div>
        </div>
     </div>

     <div className="right">
        <h1>Chocolate Truffle</h1>
        <div style={{color:"white"}} className="rating">
           <span ><i class="fa-solid fa-star"></i></span>
           <span>4.92</span>
        </div>
        <span className='reviews'>reviews 5</span>

        <section className='price'>
        <span className='font-large-bold'> ₹ {price}</span>
        <span className='fade-price'><s> ₹ {price}</s></span>
        <span className='discount'> 9% OFF</span>
        </section>

        <section className='weight'>
        <p>Select Weight</p>
        <div className="radio-button">
         <div>
         <input type="radio"  name="0.5" value="599" onChange={(e)=>{
          getPrice(e)
          setImageURL(halfkg)
         }}/>
        <label >0.5kg</label><br></br>  
        <span className="font-small-bold w-price"> ₹ 599</span>   
        </div>   
        <div>
         <input type="radio"  name="0.5" value="1599" onChange={(e)=>{
          getPrice(e)
          setImageURL(onehalfkg)
         }}/>
        <label >1kg</label><br></br>    
        <span  className="font-small-bold w-price"> ₹ 1599</span>    
        </div> 
        <div>
         <input type="radio"  name="0.5" value="2099" onChange={(e)=>{
          getPrice(e)
          setImageURL(twokg)
         }}/>
        <label >2kg</label><br></br>    
        <span  className="font-small-bold w-price"> ₹ 2099</span>    
        </div> 
        </div>
        </section>

        <section className='data-input'>
         <LocationOnOutlinedIcon className='i'/> 
        <input 
        type="text" 
        className='input' 
        value={pinvalue} 
        placeholder='Enter Pincode'
        
        onChange={(e)=>{
         handlepin(e)
        }}

        onFocus={(e)=>{
            e.target.value=""
            setDateCheck("true")
        }}
        />
        <input 
        type="text" 
        className='input' 
        placeholder='Enter Date' 
        disabled={dateCheck}
        onFocus={(e)=>{
         e.target.type="date"
        }}
        onBlur={(e)=>{
            e.target.type="text"
           }}
        onChange={(e)=>{
        handleDate(e)
        }}
        /> 
        
        </section>
        
        <section className='eat-type'>
        <input type="radio"  name="0.5" value="0.5"/>
        <label className='font-light'>Eggless</label><br></br>  

        <input type="radio"  name="0.5" value="0.5"/>
        <label className='font-light'>With Egg</label><br></br>  

        <input type="text" className='input' placeholder='Message On Cake'/> 
        </section>

    <section className='delivery'>
        <p className='delivery-type'>Select Delivery Type</p>
        <div className='types'>
            <div className='type-1 ' style={ active1 ? { backgroundColor:"#eceaea"} : {}}
            onClick={(e)=>{
                setactive1("true")
                setactive2("")
                setactive3("")
                setDtime(standard)
            }}
            
            >
                <p>standard</p>
                <p style={{color:"green",fontWeight:"600"}}>(free)</p>
            </div>
            <div className='type-1'
            style={ active2 ? { backgroundColor:"#eceaea"} : {}}
            onClick={(e)=>{
                setactive1("")
                setactive2("true")
                setactive3("")
                setDtime(fixed)
            }}
            
            >
                <p>Fixed</p>
                <p style={{color:"green",fontWeight:"600"}}>(free)</p>
            </div>
            <div className='type-1'
            style={ active3 ? { backgroundColor:"#eceaea"} : {}}
            onClick={(e)=>{
                setactive1("")
                setactive2("")
                setactive3("true")
                setDtime(night)
            }}
            
            >
                <p>Midnight</p>
                <p style={{color:"green",fontWeight:"600"}}>(free)</p>
            </div>
        </div>
    </section>

    <section className='time'>
        <select name="" id="" className='input'>
            <option value="" desabled>select time</option>
            {
                dtime.map((element,i)=>{
                   return <option value={element} key={i}>{element}</option>
                })
            }  
        </select>
    </section>

    <section className='buttons'>
        <button style={{backgroundColor:"white"}}>Add To Cart</button>
        <button  style={{backgroundColor:"#821727",color:"white"}}>Buy now</button>
    </section>

     </div>
    
    </div>
  )
}

export default Home;
