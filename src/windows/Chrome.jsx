import { WindowControls } from '#components';
import { blogPosts } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import { ArrowLeft, ArrowRight, ArrowUpCircle, Blocks, BookMarked, ChevronDown, ChevronLeft, ChevronRight, CircleArrowOutUpRightIcon, CircleUser, EllipsisVertical, GlobeLock, PanelLeft, Puzzle, RefreshCcwDotIcon, RefreshCcwIcon, RotateCw, Search, ShieldHalf, Star, X } from 'lucide-react';
import React from 'react'

function Chrome() {

  return (
    <>
    <div id="window-header" >
      <ChevronDown className='bg-gray-600 rounded-full icon !-mb-3'/>
      <div className='tab flex gap-30 items-center'  style={{borderRadius:"10px 10px 0 0px" }}>
        <div className='flex items-center gap-1'>
        <GlobeLock className='icon'/> Articles 
        </div>
        <X className='icon'/> 
        </div>
        
      <h2> </h2>
      <p><WindowControls target='safari'/></p>
      
    </div>
    <div className='flex items-center '>
      
      <div className="flex items-center gap-1 ml-5">
        <ArrowLeft className='icon'/>
        <ArrowRight className='icon'/>
        <RotateCw className='icon'/>
      </div>
      <div className="flex-1 m-2  flex-center gap-3">
        <div className="search justify-between w-full rounded-4xl h-7.5">
          <Search className='icon'/>
          <Star className='icon'/>
        </div>
        <ShieldHalf className='icon'/>
        <Blocks/>
        <CircleUser/>
        <EllipsisVertical/>
      </div>
    </div>
      <div className="blog">
        <h2>Documentations</h2>
        <div className="space-y-8">
          {blogPosts.map(({id, image, title, date, link}) => (
          <div key={id} className='blog-post'>
            <div className="col-span-2">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <p>{date}</p>
              <h3>{title}</h3>
              <a href={link} target='_blank' rel="noopener noreferrer"> Check out the full post</a>
            </div>
          </div>
        ))}
        </div>       
      </div>
    </>
  )
}
const ChromeWindow = WindowWrapper(Chrome,'safari')
export default ChromeWindow