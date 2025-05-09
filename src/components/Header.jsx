export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-16 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Francis Fajardo</h1>
        <p className="text-xl text-indigo-100 mb-6 animate-fade-in delay-100">Frontend Developer & QA Tester</p>
        <div className="animate-fade-in delay-200">
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </header>
  );
}