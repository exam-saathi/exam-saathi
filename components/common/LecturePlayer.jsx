"use client";

export default function LecturePlayer({ youtubeUrl, title = "Lecture" }) {
  function getVideoId(url) {
    try {
      const u = new URL(url);

      if (u.hostname === "youtu.be") {
        return u.pathname.slice(1);
      }

      if (u.hostname.includes("youtube.com")) {
        return u.searchParams.get("v");
      }

      return "";
    } catch {
      return "";
    }
  }

  const videoId = getVideoId(youtubeUrl);

  if (!videoId) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-red-300">
        Lecture unavailable
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="border-t border-white/10 bg-slate-950 px-4 py-3">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs text-slate-500">
          LOYAL ACADEMY • Lecture Player
        </p>
      </div>
    </div>
  );
}
