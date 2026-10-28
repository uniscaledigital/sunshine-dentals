import React, { useState, useRef } from 'react';

interface Reel {
  id: string;
  title: string;
  topic: string;
  videoUrl: string;
}

const reelsData: Reel[] = [
  {
    id: 'reel-1',
    title: 'Skipping Brushing at Night?',
    topic: 'Your teeth at 12 AM when you skip brushing • Dental Hygiene',
    videoUrl: '/videos/reels/reel-1-skip-brushing.mp4'
  },
  {
    id: 'reel-3',
    title: 'Warangal Chai Lovers, Watch This!',
    topic: '3-4 Irani chais a day = yellow & black stains • Stain Prevention',
    videoUrl: '/videos/reels/reel-3-warangal-chai.mp4'
  },
  {
    id: 'reel-2',
    title: 'Hot Mirchi Bajji + Cold Thums Up',
    topic: 'Extreme hot & cold combination enamel cracking • Enamel Care',
    videoUrl: '/videos/reels/reel-2-mirchi-bajji.mp4'
  }
];

interface ReelCardProps {
  reel: Reel;
  activePlayingId: string | null;
  onPlayStateChange: (id: string, isPlaying: boolean) => void;
}

const ReelCard: React.FC<ReelCardProps> = ({ reel, activePlayingId, onPlayStateChange }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  // If another reel starts playing, pause this one
  React.useEffect(() => {
    if (activePlayingId !== reel.id && isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
    }
  }, [activePlayingId, reel.id, isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      onPlayStateChange(reel.id, false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        onPlayStateChange(reel.id, true);
      }).catch(() => {
        // Fallback: if browser blocks unmuted play, retry muted
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
          setIsPlaying(true);
          onPlayStateChange(reel.id, true);
        }
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    onPlayStateChange(reel.id, false);
  };

  return (
    <div
      onClick={togglePlay}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          togglePlay();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${isPlaying ? 'Pause' : 'Play'} reel: ${reel.title}`}
      className="relative aspect-[9/16] w-[240px] sm:w-[260px] md:w-full md:max-w-[300px] shrink-0 md:shrink mx-auto rounded-3xl overflow-hidden bg-black border border-surface-container shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer select-none group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={reel.videoUrl}
        preload="metadata"
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="w-full h-full object-cover"
      />

      {/* Top Bar: Instagram Badge & Sound Toggle */}
      <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
          <svg className="w-3.5 h-3.5 fill-current text-pink-400" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span>Reel</span>
        </span>

        {/* Audio Mute/Unmute Toggle */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="pointer-events-auto w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">
            {isMuted ? 'volume_off' : 'volume_up'}
          </span>
        </button>
      </div>

      {/* Center Play/Pause Indicator Overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-200 pointer-events-none ${
          isPlaying ? 'opacity-0 group-hover:opacity-80' : 'opacity-100'
        }`}
      >
        <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md text-white border-2 border-white/70 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
          <span className="material-symbols-outlined text-3xl fill-current">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </div>
      </div>

      {/* Bottom Info Bar & Progress */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-white z-20 pointer-events-none">
        <p className="font-bold text-sm leading-snug drop-shadow-sm">
          {reel.title}
        </p>
        <p className="text-[11px] text-white/80 mt-1 line-clamp-1 drop-shadow-sm">
          {reel.topic}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-white/25 h-1 rounded-full mt-2.5 overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export const InstagramReelsSection: React.FC = () => {
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);

  const handlePlayStateChange = (id: string, isPlaying: boolean) => {
    if (isPlaying) {
      setActivePlayingId(id);
    } else if (activePlayingId === id) {
      setActivePlayingId(null);
    }
  };

  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-20 border-t border-surface-container overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-3 sm:px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 fill-current text-primary" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            OUR SOCIAL JOURNEY
          </span>
          <h2 className="font-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-on-surface mt-3">
            Follow Our Smile Journey
          </h2>
          <p className="text-sm sm:text-base text-secondary mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Get a closer look at our clinic, meet our dental team, and explore moments from our journey toward healthier smiles.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on tablet/desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-3 px-3 sm:-mx-4 sm:px-4 md:mx-auto md:px-0">
          {reelsData.map((reel) => (
            <div key={reel.id} className="snap-center shrink-0 md:shrink w-[240px] sm:w-[260px] md:w-auto">
              <ReelCard
                reel={reel}
                activePlayingId={activePlayingId}
                onPlayStateChange={handlePlayStateChange}
              />
            </div>
          ))}
        </div>

        {/* CTA: Click Here to See More Button with Exact Instagram URL */}
        <div className="text-center mt-10 flex flex-col items-center gap-3">
          <a
            href="https://www.instagram.com/sunshinedental.hanmakonda?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Click Here to See More</span>
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </a>
          <p className="text-xs text-secondary max-w-md mx-auto">
            Follow Sunshine Dental Clinic on Instagram for more updates, dental tips, and clinic moments.
          </p>
        </div>

      </div>
    </section>
  );
};
