import { IinstragramPost } from "@customTypes/instagram";

export const initIGPost = async ():Promise<IinstragramPost[]> => {
  const igposts  = []
	try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`;

    const data = await fetch(url);
    const feed = await data.json()
    // console.log('feed',feed)
    for (let i = 0; i < 9; i++) {
      if (feed.data[i].media_type === 'VIDEO') continue
      const post: IinstragramPost = {
        id: feed.data[i].id ? feed.data[i].id : "",
        caption: feed.data[i].caption ? feed.data[i].caption : "" ,
        mediaType: feed.data[i].media_type ? feed.data[i].media_type : "",
        mediaUrl: feed.data[i].media_url ? feed.data[i].media_url : "",
        permalink: feed.data[i].permalink ? feed.data[i].permalink : "",
        timestamp: feed.data[i].timestamp ? feed.data[i].timestamp : "",
        username: feed.data[i].username ? feed.data[i].username : "",
      }
      igposts.push(post)
    }
	} catch (error) {
		console.error("@initIgClient error", error);
	}
  // console.log('ig post',igposts)
  return igposts
};
