import React, { useEffect } from 'react';
import { CloseButton, ModalContent, ModalWrapper, Img } from './Modal.styled'

const Modal = ({ closeModal, content }) => {

 useEffect(() => {
    document.body.style.overflowY = 'hidden';
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflowY = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

// 	componentDidMount() {
// 		document.body.style.overflowY = 'hidden'
// 		document.addEventListener('keydown', this.handleKeyDown)
//   }
  
// 	componentWillUnmount() {
// 		document.body.style.overflowY = 'auto'

// 		document.removeEventListener('keydown', this.handleKeyDown)
// 		clearInterval(this.intervalId)
// 		clearTimeout(this.timeoutId)
// 	}

	// const handleKeyDown = e => {
	// 	console.log(e.key)
	// 	if (e.key === 'Escape') {
	// 		this.props.closeModal()
	// 	}
	// }

	const handleBackdropClick = e => {
   if (e.target === e.currentTarget) {
      closeModal();
    }
		// if (e.target === e.currentTarget) {
		// 	this.props.closeModal()
		// }
	}


		return (
			<ModalWrapper onClick={handleBackdropClick}>
				<ModalContent>
          <>
             <Img src={content.largeImageURL} alt={content.tags} />
					</>
					    <CloseButton onClick={closeModal}>×</CloseButton>
				</ModalContent>
			</ModalWrapper>
		)
	}


export default Modal;