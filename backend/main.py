# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware

# from scraper import search_news

# app = FastAPI()


# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# @app.get("/")
# def home():

#     return {
#         "message": "Dynamic Web Scraper API Running"
#     }


# @app.get("/search")
# def search(query: str):

#     data = search_news(query)

#     return {
#         "query": query,
#         "results": data
#     }

# if __name__ == "__main__":

#     import uvicorn

#     uvicorn.run(app, host="127.0.0.1", port=8000)


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from scraper import search_news

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():

    return {
        "message": "Dynamic Web Scraper API Running"
    }


@app.get("/search")
def search(query: str):

    data = search_news(query)

    return {
        "query": query,
        "results": data
    }


if __name__ == "__main__":

    import uvicorn

    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000
    )