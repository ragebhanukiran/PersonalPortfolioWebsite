import { useMinecraftTheme } from "./minecraft-theme-provider";
import { motion, AnimatePresence } from "framer-motion";

/* ===== PIXEL ART COMPONENTS ===== */

function PixelSun() {
  return (
    <div className="mc-celestial" style={{ width: 48, height: 48 }}>
      <svg width="48" height="48" viewBox="0 0 8 8" className="pixel-art" style={{ imageRendering: "pixelated" }}>
        <rect x="3" y="0" width="2" height="1" fill="#FFD700" />
        <rect x="1" y="1" width="1" height="1" fill="#FFD700" />
        <rect x="6" y="1" width="1" height="1" fill="#FFD700" />
        <rect x="2" y="2" width="4" height="4" fill="#FFD700" />
        <rect x="3" y="2" width="2" height="1" fill="#FFF176" />
        <rect x="2" y="3" width="1" height="1" fill="#FFF176" />
        <rect x="1" y="6" width="1" height="1" fill="#FFD700" />
        <rect x="6" y="6" width="1" height="1" fill="#FFD700" />
        <rect x="3" y="7" width="2" height="1" fill="#FFD700" />
        <rect x="0" y="3" width="1" height="2" fill="#FFD700" />
        <rect x="7" y="3" width="1" height="2" fill="#FFD700" />
      </svg>
    </div>
  );
}

function PixelMoon() {
  return (
    <div className="mc-celestial" style={{ width: 48, height: 48 }}>
      <svg width="48" height="48" viewBox="0 0 8 8" className="pixel-art" style={{ imageRendering: "pixelated" }}>
        <rect x="3" y="0" width="3" height="1" fill="#E0E0E0" />
        <rect x="2" y="1" width="1" height="1" fill="#E0E0E0" />
        <rect x="5" y="1" width="2" height="1" fill="#E0E0E0" />
        <rect x="1" y="2" width="2" height="1" fill="#F5F5F5" />
        <rect x="1" y="3" width="2" height="1" fill="#F5F5F5" />
        <rect x="4" y="2" width="1" height="1" fill="#BDBDBD" />
        <rect x="6" y="2" width="1" height="2" fill="#E0E0E0" />
        <rect x="1" y="4" width="1" height="2" fill="#E0E0E0" />
        <rect x="3" y="4" width="1" height="1" fill="#BDBDBD" />
        <rect x="5" y="4" width="2" height="1" fill="#E0E0E0" />
        <rect x="2" y="6" width="1" height="1" fill="#E0E0E0" />
        <rect x="5" y="5" width="1" height="1" fill="#F5F5F5" />
        <rect x="3" y="7" width="3" height="1" fill="#E0E0E0" />
        <rect x="2" y="5" width="3" height="1" fill="#E0E0E0" />
      </svg>
    </div>
  );
}

function PixelPig() {
  return (
    <div className="mc-pig-body" style={{ width: 64, height: 40 }}>
      <svg width="64" height="40" viewBox="0 0 16 10" className="pixel-art" style={{ imageRendering: "pixelated" }}>
        {/* Body */}
        <rect x="3" y="2" width="10" height="5" fill="#F4A4B8" />
        <rect x="4" y="2" width="8" height="1" fill="#F8BCC8" />
        {/* Head */}
        <rect x="0" y="1" width="5" height="5" fill="#F4A4B8" />
        <rect x="1" y="1" width="3" height="1" fill="#F8BCC8" />
        {/* Eyes */}
        <rect x="1" y="3" width="1" height="1" fill="#333" />
        <rect x="3" y="3" width="1" height="1" fill="#333" />
        {/* Snout */}
        <rect x="0" y="4" width="3" height="2" fill="#E88CA0" />
        <rect x="0" y="4" width="1" height="1" fill="#333" />
        <rect x="2" y="4" width="1" height="1" fill="#333" />
        {/* Legs */}
        <rect x="4" y="7" width="2" height="3" fill="#F4A4B8" />
        <rect x="10" y="7" width="2" height="3" fill="#F4A4B8" />
        {/* Ears */}
        <rect x="0" y="0" width="2" height="1" fill="#E88CA0" />
        <rect x="3" y="0" width="2" height="1" fill="#E88CA0" />
        {/* Tail */}
        <rect x="13" y="3" width="2" height="1" fill="#F4A4B8" />
        <rect x="14" y="2" width="1" height="1" fill="#F4A4B8" />
      </svg>
    </div>
  );
}

function PixelSteve() {
  return (
    <div style={{ width: 64, height: 96 }}>
      <svg width="64" height="96" viewBox="0 0 8 12" className="pixel-art" style={{ imageRendering: "pixelated" }}>
        {/* Hair */}
        <rect x="0" y="0" width="8" height="1" fill="#3C2415" />
        <rect x="0" y="1" width="1" height="2" fill="#3C2415" />
        <rect x="7" y="1" width="1" height="1" fill="#3C2415" />
        {/* Head / Face */}
        <rect x="1" y="1" width="6" height="3" fill="#C49A6C" />
        {/* Eyes */}
        <rect x="2" y="2" width="1" height="1" fill="#fff" />
        <rect x="5" y="2" width="1" height="1" fill="#fff" />
        <rect x="2" y="2" width="1" height="1" fill="#4040CF" opacity="0.7" />
        <rect x="5" y="2" width="1" height="1" fill="#4040CF" opacity="0.7" />
        {/* Mouth */}
        <rect x="3" y="3" width="2" height="1" fill="#8B5E3C" />
        {/* T-shirt (teal) */}
        <rect x="0" y="4" width="8" height="3" fill="#00AAAA" />
        <rect x="0" y="4" width="2" height="3" fill="#00AAAA" />
        <rect x="6" y="4" width="2" height="3" fill="#00AAAA" />
        {/* Shirt center detail */}
        <rect x="3" y="4" width="2" height="1" fill="#009999" />
        <rect x="3" y="5" width="2" height="1" fill="#008888" />
        {/* Arms (skin) */}
        <rect x="0" y="4" width="1" height="1" fill="#C49A6C" />
        <rect x="7" y="4" width="1" height="1" fill="#C49A6C" />
        {/* Pants (blue jeans) */}
        <rect x="1" y="7" width="3" height="3" fill="#3535AC" />
        <rect x="4" y="7" width="3" height="3" fill="#2D2D96" />
        {/* Belt */}
        <rect x="1" y="7" width="6" height="1" fill="#4A4A4A" />
        {/* Shoes */}
        <rect x="1" y="10" width="3" height="2" fill="#555" />
        <rect x="4" y="10" width="3" height="2" fill="#444" />
      </svg>
    </div>
  );
}

function PixelTree({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ width: 56, height: 80, ...style }}>
      {/* Leaves */}
      <div className="mc-tree-leaves" style={{ width: 56, height: 48 }}>
        <svg width="56" height="48" viewBox="0 0 7 6" className="pixel-art" style={{ imageRendering: "pixelated" }}>
          <rect x="1" y="0" width="5" height="1" fill="var(--mc-grass)" />
          <rect x="0" y="1" width="7" height="1" fill="var(--mc-grass)" />
          <rect x="0" y="2" width="7" height="1" fill="var(--mc-grass)" />
          <rect x="0" y="3" width="7" height="1" fill="var(--mc-grass-light)" />
          <rect x="1" y="4" width="5" height="1" fill="var(--mc-grass-light)" />
          <rect x="2" y="5" width="3" height="1" fill="var(--mc-grass)" />
        </svg>
      </div>
      {/* Trunk */}
      <svg width="56" height="32" viewBox="0 0 7 4" className="pixel-art" style={{ imageRendering: "pixelated" }}>
        <rect x="3" y="0" width="1" height="4" fill="var(--mc-wood)" />
      </svg>
    </div>
  );
}

function PixelCloud({ delay = 0, top = 40 }: { delay?: number; top?: number }) {
  return (
    <div
      className="mc-cloud absolute"
      style={{
        top,
        animation: `cloudFloat ${25 + delay * 5}s linear infinite`,
        animationDelay: `${delay * -8}s`,
      }}
    >
      <svg width="96" height="36" viewBox="0 0 12 4" className="pixel-art" style={{ imageRendering: "pixelated" }}>
        <rect x="2" y="0" width="4" height="1" fill="white" />
        <rect x="1" y="1" width="10" height="1" fill="white" />
        <rect x="0" y="2" width="12" height="1" fill="#f0f0f0" />
        <rect x="1" y="3" width="10" height="1" fill="#e8e8e8" />
      </svg>
    </div>
  );
}

function Stars() {
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 60}%`,
    delay: `${Math.random() * 3}s`,
    size: Math.random() > 0.7 ? 3 : 2,
  }));

  return (
    <div className="mc-star absolute inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-none"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            backgroundColor: "#fff",
            animation: `twinkle 2s ease-in-out infinite`,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ===== GRASS BORDER BETWEEN SECTIONS ===== */
export function GrassDivider() {
  return (
    <div className="w-full h-8 relative overflow-hidden" style={{ marginTop: -1, marginBottom: -1 }}>
      <svg width="100%" height="32" preserveAspectRatio="none" viewBox="0 0 40 4" className="pixel-art" style={{ imageRendering: "pixelated" }}>
        <rect x="0" y="0" width="40" height="1" fill="var(--mc-grass)" />
        <rect x="0" y="1" width="40" height="1" fill="var(--mc-grass-light)" />
        <rect x="0" y="2" width="40" height="2" fill="var(--mc-dirt)" />
      </svg>
    </div>
  );
}

/* ===== MAIN SCENE (Sky + Characters) ===== */
export function MinecraftScene() {
  const { isDayMode } = useMinecraftTheme();

  return (
    <>
      {/* Background layer — sky, stars, clouds, sun/moon (z-0, behind content) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        {/* Sky gradient */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `linear-gradient(180deg, var(--mc-sky) 0%, var(--mc-sky-bottom) 70%, var(--mc-bg) 100%)`,
          }}
        />

        {/* Stars (night only) */}
        <Stars />

        {/* Clouds */}
        <PixelCloud delay={0} top={30} />
        <PixelCloud delay={1} top={60} />
        <PixelCloud delay={2} top={90} />
        <PixelCloud delay={3} top={45} />

        {/* Sun/Moon */}
        <div className="absolute top-16 right-[15%]">
          <AnimatePresence mode="wait">
            {isDayMode ? (
              <motion.div
                key="sun"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <PixelSun />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <PixelMoon />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

/* ===== VILLAGER (used near Experience section) ===== */
export function PixelVillager() {
  return (
    <div className="hidden md:block" style={{ width: 48, height: 64 }}>
      <svg width="48" height="64" viewBox="0 0 6 8" className="pixel-art" style={{ imageRendering: "pixelated" }}>
        {/* Head */}
        <div className="mc-villager-head" style={{ display: "contents" }}>
          <rect x="1" y="0" width="4" height="3" fill="#C4A882" />
          {/* Eyes */}
          <rect x="1" y="1" width="1" height="1" fill="#333" />
          <rect x="4" y="1" width="1" height="1" fill="#333" />
          {/* Nose */}
          <rect x="2" y="2" width="2" height="1" fill="#A08060" />
        </div>
        {/* Body (robe) */}
        <rect x="0" y="3" width="6" height="3" fill="#8B4513" />
        <rect x="1" y="3" width="4" height="1" fill="#A0522D" />
        {/* Legs */}
        <rect x="1" y="6" width="2" height="2" fill="#555" />
        <rect x="3" y="6" width="2" height="2" fill="#555" />
      </svg>
    </div>
  );
}
