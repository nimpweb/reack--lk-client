import React from 'react'
import DocumentComponent from '../../Detail/DocumentComponent'

export default function Step3() {
  return (
    <div>
      <DocumentComponent 
        documentList={[{
          id: 1, title: 'Document2', 
          canDownload: true, canSign: true, canRemove: true
        }]}
      />
    </div>
  )
}
