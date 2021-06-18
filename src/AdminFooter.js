import React from 'react'
import './AdminFooter.css'
import sty from './css/adminFormImg.module.css';
function AdminFooter() {
    return (
        <div>
            {/* <h1 style={{paddingTop:100}}>hello world</h1> */}
            <footer className="footer">
                <p className={sty.controlpanelfont}>&copy; Developed by Subham Das</p>
            
            </footer>
        </div>
    )
}

export default AdminFooter
