export default function NewsCard({ item }) {

    const points = item.summary
        .split(". ")
        .filter(point => point.length > 20)
        .slice(0, 5)

    return (

        <div
            className="
        bg-slate-900
        rounded-3xl
        overflow-hidden
        shadow-xl
        mb-8
      "
        >

            {
                item.image && (

                    <img
                        src={item.image}
                        alt={item.title}
                        className="
              w-full
              h-[300px]
              object-cover
            "
                    />
                )
            }

            <div className="p-8">

                <div className="flex justify-between mb-4">

                    <span
                        className="
              bg-blue-600
              px-4
              py-1
              rounded-full
              text-sm
              text-white
            "
                    >
                        {item.source}
                    </span>

                    <span className="text-gray-400 text-sm">
                        {item.published}
                    </span>

                </div>

                <h2
                    className="
            text-3xl
            font-bold
            text-white
            mb-6
            leading-snug
          "
                >
                    {item.title}
                </h2>

                <ul
                    className="
            list-disc
            pl-6
            space-y-3
            text-gray-300
            text-lg
          "
                >

                    {
                        points.map((point, index) => (

                            <li key={index}>
                                {point.trim()}.
                            </li>
                        ))
                    }

                </ul>

                <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
            inline-block
            mt-6
            text-blue-400
            font-semibold
            hover:underline
          "
                >
                    Read Full Article →
                </a>

            </div>

        </div>
    )
}