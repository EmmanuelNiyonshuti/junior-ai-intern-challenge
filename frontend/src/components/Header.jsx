import React from 'react'
import {Share2, Trash2} from 'lucide-react';

const Header = () => {
  return (
        // {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Untitled Prompt</h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-gray-400 hover:text-gray-200">
              <Share2 className="w-5 h-5" />
              Share link to Prompt
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-gray-200">
              <Trash2 className="w-5 h-5" />
              Delete Prompt
            </button>
          </div>
        </header>
  )
}

export default Header