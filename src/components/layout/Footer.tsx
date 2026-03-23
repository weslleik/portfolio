export function Footer() {
  return (
    <footer className="relative z-10 border-t border-purple-500/10 py-8 text-center font-mono text-xs text-[#4a3f60]">
      <span className="text-purple-400">&lt;</span>
      {' '}Built with passion &amp; code{' '}
      <span className="text-purple-400">/&gt;</span>
      {' '}·{' '}© {new Date().getFullYear()}
    </footer>
  )
}
