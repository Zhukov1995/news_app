class NewsService {
    _apiBase = "https://hacker-news.firebaseio.com/v0/";

    getResours = async (url: string) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url},status: ${res.status}`);
        }

        return await res.json();
    }

    getNewAndTopNews = async () => {
        const res = await this.getResours(`${this._apiBase}newstories.json?print=pretty`);
        return res;
    }

    getNewsForId = async (id: string) => {
        const res = await this.getResours(`${this._apiBase}item/${id}.json?print=pretty`);
        return res;
    }

}

export default NewsService;