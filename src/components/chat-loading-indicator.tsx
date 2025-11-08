export default function ChatLoadingIndicator() {
    return (
        <div className='flex justify-start'>
            <div className='flex gap-3'>
                {/* Avatar */}
                <div className='flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold bg-secondary text-secondary-foreground'>
                    AI
                </div>

                {/* Loading dots */}
                <div className='px-4 py-3 rounded-lg bg-secondary text-secondary-foreground rounded-bl-none'>
                    <div className='flex gap-1'>
                        <div className='w-2 h-2 rounded-full bg-secondary-foreground/60 animate-pulse'></div>
                        <div
                            className='w-2 h-2 rounded-full bg-secondary-foreground/60 animate-pulse'
                            style={{ animationDelay: '0.1s' }}
                        ></div>
                        <div
                            className='w-2 h-2 rounded-full bg-secondary-foreground/60 animate-pulse'
                            style={{ animationDelay: '0.2s' }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
