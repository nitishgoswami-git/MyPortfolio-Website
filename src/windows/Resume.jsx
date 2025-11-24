import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import { Download } from 'lucide-react'
import React from 'react'
import { Document,Page,pdfjs } from 'react-pdf';


import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function Resume() {
  return (
    <>
      <div id="window-header">
        <a href="files/resume.pdf" download className='cursor-pointer mr-8' title="Download Resume">
          <Download className='icon' />
        </a>
        <h2 className='mr-8'>Resume.pdf </h2>
        <WindowControls target='resume' />
      </div>
      <Document file="files/resume.pdf">
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  )
}
const resumeWrapper = WindowWrapper(Resume, 'resume')
export default resumeWrapper
