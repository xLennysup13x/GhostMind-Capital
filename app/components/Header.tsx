export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black text-white">
      <img src="/logo.svg" alt="Ghostmind" className="h-7" />
      <nav className="space-x-4">
        <a href="#drop" className="hover:text-green-400">Drop</a>
        <a href="#lookbook" className="hover:text-green-400">Lookbook</a>
        <a href="#shop" className="hover:text-green-400">Shop</a>
      </nav>
    </header>
  );
}