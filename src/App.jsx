
import {useState} from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Section, SectionThumbnail } from './components/SectionStyle'
import minus from '/icon-minus.svg'
import plus from '/icon-plus.svg'
import cart from '/icon-cart.svg'


const data = [
  {
    id: 1,
    mainImage: "/image-product-1.jpg",
    thumbnail: "/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    mainImage: "/image-product-2.jpg",
    thumbnail: "/image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    mainImage: "/image-product-3.jpg",
    thumbnail: "/image-product-3-thumbnail.jpg",
  },
  {
    id: 4,
    mainImage: "/image-product-4.jpg",
    thumbnail: "/image-product-4-thumbnail.jpg",
  }
];

function App() {

  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);

  const {mainImage} = products[value];

  return (
    <div>
      <Navbar />
      <Section>
        <article>
        <img style={{borderRadius: '10PX'}} src={mainImage} alt='' />
        
        <SectionThumbnail>
        {products.map((item, index) => (
          <li 
            key={item.id}
            onClick={() => setValue(index)}
            className={`${index === value && 'thumbnail'} 'thumbnail2'`}
            >
            <img style={{width: '127px', borderRadius: '10px'}} src={item.thumbnail} alt='' />
          </li>
        ))}
        </SectionThumbnail>
        </article>

        <article style={{paddingLeft: '2rem',paddingRight: '2rem'}}>
          
          <h3 style={{padding: '15px 5px 15px 5px',color: 'hsl(26, 100%, 55%)',font: 'bold',textTransform: 'uppercase',marginBottom: '10px', letterSpacing: '0.025rem',fontSize: '14px',lineHeight: '20px', boxShadow: ''}}>Sneaker Company</h3>          
          <h1 style={{font: 'bold', marginBottom: '10px'}}> Fall Limited Edition Sneakers</h1>         
           <p style={{}}>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they`ll withstand everything the weather can offer.</p>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <ul style={{display: 'flex',alignItems: 'center', gap: '5px'}}>
              <li>$125</li>
              <li style={{borderRadius: '50%',color: 'orange',font: 'bold',marginBottom: '10px'}}>50%</li>
            </ul>
          </div>

          <p><s>$250%.00</s></p>

          <div style={{marginTop: '10px', display: 'flex'}}>
            <ul style={{display: 'flex',alignItems: 'center',boxShadow: ''}}>
              <li style={{margin: '20px'}}>
                <img src={minus} alt="" />
              </li>
              <li style={{margin: '20px'}}>{amount}</li>
              <li style={{margin: '20px'}}><img src={plus} alt="" /></li>
            </ul>

            <div>
            <button  style={{backgroundColor: 'orange',color: 'white',display: 'flex'}}>
              <img src={cart} alt="" />
              Add to cart
            </button>
            </div>
          </div>    
         </article>
      </Section>
    </div>
  )
}

export default App
