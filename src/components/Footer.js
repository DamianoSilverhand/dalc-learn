import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconColors = {
	"twitter": "#1DA1F2",
	"gmail": "#DB4437",
	"facebook" :"#4267B2"
};

function Footer() {
	return (
		   <div className="bg-light">
		    <div className="container">
		    <div className="row">
		    <div className="col">
		    <ul className="list-inline text-center">
		    <li className="list-inline-item"><a href="#" style={{color:iconColors.facebook}}><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
		    <li className="list-inline-item">&middot;</li>
		    <li className="list-inline-item"><a href="#" style = {{color:iconColors.twitter}}><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
		    <li className="list-inline-item">&middot;</li>
		    <li className="list-inline-item"><a href="#" style={{color:iconColors.gmail}}><FontAwesomeIcon icon={['fab', 'google']} /></a></li>
		    </ul>
		    </div>
		    </div>
		    </div>  
		    </div>
	);
}
export default Footer;
