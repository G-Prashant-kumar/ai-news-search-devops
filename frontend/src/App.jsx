import { useState } from 'react'
// import axios from 'axios'

import SearchBar from './components/SearchBar'
import NewsCard from './components/NewsCard'
import Loader from './components/Loader'


export default function App() {

    const [query, setQuery] = useState('')

    const [results, setResults] = useState([])

    const [loading, setLoading] = useState(false)


    const searchNews = () => {

        if (!query) return

        setLoading(true)

        setTimeout(() => {

            setResults([
                {
                    title: "AI News Search Deployed Successfully",
                    source: "DevOps Assignment",
                    summary:
                        "This React frontend application was containerized using Docker and prepared for CI/CD deployment using Jenkins and Kubernetes.",
                    image:
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

                    link: "https://github.com"
                },

                {
                    title: "Docker + Kubernetes Integration",
                    source: "AKS Deployment",

                    summary:
                        "The application frontend is successfully running inside Docker containers and ready for deployment to Azure Kubernetes Service.",

                    image:
                        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",

                    link: "https://kubernetes.io"
                }
            ])

            setLoading(false)

        }, 1200)
    }



    return (

        <div className="min-h-screen bg-slate-950 p-10">

            <h1
                className="
          text-6xl
          font-bold
          text-center
          text-white
          mb-4
        "
            >
                AI News Search
            </h1>

            <p
                className="
          text-center
          text-gray-400
          mb-12
          text-lg
        "
            >
                Search latest information from across the internet
            </p>

            <SearchBar
                query={query}
                setQuery={setQuery}
                onSearch={searchNews}
            />

            {
                loading && <Loader />
            }

            <div className="max-w-5xl mx-auto mt-10">

                {
                    results.map((item, index) => (

                        <NewsCard
                            key={index}
                            item={item}
                        />
                    ))
                }

            </div>

        </div>
    )
}