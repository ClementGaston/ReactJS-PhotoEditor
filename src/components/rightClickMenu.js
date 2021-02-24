import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/rightClickMenu.css';

function RightClickMenu({ canvas, reset }) {
    const menu = useRef(null)

    function downloadPicture() {
        let link = document.createElement('a');
        link.download = 'picture.png';
        link.href = canvas.current.toDataURL()
        link.click();
    }

    function copyPicture() {
        canvas.current.toBlob(blob => {
            // eslint-disable-next-line no-undef
            navigator.clipboard.write([new ClipboardItem({
                [blob.type]:blob
            })])
        })
    }

    useEffect(() => {
        function showMenu(e) {
            if(menu.current) {
                e.preventDefault();

                menu.current.style.top = `${e.clientY - 20}px`
                menu.current.style.left = `${e.clientX - 20}px`
                menu.current.classList.remove("off");
            }
        }

        function hideMenu() {
            if(menu.current) {
                menu.current.style.top = `-200px`
                menu.current.style.left = `-200px`
                menu.current.classList.add("off");
            }
        }

        canvas.current.addEventListener('contextmenu', showMenu);
        document.addEventListener('click', hideMenu);

        return function cleanup() {
            document.removeEventListener()
        }
    }, [])

	return (
		<ul id='RightClick' className='off' ref={menu}>
			<li onClick={downloadPicture}>Save picture as...</li>
			<li onClick={copyPicture}>Copy picture</li>
			<li onClick={reset}>Delete picture</li>
		</ul>
	);
}

export default RightClickMenu;

RightClickMenu.propTypes = {
	canvas: PropTypes.object,
    reset: PropTypes.func
};
