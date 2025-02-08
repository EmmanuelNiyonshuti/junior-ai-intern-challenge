import React from 'react'
import { useState } from "react"
import { Send } from "lucide-react"
import Footer from './Footer'
import Header from './Header'

const ChatInterface = () => {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [chatHistory, setChatHistory] = useState([])  // New state to store chat history

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setLoading(true)
    setError(null)

    // Add prompt to chat history before making API call
    setChatHistory([...chatHistory, { sender: "user", message: prompt }])

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!res.ok) {
        throw new Error("Failed to get response")
      }

      const data = await res.json()
      setResponse(data.msg)

      // Add response to chat history after receiving it
      setChatHistory((prevChat) => [...prevChat, { sender: "ai", message: data.msg }])

    } catch (err) {
      setError("Failed to get response. Please try again.")
    } finally {
      setLoading(false)
    }

    // Clear prompt input field after submission
    setPrompt("")
  }
  return (
    <div className="min-h-screen bg-[#002b44] text-gray-100 p-4 flex justify-center items-start">
      <div className="max-w-4xl w-full mt-16">

        <Header />
        {/* Chat Container */}
        <div className="space-y-6 mb-8">
          {/* Chat History */}
          {chatHistory.map((entry, index) => (
            <div key={index} className="flex gap-4">
              <div className={`w-10 h-10 rounded-full ${entry.sender === "user" ? "bg-blue-600" : "bg-[#ffeaa7]"} flex-shrink-0`} />
              <div className="flex-1">
                <p className="text-gray-200 whitespace-pre-wrap">{entry.message}</p>
              </div>
            </div>
          ))}

          {/* Loading State */}
          {loading && (
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ffeaa7] animate-pulse flex-shrink-0" />
              <div className="flex-1">
                <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4" />
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && <div className="text-red-400 text-sm">{error}</div>}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="How can I help you?"
              className="w-full bg-[#003a5c] rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-200 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  )
}

export default ChatInterface