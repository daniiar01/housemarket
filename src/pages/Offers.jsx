import React from 'react'
import { useEffect, useState } from 'react'

import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner/Spinner'
import ListingItem from '../components/ListingItem/ListingItem'



const Offers = () => {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState (true)
  
  // console.log(params);
  useEffect(() => {
    (async () =>{
      try {
        const listingsRef = collection(db, 'listings')
        const q = query(listingsRef,
          where('offer', '==', true),
          orderBy('timestamp', 'desc'),
          limit(10)
          )
          const querySnap = await getDocs(q)
          const listings = []
          querySnap.forEach(doc=>{
            return listings.push({
              id:doc.id,
              data: doc.data(),
            })
          })
          console.log(listings);
          setListings(listings)
          setLoading(false)

      } catch (error) {
        toast.error('Ошибочка')
      }
    }
    ) ()
  },[])
  return (
    <div className='category'>
     <header>
       <p className='pageHeader'> Rent</p>
      
     </header>
     {loading ?(
       <Spinner/>): listings && listings.length > 0 ?(
    <>
    <main>
      <ul className="categoryListings">{listings.map(listing=>(
        <ListingItem listing={listing.data} id= {listing.id} key= {listing.id} />
      ))}
      </ul>
    </main>
       </> 
       ):(
     <p>There are no current offers</p>)}
     </div>
  )
}

export default Offers