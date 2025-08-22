export default function Footer() {
  return (
    <footer className="p-6 text-center bg-gray-100">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </p>
    </footer>
  );
}
