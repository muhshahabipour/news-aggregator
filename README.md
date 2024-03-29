# News Aggregator

The React, Vite, and Tailwind CSS powered news aggregator presents a sleek and efficient solution for accessing diverse news sources. Seamlessly integrating React's component-driven framework with Vite's rapid development environment and Tailwind CSS's utility-first styling, this aggregator offers users a seamless browsing experience. Through a clean and intuitive interface, users can effortlessly browse, filter, and customize their news consumption according to their preferences. With its efficient use of modern web technologies, this news aggregator ensures quick loading times and responsive design across various devices, catering to the needs of today's digitally-connected audience.

## Getting Started

These instructions will cover usage information and for the docker container

### Usage


#### Environment Variables

* `VITE_NEWS_API_KEY` - please get api key from [this Link](https://newsapi.org) and set in .env.production 
* `VITE_NY_TIMES_KEY` - please get api key from [this Link](https://developer.nytimes.com) and set in .env.production
* `VITE_GUARDIAN_KEY` - please get api key from [this Link](https://open-platform.theguardian.com) and set in .env.production


#### Container Parameters

Build a container

```shell
docker build . -t "news-aggregator:v1.0"
```

Run the container

```shell
docker run -d -p 8080:8080 news-aggregator:v1.0
```
