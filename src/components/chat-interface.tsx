import { useState, useRef, useEffect } from 'react'
import ChatMessages from './chat-messages'
import ChatInput from './chat-input'

export type Message = {
    id: string
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSendMessage = async (content: string) => {
        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content,
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setIsLoading(true)

        // Simulate AI response
        setTimeout(() => {
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: `I understand you said: "${content}". How can I help you further?`,
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, assistantMessage])
            setIsLoading(false)
        }, 800)
    }

    return (
        <div className='w-full flex flex-col h-screen bg-background'>
            {/* Header */}
            <div className='border-b border-border bg-card px-6 py-4 shadow-sm'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-xl font-semibold text-foreground'>AI Assistant</h1>
                    <p className='text-sm text-muted-foreground'>Chat with your AI assistant</p>
                </div>
            </div>

            {/* Messages Container */}
            <ChatMessages messages={messages} isLoading={isLoading} ref={messagesEndRef} />

            {/* Input Container */}
            <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
        </div>
    )
}
