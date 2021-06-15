import React from 'react'
import  ReactDOM  from 'react-dom'
import './css/fadein.css'
function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
        className={`fade-in-sectionY ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
        >
        {props.children}
        </div>
    );
}

export default FadeInSection
