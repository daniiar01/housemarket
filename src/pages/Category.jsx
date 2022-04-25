import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner/Spinner'
import ListingItem from '../components/ListingItem/ListingItem'



const Category = () => {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState (true)
  const params = useParams ()
  // console.log(params);
  useEffect(() => {
    (async () =>{
      try {
        const listingsRef = collection(db, 'listings')
        const q = query(listingsRef,
          where('type', '==', params.categoryName),
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
  },[params.categoryName])
  return (
    <div className='category'>
     <header>
       <p className='pageHeader'> Places for {params.categoryName}</p>
      
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
     <p>No listings for {params.categoryName}</p>)}
     </div>
  )
}

export default Category