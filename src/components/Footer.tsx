export function Footer() {
  return (
    <footer className="bg-glass backdrop-blur-surface relative mt-20 border-t border-white/10">
      {/* Glow edges */}
      <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-aqua/50 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-2 py-12 sm:px-4 lg:px-6">
        <p className="text-center text-sm text-white/50">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          jFeliWeb Creator Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
