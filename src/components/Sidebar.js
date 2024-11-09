import React from 'react';

function Sidebar() {
return (
<aside className="sidebar">
<div className="search-bar">
<input type="text" placeholder="Search" />
<button>🔍</button>
</div>

<div className="categories">
<h3>Categories</h3>
<ul>
<li>Crafts (2)</li>
<li>Design (8)</li>
<li>Handmade (7)</li>
<li>Interior (1)</li>
<li>Wood (4)</li>
</ul>
</div>

<div className="recent-posts">
<h3>Recent Posts</h3>
<ul>
<li>Going all-in with millennial design</li>
<li>Exploring new ways of decorating</li>
<li>Handmade pieces that took time to make</li>
<li>Modern home in Milan</li>
<li>Colorful office redesign</li>
</ul>
</div>
</aside>
);
}

export default Sidebar;
