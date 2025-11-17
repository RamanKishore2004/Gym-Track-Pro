import React from 'react'
export default function Footer(){
return (
<footer className="site-footer">
<div className="container footer-inner">
<div>© {new Date().getFullYear()} GymTrack Pro — All rights reserved.</div>
<div className="muted">Built with ♻️ — eco-friendly theme</div>
</div>
</footer>
)
}