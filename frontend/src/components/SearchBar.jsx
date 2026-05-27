export default function SearchBar({
    query,
    setQuery,
    onSearch
}) {

    return (

        <div className="flex justify-center gap-4 mb-10">

            <input
                type="text"
                placeholder="Search latest news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="
          w-[600px]
          p-4
          rounded-2xl
          bg-slate-800
          text-white
          border-none
          outline-none
          text-lg
        "
            />

            <button
                onClick={onSearch}
                className="
          bg-blue-600
          text-white
          px-8
          rounded-2xl
          font-semibold
          hover:bg-blue-700
          transition
        "
            >
                Search
            </button>

        </div>
    )
}