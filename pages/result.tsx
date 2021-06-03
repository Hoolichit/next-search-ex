import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const Result = () => {
  const router = useRouter();
  const { keyword, limit } = router.query;
  const [videoList, setVideoList] = useState([]);

  const api = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDHBHN2yOF9Nq6pR527rdsF4ic_oppeZHY&part=snippet&type=video${
    limit && `&maxResults=${limit}`
  }`;

  useEffect(() => {
    (async () => {
      if (!keyword) return;
      const result = await axios.get(`${api}&q=${keyword}`);
      setVideoList(result.data.items);
    })();
  }, [keyword]);

  console.log(router);

  return (
    <>
      <div>Search: {keyword}</div>
      <div>
        {videoList.length > 0 && (
          <h2>Search Result: {videoList.length} video</h2>
        )}
        <ul>
          {videoList.map((video, index) => {
            const {
              id: { videoId },
              snippet: { title, thumbnails },
            } = video;
            return (
              <li key={index}>
                <Link href={`/video/${videoId}`}>
                  <a>
                    <h4>{title}</h4>
                    <img src={thumbnails.medium.url} alt={title} />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Result;
