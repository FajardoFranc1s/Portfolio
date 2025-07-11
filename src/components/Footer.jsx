export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Francis Fajardo</h3>

          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}