import { forwardRef } from 'react'
import type { Message } from './chat-interface'
import ChatMessage from './chat-message'
import ChatLoadingIndicator from './chat-loading-indicator'

interface ChatMessagesProps {
    messages: Message[]
    isLoading: boolean
}

const ChatMessages = forwardRef<HTMLDivElement, ChatMessagesProps>(({ messages, isLoading }, ref) => {
    return (
        <div className='flex-1 overflow-y-auto bg-background'>
            <div className='mx-auto px-6 py-8 space-y-6'>
                {messages.length === 0 ? (
                    <div className='flex items-center justify-center h-full text-center'>
                        <div>
                            <div className='text-4xl mb-4'>👋</div>
                            <h2 className='text-2xl font-semibold text-foreground mb-2'>Welcome to AI Chat</h2>
                            <p className='text-muted-foreground max-w-md'>
                                Start a conversation by typing your question or prompt below
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        {messages.map((message) => (
                            <ChatMessage key={message.id} message={message} />
                        ))}
                        {isLoading && <ChatLoadingIndicator />}
                    </>
                )}
                <div ref={ref} />
            </div>
        </div>
    )
})

ChatMessages.displayName = 'ChatMessages'

export default ChatMessages
