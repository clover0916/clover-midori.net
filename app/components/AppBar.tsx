export default function AppBar() {
  return (
    <nav className="p-8 flex justify-between">
      <div className="text-xl font-bold">
        <span>Clover_Midori</span>
      </div>
      <div className="flex gap-8">
        <a href="/#about">About</a>
        <a href="/#service">Projects</a>
        <a href="/#contact">Contact</a>
      </div>
    </nav>
  );
}
