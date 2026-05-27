from ddgs import DDGS
from newspaper import Article
from transformers import pipeline
import requests


# Fake browser headers
headers = {
    "User-Agent": (
        "Mozilla/5.0 "
        "(Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 "
        "(KHTML, like Gecko) "
        "Chrome/124.0 Safari/537.36"
    )
}


# AI Summarizer Model
summarizer = pipeline(
    "summarization",
    model="facebook/bart-large-cnn"
)


def search_news(query):

    results = []

    with DDGS() as ddgs:

        # Search recent news
        search_results = ddgs.news(
            query,
            max_results=10
        )

        for item in search_results:

            try:

                # News URL
                url = item["url"]

                # Skip useless links
                blocked_sites = [
                    "youtube.com",
                    "instagram.com",
                    "facebook.com",
                    "twitter.com",
                    "x.com"
                ]

                if any(site in url for site in blocked_sites):
                    continue

                # Download webpage
                response = requests.get(
                    url,
                    headers=headers,
                    timeout=10
                )

                html = response.text

                # Parse article
                article = Article(url)

                article.set_html(html)

                article.parse()

                # Default summary
                summary_text = item.get("body", "")

                # AI summary generation
                if article.text:

                    try:

                        text_length = len(article.text.split())

                        max_len = min(80, text_length)

                        min_len = min(30, max_len // 2)

                        ai_summary = summarizer(
                            article.text[:2000],
                            max_length=max_len,
                            min_length=min_len,
                            do_sample=False
                        )

                        summary_text = ai_summary[0]["summary_text"]
                        print("AI SUMMARY GENERATED")
                    except Exception as e:

                        print("Summary Error:", e)

                        summary_text = article.text[:500]

                # Add result
                results.append({

                    "title": (
                        article.title
                        if article.title
                        else item.get("title", "")
                    ),

                    "summary": summary_text,

                    "url": url,

                    "image": article.top_image,

                    "published": item.get("date", ""),

                    "source": item.get("source", "Unknown")
                })

            except Exception as e:

                print("Error:", e)

    return results