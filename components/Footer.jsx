import React from 'react'
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


const Footer = () => {
	return (
		<div className="footer-container">
			<p>2022 Dawana's Bistro All rights reserved</p>
			<p className="icons">
				<a href="https://github.com/dawanab" target="_blank"><AiFillGithub /></a>
				<a href="https://www.linkedin.com/in/dawanabaker/" target="_blank"><AiFillLinkedin /></a>
			</p>
		</div>
	)
}

export default Footer