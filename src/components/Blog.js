import React from 'react';
import BlogPost from './BlogPost';
import Sidebar from './Sidebar';
import s from '../assets/shop.png'
import './About.css'
import MyFooter from './MyFooter';
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
function Blog() {
return (
<div className="blog-page">
<div className="blog-header mt-24 ">
<img src={s} alt='' />


</div>

<div className="blog-content">
<div className="blog-posts">
    <div className='mt-10'>
    <img src={b1} alt=''/>
 <div className='mt-5'>
 <p>Going all-in with millennial design</p>
    <p>14 Oct 2022</p>
    <p>Wood</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
 </div>
    </div>
    <div className='mt-10'>
    <img src={b2} alt=''/>
 <div className='mt-5'>
 <p>Exploring new ways of decorating</p>
    <p>14 Oct 2022</p>
    <p>Handmade</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
 </div>
    </div>
    <div className='mt-10'>
    <img src={b3} alt=''/>
 <div className='mt-5'>
 <p>Handmade pieces that took time to make</p>
    <p>14 Oct 2022</p>
    <p>Wood</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
 </div>
    </div>




</div>

<Sidebar />
</div>

<MyFooter/>
</div>
);
}

export default Blog;
