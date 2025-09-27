import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              👤
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            インフラエンジニアのポートフォリオサイトです
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/portfolio"
            className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 max-w-sm"
          >
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              技術スキルや経験について紹介します
            </p>
            <div className="mt-4 text-blue-500 group-hover:text-blue-600 font-medium">
              詳細を見る →
            </div>
          </Link>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            浅瀬ちゃぷちゃぷエンジニア
          </p>
        </div>
      </div>
    </div>
  )
}