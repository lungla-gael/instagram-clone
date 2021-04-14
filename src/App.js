import './App.css';
import Post from './components/post/Post';
import logo from './resources/Ig_logo.png'
import beauty from "./resources/beauty.jpg"
import noura from "./resources/noura.JPG"
import shop from "./resources/shop.jpg"
import { useEffect, useState } from 'react';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([
    // {
    //   username:"Noura", 
    //   caption:" WOW it works",
    //   imageSrc:noura
    // },
    // {
    //   username:"Valencia",
    //   caption:" Get your beauty kit",
    //   imageSrc:shop
    // },
    // {
    //   username:"Diane", 
    //   caption:" Shampoo and Mascara for any skin tone", 
    //   imageSrc:beauty
    // }
  ])

  //useEffect Runs a piece of code based on a specific condition
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.uid,
        post: doc.data()
      })))
    })
  }, [])

  return (
    <div className="app">
      <div className="app_header">
        <img className="app_headerImage" src={logo} />
      </div>

      {
        posts.map(({id, post}) => 
                  <Post 
                        key={id}
                        username={post.username}
                        caption={post.caption}
                        imageSrc={post.imageSrc}/>)
      }
    </div>
  );
}

export default App;
