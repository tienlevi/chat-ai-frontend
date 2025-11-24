# AI UI Generator

A Next.js application that generates beautiful UI components using AI, powered by the **v0 SDK**.

## Features

- **Real v0 Integration**: Uses the official v0 SDK for generating UI components
- **Split-Screen Interface**: Chat interface with live preview panel
- **Simple Home Page**: Clean interface with prompt input box
- **Chat-based Interaction**: Dynamic `/chat/[id]` routes for ongoing conversations
- **Live Preview**: See your generated UI components in real-time
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS

## Getting Started

### Prerequisites

1. **Get your V0 API Key**: Visit [v0.dev/chat/settings/keys](https://v0.dev/chat/settings/keys) to create an API key

### Installation

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Configure environment variables**:
   Create a `.env.local` file in the `apps/web/` directory:

   ```bash
   # V0 API Configuration
   V0_API_KEY=your_v0_api_key_here
   ```

3. **Run the development server**:

   ```bash
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## How to Use

1. **Create a new UI**:

   - Enter a description of the UI you want to create on the home page
   - Click "Generate UI" to **immediately redirect** to the chat interface
   - The system will start generating your component in the background

2. **Watch the generation**:

   - You'll see a loading spinner in the preview panel while v0 generates your component
   - The chat interface will show your original prompt and the generation progress
   - Once complete, the live preview will display your generated UI component

3. **Interact with v0**:

   - Use the chat interface to refine your UI requests
   - Each message updates the live preview in real-time
   - Click "View in v0.dev" links to open components in the official v0 interface

4. **Iterate and refine**:
   - Continue the conversation to modify your components
   - The preview panel will show a loading state during each update
   - View the component source code on v0.dev
