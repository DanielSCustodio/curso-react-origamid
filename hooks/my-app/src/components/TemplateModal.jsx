import React from 'react';
import Modal from './Modal'
import ButtonModal from './ButtonModal'

function TemplateModal () {
  const [ modal, setModal ] = React.useState( false );
  return (
    <div>
      <Modal modal={ modal } />
      <ButtonModal setModal={ setModal } modal={ modal } />
    </div>
  )
}

export default TemplateModal