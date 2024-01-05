var API_KEY = "8f83f3cbc1c3f0fe56ed7e849d516693";

export var requests = {
    getNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    getCollection:(platform, endpoint)=>`${platform}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getVideoById: (details)=>`${details.platform}/${details.id}?api_key=${API_KEY}&language=en-US&page=1&append_to_response=videos`,

    getSimilarVideos: (platform, id)=>`${platform}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    getRecommendedVideos: (platform, id)=>`${platform}/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
}


export const platform = {
    tv:"tv",
    movie: "movie"
}

export const endpoints = {
    popular:"popular",
    upcoming: "upcoming",
    topRated: "top_rated",
    nowPlaying: "now_playing",
    airingToday: "airing_today",
    onTheAir: "on_the_air"
}