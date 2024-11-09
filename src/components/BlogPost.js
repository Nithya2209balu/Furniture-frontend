import React from 'react';

function BlogPost({ title, date, category, description, src }) {
return (
<div className="blog-post">
<img src={src} alt={title} className="post-image" />
<div className="post-details">
<p><strong>Admin</strong> | {date} | {category}</p>
<h2>{title}</h2>
<p>{description}</p>
<button className="read-more">Read more</button>
</div>
</div>
);
}

export default BlogPost;