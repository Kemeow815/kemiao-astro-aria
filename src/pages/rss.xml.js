// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blogPosts = await getCollection('post');
  return rss({
    title: '喵落阁',
    description: '愿你看清一切真相后，依旧热爱你的家人和朋友。',
    site: context.site,
    items: blogPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/post/${post.slug}/`, // 文章路由需与项目一致
    })),
    customData: `<language>zh-cn</language>`, // 中文支持
  });
}