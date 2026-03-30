export default function Footer() {
  return (
    <footer className="py-10 bg-black border-t border-white/10" aria-label="Rodapé">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black gradient-text">SyntaxSoul</span>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} SyntaxSoul. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
