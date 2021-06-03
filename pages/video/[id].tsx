import { useRouter } from "next/router";

const Video = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default Video;
