import React from 'react';
import './ImageLinkForm.css';



const ImageLinkForm = ({ onInputChange, onButtonSubmit })=> {
	return (
		<div>
			<p className='f3 light-gray'> 
				{'This Magic Brain will detect faces in your pictures. Give it a try'}
			</p>
			<div className='center'>
				<div className='form pa4 br3 shadow-5'>
					<input className='f4 ps2 w-70 center'type='text' onChange={onInputChange}/>
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white buttonColor'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;