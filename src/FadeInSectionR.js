import React from 'react'
import  ReactDOM  from 'react-dom'
import Zoom from 'react-reveal/Zoom';

import Reveal from 'react-reveal/Reveal';
import './css/fadein.css'
function FadeInSectionR(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <>
        {/* <Zoom className={`fade-in-sectionXR ${isVisible ? 'is-visibl' : ''}`}
        ref={domRef}> */}
        <div
        className={`fade-in-sectionXR ${isVisible ? 'is-visibl' : ''}`}
        ref={domRef}
        >
        <Zoom bottom>
        {props.children}
        </Zoom>
        </div>
        {/* </Zoom> */}
        </>
        // <div>
        //     <Zoom>
        //         <div className={`fade-in-sectionXR ${isVisible ? 'is-visibl' : ''}`}
        //         ref={domRef}>
        //             {props.children}
        //         </div>
        //     </Zoom>
        // </div>
    );
}

export default FadeInSectionR
