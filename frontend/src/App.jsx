import { useState } from 'react'
import axios from 'axios'

import SearchBar from './components/SearchBar'
import NewsCard from './components/NewsCard'
import Loader from './components/Loader'

export default function App() {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    const searchNews = async () => {

        if (!query) return

        try {

            setLoading(true)

            const response = await axios.get(
                `http://4.224.139.214:8000/search?query=${query}`
            )

            setResults(response.data.results)

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)
        }
    }

    return (

        <div className="min-h-screen bg-slate-950 p-10">

            <h1 className="text-6xl font-bold text-center text-white mb-4">
                Web Scraper
            </h1>

            <p className="text-center text-gray-400 mb-12 text-lg">
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
