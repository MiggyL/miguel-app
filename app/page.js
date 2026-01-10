'use client';

import { useState } from 'react';
import Avatar from './components/Avatar';
import QRCode from './components/QRCode';
import DeploymentSelector from './components/DeploymentSelector';
import { getVideoPath } from '@/lib/assets';

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isAltAvatar, setIsAltAvatar] = useState(false);
  const [language, setLanguage] = useState('english'); // 'english' or 'german'

  const playVideo = (videoName) => {
    setCurrentVideo(getVideoPath(videoName, { isReal: isAltAvatar, language }));
  };

  const handleVideoEnd = () => {
    setCurrentVideo(null);
  };

  const handleAvatarSwitch = () => {
    setIsAltAvatar(!isAltAvatar);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'english' ? 'german' : 'english');
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#1f1f1f]">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://miguel-app.pages.dev/"
              className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm hover:opacity-80 transition-opacity cursor-pointer">
              M
            </a>
            <a
              href="https://miguel-app.pages.dev/"
              className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
              Miguel Lacanienta
            </a>
          </div>
          <DeploymentSelector />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Avatar Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative">
          <QRCode />
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <div className="aspect-[2/3] rounded-xl overflow-hidden">
                <Avatar
                  isSpeaking={false}
                  videoToPlay={currentVideo}
                  onVideoEnd={handleVideoEnd}
                  isAltAvatar={isAltAvatar}
                  onAvatarSwitch={handleAvatarSwitch}
                  language={language}
                  onLanguageToggle={handleLanguageToggle}
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Miguel Lacanienta</h2>
                <p className="text-gray-600 mt-1">BS Computer Science • AI Specialization • Mapúa University</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => playVideo('objective')}
                  className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 cursor-pointer">
                  Objective
                </button>
                <button
                  onClick={() => playVideo('skills')}
                  className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-200 hover:bg-purple-100 hover:border-purple-300 transition-all duration-200 cursor-pointer">
                  Skills
                </button>
                <button
                  onClick={() => playVideo('certs')}
                  className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200 hover:bg-green-100 hover:border-green-300 transition-all duration-200 cursor-pointer">
                  Certifications
                </button>
                <button
                  onClick={() => playVideo('applied')}
                  className="px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium border border-orange-200 hover:bg-orange-100 hover:border-orange-300 transition-all duration-200 cursor-pointer">
                  Applied Skills
                </button>
                <button
                  onClick={() => playVideo('projects')}
                  className="px-4 py-2 rounded-full bg-pink-50 text-pink-700 text-sm font-medium border border-pink-200 hover:bg-pink-100 hover:border-pink-300 transition-all duration-200 cursor-pointer">
                  Projects
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Chat Available Banner */}
        <div className="mt-8 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 shadow-sm">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Want to chat with me?</h3>
              </div>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                This is a static portfolio site. For an interactive AI chat experience, visit{' '}
                <a
                  href="https://chatgpt.com/g/g-694e44e347008191abda5449e3a9eaa5-miguel-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 text-green-700 font-semibold hover:from-green-100 hover:to-teal-100 hover:border-green-300 hover:shadow-md transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                  </svg>
                  Miguel GPT
                </a>
                (ChatGPT Custom GPT) or choose one of the API-based chatbots below.
              </p>
              <p className="text-xs text-gray-500 max-w-2xl mx-auto italic">
                Note: Some sites may be temporarily unavailable due to free tier limitations or usage caps.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {/* Vercel Card */}
                <a
                  href="https://miguel-ai.vercel.app/"
                  className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <h4 className="text-base font-semibold text-gray-900">Vercel</h4>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Llama 3.3 70B</span> <span className="text-gray-400">/ Groq</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Gemma 3 27B</span> <span className="text-gray-400">/ Google</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Mistral Large</span> <span className="text-gray-400">/ Mistral AI</span></p>
                    </div>
                  </div>
                </a>

                {/* Netlify Card */}
                <a
                  href="https://miguel-ai-2.netlify.app/"
                  className="group bg-white rounded-xl p-4 border border-teal-200 hover:border-teal-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <h4 className="text-base font-semibold text-teal-700">Netlify</h4>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Llama 3.3 70B</span> <span className="text-gray-400">/ Groq</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Gemma 3 27B</span> <span className="text-gray-400">/ Google</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Mistral Large</span> <span className="text-gray-400">/ Mistral AI</span></p>
                    </div>
                  </div>
                </a>

                {/* Render Card */}
                <a
                  href="https://miguel-ai.onrender.com/"
                  className="group bg-white rounded-xl p-4 border border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <h4 className="text-base font-semibold text-purple-700">Render</h4>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Llama 3.3 70B</span> <span className="text-gray-400">/ Groq</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Gemma 3 27B</span> <span className="text-gray-400">/ Google</span></p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Mistral Large</span> <span className="text-gray-400">/ Mistral AI</span></p>
                    </div>
                  </div>
                </a>

                {/* Cloudflare Card */}
                <a
                  href="https://miguel-ai.pages.dev/"
                  className="group bg-white rounded-xl p-4 border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <h4 className="text-base font-semibold text-orange-700">Cloudflare</h4>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-1.5">
                      <span className="text-gray-400 text-xs mt-0.5">•</span>
                      <p className="text-xs"><span className="text-gray-700 font-medium">Mistral Large</span> <span className="text-gray-400">/ Mistral AI</span></p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

